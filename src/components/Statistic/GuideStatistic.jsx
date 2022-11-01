import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import StarIcon from '@mui/icons-material/Star';
import styles from './Statistic.scss';
import * as api from '../../api';
import { useState } from 'react';

const cx = classNames.bind(styles);

function GuideStatistic() {
    const [listGuide, setListGuide] = useState(null);

    useEffect(() => {
        api.averageStarGuideStatistic().then((res) => {
            setListGuide(res.data);
        });
    }, []);

    return (
        <div className={cx('guide-star-statistic')}>
            <p className={cx('label-statistic')}>THÀNH TÍCH HƯỚNG DẪN VIÊN</p>
            {listGuide && (
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>

                            <td>Mã HDV</td>
                            <td className={cx('guide-name')}>Hướng dẫn viên</td>
                            <td>Lượt đánh giá</td>
                            <td>Sao trung bình</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>

                        <tr>
                            <td className={cx('top-index')}>
                                <p className={cx('top-index-one')}>1</p>
                            </td>

                            <td>
                                {listGuide[0]._id.tkhdv_huongdanvien.hdv_ma}
                            </td>
                            <td className={cx('guide-name')}>
                                <img
                                    src={listGuide[0]._id.tkhdv_anhdaidien}
                                    alt=""
                                />
                                <span>
                                    {
                                        listGuide[0]._id.tkhdv_huongdanvien
                                            .hdv_hoten
                                    }
                                </span>
                            </td>
                            <td className={cx('booking-times')}>
                                {listGuide[0].count}
                            </td>
                            <td>
                                <div className={cx('average-star')}>
                                    <span>
                                        {Math.round(
                                            listGuide[0].averageStar * 10
                                        ) / 10 || 0}
                                    </span>
                                    <StarIcon className={cx('icon-star')} />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className={cx('top-index')}>
                                <p className={cx('top-index-two')}>2</p>
                            </td>

                            <td>
                                {listGuide[1]._id.tkhdv_huongdanvien.hdv_ma}
                            </td>
                            <td className={cx('guide-name')}>
                                <img
                                    src={listGuide[1]._id.tkhdv_anhdaidien}
                                    alt=""
                                />
                                <span>
                                    {
                                        listGuide[1]._id.tkhdv_huongdanvien
                                            .hdv_hoten
                                    }
                                </span>
                            </td>
                            <td className={cx('booking-times')}>
                                {listGuide[1].count}
                            </td>
                            <td>
                                <div className={cx('average-star')}>
                                    <span>
                                        {Math.round(
                                            listGuide[1].averageStar * 10
                                        ) / 10 || 0}
                                    </span>
                                    <StarIcon className={cx('icon-star')} />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className={cx('top-index')}>
                                <p className={cx('top-index-three')}>3</p>
                            </td>

                            <td>
                                {listGuide[2]._id.tkhdv_huongdanvien.hdv_ma}
                            </td>
                            <td className={cx('guide-name')}>
                                <img
                                    src={listGuide[2]._id.tkhdv_anhdaidien}
                                    alt=""
                                />
                                <span>
                                    {
                                        listGuide[2]._id.tkhdv_huongdanvien
                                            .hdv_hoten
                                    }
                                </span>
                            </td>
                            <td className={cx('booking-times')}>
                                {listGuide[2].count}
                            </td>
                            <td>
                                <div className={cx('average-star')}>
                                    <span>
                                        {Math.round(
                                            listGuide[2].averageStar * 10
                                        ) / 10 || 0}
                                    </span>
                                    <StarIcon className={cx('icon-star')} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p>4</p>
                            </td>

                            <td>
                                {listGuide[3]._id.tkhdv_huongdanvien.hdv_ma}
                            </td>
                            <td className={cx('guide-name')}>
                                <img
                                    src={listGuide[3]._id.tkhdv_anhdaidien}
                                    alt=""
                                />
                                <span>
                                    {
                                        listGuide[3]._id.tkhdv_huongdanvien
                                            .hdv_hoten
                                    }
                                </span>
                            </td>
                            <td className={cx('booking-times')}>
                                {listGuide[3].count}
                            </td>
                            <td>
                                <div className={cx('average-star')}>
                                    <span>
                                        {Math.round(
                                            listGuide[3].averageStar * 10
                                        ) / 10 || 0}
                                    </span>
                                    <StarIcon className={cx('icon-star')} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p>5</p>
                            </td>

                            <td>
                                {listGuide[4]._id.tkhdv_huongdanvien.hdv_ma}
                            </td>
                            <td className={cx('guide-name')}>
                                <img
                                    src={listGuide[4]._id.tkhdv_anhdaidien}
                                    alt=""
                                />
                                <span>
                                    {
                                        listGuide[4]._id.tkhdv_huongdanvien
                                            .hdv_hoten
                                    }
                                </span>
                            </td>
                            <td className={cx('booking-times')}>
                                {listGuide[4].count}
                            </td>
                            <td>
                                <div className={cx('average-star')}>
                                    <span>
                                        {Math.round(
                                            listGuide[4].averageStar * 10
                                        ) / 10 || 0}
                                    </span>
                                    <StarIcon className={cx('icon-star')} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GuideStatistic;
