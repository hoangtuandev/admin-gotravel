import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EditIcon from '@mui/icons-material/Edit';
import Badge from '@mui/material/Badge';
import StarIcon from '@mui/icons-material/Star';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import styles from './GuideManager.scss';
import * as api from '../../api';
import {
    currentList,
    handleSelectProfile,
    handleToggleActiveProfile,
    handleToggleLockProfile,
    handleToggleUpdateProfile,
    handleToggleViewProfile,
} from './GuideManagerSlice';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProfileItem(props) {
    const { account } = props;
    const dispatch = useDispatch();
    const typeList = useSelector(currentList);

    const [ratingList, setRatingList] = useState([]);
    const [averageStar, setAvarageStar] = useState(0);
    const [guideTimes, setGuideTimes] = useState(0);
    const [workingStatus, setWorkingStatus] = useState(0);

    // console.log(account);

    useEffect(() => {
        api.getRatingGuideByGuideAccount({ _id: account._id }).then((res) => {
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
    }, [account]);

    useEffect(() => {
        api.getGuideTimesByAccount({
            username: account.tkhdv_tendangnhap,
        }).then((res) => {
            setGuideTimes(res.data.length);
        });
    }, [account]);

    useEffect(() => {
        api.getStatusCurrentOfGuide({
            username: account.tkhdv_tendangnhap,
        }).then((res) => {
            res.data.length > 0 ? setWorkingStatus(1) : setWorkingStatus(0);
        });
    }, [account]);

    const handleUpdateProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleUpdateProfile(true));
    };

    const handleViewProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleViewProfile(true));
    };

    const handleLockProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleLockProfile(true));
    };

    const handleActiveProfile = () => {
        dispatch(handleSelectProfile(account));
        dispatch(handleToggleActiveProfile(true));
    };

    return (
        <tr>
            <td>
                {workingStatus !== 0 && (
                    <Badge color="success" overlap="circular" variant="dot">
                        <img
                            className={cx('avatar')}
                            src={account.tkhdv_anhdaidien}
                            alt=""
                        />
                    </Badge>
                )}
                {workingStatus === 0 && (
                    <img
                        className={cx('avatar')}
                        src={account.tkhdv_anhdaidien}
                        alt=""
                    />
                )}
            </td>
            <td>{account.tkhdv_tendangnhap}</td>
            <td className={cx('name-guide')}>
                {account.tkhdv_huongdanvien.hdv_hoten}
            </td>
            <td> {account.tkhdv_huongdanvien.hdv_sodienthoai}</td>
            <td>{guideTimes}</td>
            <td>{ratingList.length}</td>
            <td className={cx('rating-td')}>
                <div className={cx('rating')}>
                    <span>{Math.round(averageStar * 10) / 10 || 0}</span>
                    <StarIcon className={cx('star-icon')} />
                </div>
            </td>

            <td>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={cx('button-group')}
                >
                    {typeList === 'actived' && (
                        <Button
                            color="error"
                            onClick={() => handleLockProfile()}
                        >
                            <VpnKeyIcon className={cx('icon')} />
                        </Button>
                    )}
                    {typeList === 'locked' && (
                        <Button
                            color="error"
                            onClick={() => handleActiveProfile()}
                        >
                            <VpnKeyOffIcon className={cx('icon')} />
                        </Button>
                    )}
                    <Button onClick={() => handleViewProfile()}>
                        <VisibilityIcon className={cx('icon')} />
                    </Button>
                    {typeList === 'actived' && (
                        <Button
                            color="success"
                            onClick={() => handleUpdateProfile()}
                        >
                            <EditIcon className={cx('icon')} />
                        </Button>
                    )}
                    {typeList === 'locked' && (
                        <Button
                            disabled
                            color="success"
                            onClick={() => handleUpdateProfile()}
                        >
                            <EditIcon className={cx('icon')} />
                        </Button>
                    )}
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default ProfileItem;
