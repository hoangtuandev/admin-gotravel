import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { GiTwoCoins } from 'react-icons/gi';
import { Chart, registerables } from 'chart.js';
import * as api from '../../api';
import styles from './Statistic.scss';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function TouristStatistic() {
    const [touristRevenues, setTouristRevenues] = useState([]);

    useEffect(() => {
        api.revenueBookingByTourist().then((res) => {
            setTouristRevenues(res.data);
        });
    }, []);

    return (
        <div className={cx('tourist-statistic')}>
            <p className={cx('label-statistic')}>KHÁCH HÀNG TIỀM NĂNG</p>
            {touristRevenues.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>

                            <td>Mã khách hàng</td>
                            <td className={cx('tourist-name')}>
                                Tên khách hàng
                            </td>
                            <td className={cx('tourist-contact')}>Liên hệ</td>
                            <td>Tổng thanh toán</td>
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
                                {
                                    touristRevenues[0]._id.tkkdl_khachdulich
                                        .kdl_ma
                                }
                            </td>
                            <td className={cx('tourist-name')}>
                                {
                                    touristRevenues[0]._id.tkkdl_khachdulich
                                        .kdl_hoten
                                }
                            </td>
                            <td className={cx('tourist-contact')}>
                                {touristRevenues[0]._id.tkkdl_khachdulich
                                    .kdl_sodienthoai ||
                                    touristRevenues[0]._id.tkkdl_khachdulich
                                        .kdl_email}
                            </td>
                            <td>
                                <div className={cx('tourist-pay')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {touristRevenues[0].total_revenue.toLocaleString(
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
                                {
                                    touristRevenues[1]._id.tkkdl_khachdulich
                                        .kdl_ma
                                }
                            </td>
                            <td className={cx('tourist-name')}>
                                {
                                    touristRevenues[1]._id.tkkdl_khachdulich
                                        .kdl_hoten
                                }
                            </td>
                            <td className={cx('tourist-contact')}>
                                {touristRevenues[1]._id.tkkdl_khachdulich
                                    .kdl_sodienthoai ||
                                    touristRevenues[1]._id.tkkdl_khachdulich
                                        .kdl_email}
                            </td>
                            <td>
                                <div className={cx('tourist-pay')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {touristRevenues[1].total_revenue.toLocaleString(
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
                                {
                                    touristRevenues[2]._id.tkkdl_khachdulich
                                        .kdl_ma
                                }
                            </td>
                            <td className={cx('tourist-name')}>
                                {
                                    touristRevenues[2]._id.tkkdl_khachdulich
                                        .kdl_hoten
                                }
                            </td>
                            <td className={cx('tourist-contact')}>
                                {touristRevenues[2]._id.tkkdl_khachdulich
                                    .kdl_sodienthoai ||
                                    touristRevenues[2]._id.tkkdl_khachdulich
                                        .kdl_email}
                            </td>
                            <td>
                                <div className={cx('tourist-pay')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {touristRevenues[2].total_revenue.toLocaleString(
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
                                {
                                    touristRevenues[3]._id.tkkdl_khachdulich
                                        .kdl_ma
                                }
                            </td>
                            <td className={cx('tourist-name')}>
                                {
                                    touristRevenues[3]._id.tkkdl_khachdulich
                                        .kdl_hoten
                                }
                            </td>
                            <td className={cx('tourist-contact')}>
                                {touristRevenues[3]._id.tkkdl_khachdulich
                                    .kdl_sodienthoai ||
                                    touristRevenues[3]._id.tkkdl_khachdulich
                                        .kdl_email}
                            </td>
                            <td>
                                <div className={cx('tourist-pay')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {touristRevenues[3].total_revenue.toLocaleString(
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
                                {
                                    touristRevenues[4]._id.tkkdl_khachdulich
                                        .kdl_ma
                                }
                            </td>
                            <td className={cx('tourist-name')}>
                                {
                                    touristRevenues[4]._id.tkkdl_khachdulich
                                        .kdl_hoten
                                }
                            </td>
                            <td className={cx('tourist-contact')}>
                                {touristRevenues[4]._id.tkkdl_khachdulich
                                    .kdl_sodienthoai ||
                                    touristRevenues[4]._id.tkkdl_khachdulich
                                        .kdl_email}
                            </td>
                            <td>
                                <div className={cx('tourist-pay')}>
                                    <GiTwoCoins className={cx('icon')} />
                                    <span>
                                        {touristRevenues[4].total_revenue.toLocaleString(
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

export default TouristStatistic;
