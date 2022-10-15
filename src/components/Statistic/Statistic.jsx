import { React } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TourIcon from '@mui/icons-material/Tour';
import RuleIcon from '@mui/icons-material/Rule';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HailIcon from '@mui/icons-material/Hail';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function Statistic() {
    const state = {
        labels: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
        ],
        datasets: [
            {
                label: 'Doanh thu tháng',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                ],
                borderWidth: 2,
                data: [
                    6500000, 5900000, 8000000, 8100000, 5600000, 5500000,
                    4000000,
                ],
            },
        ],
    };

    return (
        <div className={cx('statistic')}>
            <div className={cx('general-statistic')}>
                <ul className={cx('general-statistic-list')}>
                    <li>
                        <div className={cx('figures')}>
                            <AttachMoneyIcon className={cx('icon-figure')} />

                            <div className={cx('value-figure')}>
                                <p className={cx('total')}>
                                    100.000.000<sup>đ</sup>
                                </p>
                                <p className={cx('label')}>Tổng doanh thu</p>
                            </div>
                        </div>
                        <div className={cx('view-detail')}>
                            <span>Xem chi tiết</span>
                            <VisibilityIcon className={cx('icon')} />
                        </div>
                    </li>
                    <li className="tour-general">
                        <div className={cx('figures')}>
                            <TourIcon className={cx('icon-figure')} />

                            <div className={cx('value-figure')}>
                                <p className={cx('total')}>15</p>
                                <p className={cx('label')}>Tổng số tour</p>
                            </div>
                        </div>
                        <div className={cx('view-detail')}>
                            <span>Xem chi tiết</span>
                            <VisibilityIcon className={cx('icon')} />
                        </div>
                    </li>
                    <li className="booking-general">
                        <div className={cx('figures')}>
                            <RuleIcon className={cx('icon-figure')} />

                            <div className={cx('value-figure')}>
                                <p className={cx('total')}>50</p>
                                <p className={cx('label')}>Tổng booking</p>
                            </div>
                        </div>
                        <div className={cx('view-detail')}>
                            <span>Xem chi tiết</span>
                            <VisibilityIcon className={cx('icon')} />
                        </div>
                    </li>
                    <li className="guide-general">
                        <div className={cx('figures')}>
                            <SupportAgentIcon className={cx('icon-figure')} />

                            <div className={cx('value-figure')}>
                                <p className={cx('total')}>20</p>
                                <p className={cx('label')}>Hướng dẫn viên</p>
                            </div>
                        </div>
                        <div className={cx('view-detail')}>
                            <span>Xem chi tiết</span>
                            <VisibilityIcon className={cx('icon')} />
                        </div>
                    </li>
                    <li className="tourist-general">
                        <div className={cx('figures')}>
                            <HailIcon className={cx('icon-figure')} />

                            <div className={cx('value-figure')}>
                                <p className={cx('total')}>6</p>
                                <p className={cx('label')}>Khách du lịch</p>
                            </div>
                        </div>
                        <div className={cx('view-detail')}>
                            <span>Xem chi tiết</span>
                            <VisibilityIcon className={cx('icon')} />
                        </div>
                    </li>
                </ul>
            </div>
            <div className={cx('tour-statistic')}>
                <p className={cx('label-statistic')}>TOUR BÁN CHẠY NHẤT</p>
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>
                            <td></td>
                            <td>Mã tour</td>
                            <td className={cx('tour-name')}>Tên tour</td>
                            <td>Thời gian</td>
                            <td>Giá tour</td>
                            <td>Lượt booking</td>
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
                            <td>T3496578349876</td>
                            <td className={cx('tour-name')}>
                                Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ
                                Hà Nội
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
                            <td>T3496578349876</td>
                            <td className={cx('tour-name')}>
                                Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ
                                Hà Nội
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
                            <td>T3496578349876</td>
                            <td className={cx('tour-name')}>
                                Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ
                                Hà Nội
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
                            <td>T3496578349876</td>
                            <td className={cx('tour-name')}>
                                Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ
                                Hà Nội
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
                            <td>T3496578349876</td>
                            <td className={cx('tour-name')}>
                                Tour Nghỉ Dưỡng Emeralda Ninh Bình Trọn Gói Từ
                                Hà Nội
                            </td>
                            <td>1 ngày</td>
                            <td className={cx('tour-price')}>1.890.000 ₫</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx('revenue-statistic')}>
                <p className={cx('label-statistic')}>
                    THỐNG KÊ DOANH THU THEO THÁNG
                </p>
                <div className={cx('select-year')}>
                    <Select
                        placeholder="Chọn năm thống kê"
                        className={cx('select-field')}
                        // options={options}
                        // onChange={handleChangeYearSelected}
                    />
                </div>
                <Bar
                    // width={100}
                    height={100}
                    data={state}
                />
            </div>
            <div className={cx('tourist-statistic')}>
                <p className={cx('label-statistic')}>KHÁCH HÀNG TIỀM NĂNG</p>
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>

                            <td>Mã khách hàng</td>
                            <td className={cx('tourist-name')}>
                                Tên khách hàng
                            </td>
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
            <div className={cx('guide-star-statistic')}>
                <p className={cx('label-statistic')}>
                    THÀNH TÍCH HƯỚNG DẪN VIÊN
                </p>
                <table>
                    <thead>
                        <tr>
                            <td className={cx('top-index')}></td>

                            <td>Mã HDV</td>
                            <td className={cx('guide-name')}>Hướng dẫn viên</td>
                            <td>Lượt dẫn tour</td>
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

                            <td>T3496578349876</td>
                            <td className={cx('guide-name')}>
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg"
                                    alt=""
                                />
                                <span>Pham Hoang Tuan Tuan</span>
                            </td>
                            <td className={cx('booking-times')}>4</td>
                            <td className={cx('tourist-pay')}>1.890.000 ₫</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Statistic;
