import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { GiTwoCoins } from 'react-icons/gi';
import { Chart, registerables } from 'chart.js';
import * as api from '../../api';
import styles from './Statistic.scss';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function TourStatistic() {
    const [tourRevenues, setTourRevenues] = useState([]);

    useEffect(() => {
        api.revenueBookingByTour().then((res) => {
            setTourRevenues(res.data);
        });
    }, []);

    return (
        <div className={cx('tour-statistic')}>
            <p className={cx('label-statistic')}>TOUR DOANH THU CAO NHẤT</p>
            {tourRevenues.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>
                            <td></td>
                            <td className={cx('tour-name')}>Tên tour</td>
                            <td>Thời gian</td>

                            <td>Doanh thu</td>
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
                                <img
                                    src={tourRevenues[0]._id.t_hinhanh[0]}
                                    alt=""
                                />
                            </td>
                            <td className={cx('tour-name')}>
                                {tourRevenues[0]._id.t_ten}
                            </td>
                            <td> {tourRevenues[0]._id.t_thoigian} ngày</td>

                            <td>
                                <div className={cx('total-revenue')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {tourRevenues[0].total_revenue.toLocaleString(
                                            'vi',
                                            {
                                                style: 'currency',
                                                currency: 'VND',
                                            }
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p className={cx('top-index-two')}>2</p>
                            </td>
                            <td>
                                <img
                                    src={tourRevenues[1]._id.t_hinhanh[0]}
                                    alt=""
                                />
                            </td>
                            <td className={cx('tour-name')}>
                                {tourRevenues[1]._id.t_ten}
                            </td>
                            <td> {tourRevenues[1]._id.t_thoigian} ngày</td>

                            <td>
                                <div className={cx('total-revenue')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {tourRevenues[1].total_revenue.toLocaleString(
                                            'vi',
                                            {
                                                style: 'currency',
                                                currency: 'VND',
                                            }
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p className={cx('top-index-three')}>3</p>
                            </td>
                            <td>
                                <img
                                    src={tourRevenues[2]._id.t_hinhanh[0]}
                                    alt=""
                                />
                            </td>
                            <td className={cx('tour-name')}>
                                {tourRevenues[2]._id.t_ten}
                            </td>
                            <td> {tourRevenues[2]._id.t_thoigian} ngày</td>

                            <td>
                                <div className={cx('total-revenue')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {tourRevenues[2].total_revenue.toLocaleString(
                                            'vi',
                                            {
                                                style: 'currency',
                                                currency: 'VND',
                                            }
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p>4</p>
                            </td>
                            <td>
                                <img
                                    src={tourRevenues[3]._id.t_hinhanh[0]}
                                    alt=""
                                />
                            </td>
                            <td className={cx('tour-name')}>
                                {tourRevenues[3]._id.t_ten}
                            </td>
                            <td> {tourRevenues[3]._id.t_thoigian} ngày</td>

                            <td>
                                <div className={cx('total-revenue')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {tourRevenues[3].total_revenue.toLocaleString(
                                            'vi',
                                            {
                                                style: 'currency',
                                                currency: 'VND',
                                            }
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('top-index')}>
                                <p>5</p>
                            </td>
                            <td>
                                <img
                                    src={tourRevenues[4]._id.t_hinhanh[0]}
                                    alt=""
                                />
                            </td>
                            <td className={cx('tour-name')}>
                                {tourRevenues[4]._id.t_ten}
                            </td>
                            <td> {tourRevenues[4]._id.t_thoigian} ngày</td>

                            <td>
                                <div className={cx('total-revenue')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {tourRevenues[4].total_revenue.toLocaleString(
                                            'vi',
                                            {
                                                style: 'currency',
                                                currency: 'VND',
                                            }
                                        )}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TourStatistic;
