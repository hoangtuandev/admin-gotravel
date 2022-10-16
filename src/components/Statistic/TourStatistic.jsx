import { React } from 'react';
import classNames from 'classnames/bind';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function TourStatistic() {
    return (
        <div className={cx('tour-statistic')}>
            <p className={cx('label-statistic')}>TOUR BÁN CHẠY NHẤT</p>
            <table>
                <thead>
                    <tr>
                        <td className={cx('top-index')}></td>
                        <td></td>
                        <td className={cx('tour-name')}>Tên tour</td>
                        <td>Thời gian</td>
                        <td>Giá tour</td>
                        <td>Lượt booking</td>
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
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1665274900/GoTravel/Du-thuyen-Catamaran-Ha-Long-1_vkbff7.jpg"
                                alt=""
                            />
                        </td>
                        <td className={cx('tour-name')}>
                            Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ Hà
                            Nội
                        </td>
                        <td>1 ngày</td>
                        <td className={cx('tour-price')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p className={cx('top-index-two')}>2</p>
                        </td>
                        <td>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1665274900/GoTravel/Du-thuyen-Catamaran-Ha-Long-1_vkbff7.jpg"
                                alt=""
                            />
                        </td>

                        <td className={cx('tour-name')}>
                            Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ Hà
                            Nội
                        </td>
                        <td>1 ngày</td>
                        <td className={cx('tour-price')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p className={cx('top-index-three')}>3</p>
                        </td>
                        <td>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1665274900/GoTravel/Du-thuyen-Catamaran-Ha-Long-1_vkbff7.jpg"
                                alt=""
                            />
                        </td>

                        <td className={cx('tour-name')}>
                            Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ Hà
                            Nội
                        </td>
                        <td>1 ngày</td>
                        <td className={cx('tour-price')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p>1</p>
                        </td>
                        <td>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1665274900/GoTravel/Du-thuyen-Catamaran-Ha-Long-1_vkbff7.jpg"
                                alt=""
                            />
                        </td>

                        <td className={cx('tour-name')}>
                            Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ Hà
                            Nội
                        </td>
                        <td>1 ngày</td>
                        <td className={cx('tour-price')}>1.890.000 ₫</td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p>1</p>
                        </td>
                        <td>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1665274900/GoTravel/Du-thuyen-Catamaran-Ha-Long-1_vkbff7.jpg"
                                alt=""
                            />
                        </td>

                        <td className={cx('tour-name')}>
                            Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ Hà
                            Nội
                        </td>
                        <td>1 ngày</td>
                        <td className={cx('tour-price')}>1.890.000 ₫</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TourStatistic;
