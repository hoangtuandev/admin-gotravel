import { React } from 'react';
import classNames from 'classnames/bind';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function TouristStatistic() {
    return (
        <div className={cx('tourist-statistic')}>
            <p className={cx('label-statistic')}>KHÁCH HÀNG TIỀM NĂNG</p>
            <table>
                <thead>
                    <tr>
                        <td className={cx('top-index')}></td>

                        <td>Mã khách hàng</td>
                        <td className={cx('tourist-name')}>Tên khách hàng</td>
                        <td>Lượt booking</td>
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

                        <td>T3496578349876</td>
                        <td className={cx('tourist-name')}>
                            Pham Hoang Tuan Tuan
                        </td>
                        <td className={cx('booking-times')}>4</td>
                        <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p className={cx('top-index-two')}>2</p>
                        </td>

                        <td>T3496578349876</td>
                        <td className={cx('tourist-name')}>
                            Pham Hoang Tuan Tuan
                        </td>
                        <td className={cx('booking-times')}>4</td>
                        <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p className={cx('top-index-three')}>3</p>
                        </td>

                        <td>T3496578349876</td>
                        <td className={cx('tourist-name')}>
                            Pham Hoang Tuan Tuan
                        </td>
                        <td className={cx('booking-times')}>4</td>
                        <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p>1</p>
                        </td>

                        <td>T3496578349876</td>
                        <td className={cx('tourist-name')}>
                            Pham Hoang Tuan Tuan
                        </td>
                        <td className={cx('booking-times')}>4</td>
                        <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p>1</p>
                        </td>

                        <td>T3496578349876</td>
                        <td className={cx('tourist-name')}>
                            Pham Hoang Tuan Tuan
                        </td>
                        <td className={cx('booking-times')}>4</td>
                        <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TouristStatistic;
