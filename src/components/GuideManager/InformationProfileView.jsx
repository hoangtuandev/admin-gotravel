import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from '@mui/material/Rating';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import styles from './GuideManager.scss';
import { profileSelected } from './GuideManagerSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

export default function InformationsProfile(props) {
    const profile = useSelector(profileSelected);

    const [ratingList, setRatingList] = useState([]);
    const [averageStar, setAvarageStar] = useState(0);
    const [guideTimes, setGuideTimes] = useState(0);

    useEffect(() => {
        api.getRatingGuideByGuideAccount({ _id: profile._id }).then((res) => {
            const ratings = res.data;
            setRatingList(res.data);
            setAvarageStar(
                ratings.reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue.dghdv_saodanhgia,
                    0
                ) / ratings.length
            );
        });
    }, [profile]);

    useEffect(() => {
        api.getGuideTimesByAccount({
            username: profile.tkhdv_tendangnhap,
        }).then((res) => {
            setGuideTimes(res.data);
        });
    }, [profile]);

    return (
        <div className={cx('profile-infor')}>
            <div className={cx('header-profile')}>
                <div>
                    <img
                        className={cx('avatar-guide')}
                        src={profile.tkhdv_anhdaidien}
                        alt=""
                    />
                    <div>
                        <p className={cx('name-guide')}>
                            {profile.tkhdv_huongdanvien.hdv_hoten}
                        </p>
                    </div>
                    <div className={cx('rating')}>
                        <Rating
                            readOnly
                            size="large"
                            className="half-rating"
                            defaultValue={4.7}
                            precision={0.5}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('content-profile')}>
                <p></p>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="infor-item">
                                    <FingerprintIcon
                                        className={cx('icon-profile')}
                                    />
                                    <p className={cx('content-infor')}>
                                        {profile.tkhdv_huongdanvien.hdv_ma}
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div className="infor-item">
                                    <TransgenderIcon
                                        className={cx('icon-profile')}
                                    />

                                    <p className={cx('content-infor')}>
                                        {
                                            profile.tkhdv_huongdanvien
                                                .hdv_gioitinh
                                        }
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div className="infor-item">
                                    <CakeIcon className={cx('icon-profile')} />

                                    <p className={cx('content-infor')}>
                                        {profile.tkhdv_huongdanvien.hdv_namsinh}
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="infor-item">
                                    <LocalPhoneIcon
                                        className={cx('icon-profile')}
                                    />
                                    <p className={cx('content-infor')}>
                                        {
                                            profile.tkhdv_huongdanvien
                                                .hdv_sodienthoai
                                        }
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div className="infor-item">
                                    <EmailIcon className={cx('icon-profile')} />

                                    <p className={cx('content-infor')}>
                                        {profile.tkhdv_huongdanvien.hdv_mail}
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div className="infor-item infor-address">
                                    <HomeIcon className={cx('icon-profile')} />

                                    <p className={cx('content-infor')}>
                                        {profile.tkhdv_huongdanvien.hdv_quequan}
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="achievements-profile">
                <p className={cx('panel-profile')}>
                    <EmojiEventsIcon className={cx('achievement-icon')} />
                    <span>Thành tích</span>
                </p>
                <ul>
                    <li>
                        <p className="label-achievement">Sao trung bình:</p>
                        <p className="content-achievement">
                            <span>
                                {Math.round(averageStar * 10) / 10 || 0}
                            </span>
                            <StarIcon className={cx('star-icon')} />
                        </p>
                    </li>
                    <li>
                        <p className="label-achievement">Số lượng đánh giá:</p>
                        <p className="content-achievement">
                            {ratingList.length}
                        </p>
                    </li>

                    <li>
                        <p className="label-achievement">
                            Số tour đã hướng dẫn:
                        </p>
                        <p className="content-achievement">
                            {guideTimes.length}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
