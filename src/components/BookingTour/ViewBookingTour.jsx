import * as React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import * as api from '../../api';
import styles from './BookingTour.scss';
import {
    bookingSelected,
    currentTab,
    handleSelectBookingTour,
    handleSetBookingTourList,
    handleTooggleViewBookingTour,
    viewBookingTour,
} from './BookingTourSlice';

const cx = classNames.bind(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewBookingTour() {
    const dispatch = useDispatch();
    const openView = useSelector(viewBookingTour);
    const tabCurrent = useSelector(currentTab);
    const booking = useSelector(bookingSelected);

    const handleCloseViewBookingTour = () => {
        dispatch(handleTooggleViewBookingTour(false));
        api.getBookingTourByStatus({ bt_trangthai: tabCurrent }).then((res) => {
            dispatch(handleSelectBookingTour(res.data));
        });
    };

    const handleAcceptBookingTour = () => {
        api.updateStatusBookingTour({ _id: booking._id, bt_trangthai: 2 }).then(
            (res) => {
                api.getBookingTourByStatus({ bt_trangthai: tabCurrent }).then(
                    (res) => {
                        dispatch(handleSetBookingTourList(res.data));
                        dispatch(handleTooggleViewBookingTour(false));
                    }
                );
            }
        );
    };

    const handleDeclineBookingTour = () => {
        api.updateStatusBookingTour({ _id: booking._id, bt_trangthai: 0 }).then(
            (res) => {
                api.getBookingTourByStatus({ bt_trangthai: tabCurrent }).then(
                    (res) => {
                        dispatch(handleSetBookingTourList(res.data));
                        dispatch(handleTooggleViewBookingTour(false));
                    }
                );
            }
        );
    };

    return (
        <div>
            <Button variant="outlined">Open full-screen dialog</Button>
            <Dialog
                fullScreen
                TransitionComponent={Transition}
                className={cx('dialog')}
                open={openView}
                onClose={() => dispatch(handleTooggleViewBookingTour(false))}
            >
                <AppBar sx={{ position: 'relative' }} className={cx('appbar')}>
                    <Toolbar className={cx('toolbar')}>
                        {/* <Link to="/booking-tour" className={cx('link-router')}> */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            className={cx('icon-button')}
                            onClick={() => handleCloseViewBookingTour()}
                        >
                            <CloseIcon className={cx('close-icon')} />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                            className={cx('typography')}
                        >
                            THÔNG TIN CHI TIẾT
                        </Typography>
                        {tabCurrent === 1 && (
                            <div>
                                <Button
                                    autoFocus
                                    color="inherit"
                                    className={cx('btn-accept')}
                                    onClick={() => handleAcceptBookingTour()}
                                >
                                    XÁC NHẬN
                                </Button>
                                &nbsp; &nbsp; &nbsp;
                                <Button
                                    autoFocus
                                    color="inherit"
                                    className={cx('btn-decline')}
                                    onClick={() => handleDeclineBookingTour()}
                                >
                                    TỪ CHỐI
                                </Button>
                            </div>
                        )}
                        {tabCurrent !== 1 && (
                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() => handleCloseViewBookingTour()}
                            >
                                THOÁT
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>

                <div className={cx('detail-booking')}>
                    <div className={cx('infor-booking')}>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Mã:</p>
                            <p>{booking.bt_ma}</p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Ngày đặt:</p>
                            <p>
                                {moment(booking.bt_ngaydat).format(
                                    'HH:mm - DD/MM/YYYY'
                                )}
                            </p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Trạng thái:</p>
                            <p className={cx('label')}>
                                <button
                                    className={cx('button-status')}
                                    type="button"
                                >
                                    {booking.bt_trangthai === 0
                                        ? 'Đã hủy'
                                        : booking.bt_trangthai === 1
                                        ? 'Chờ xác nhận'
                                        : booking.bt_trangthai === 2
                                        ? 'Đã xác nhận'
                                        : booking.bt_trangthai === 3
                                        ? 'Đang diễn ra'
                                        : 'Đã kết thúc'}
                                </button>
                            </p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Tổng thanh toán:</p>
                            <p className={cx('price')}>
                                {booking.bt_tongthanhtoan.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </div>
                    </div>
                    <hr className={cx('line')} />
                    <div className={cx('infor-details')}>
                        <div className={cx('detail-left')}>
                            <div className={cx('detail-tour')}>
                                <p>Thông tin tour</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Mã tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_ma}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Tên tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_ten}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Loại hình tour
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_tour.t_loaihinh
                                                        .lht_ten
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số ngày
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_thoigian}{' '}
                                                ngày{' '}
                                                {booking.bt_tour.t_thoigian - 1}{' '}
                                                đêm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giá tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_gia.toLocaleString(
                                                    'vi',
                                                    {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-departure')}>
                                <p>Lịch khởi hành</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Điểm khởi hành
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_lichkhoihanh
                                                        .lkh_diadiem
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Ngày khởi hành
                                            </td>
                                            <td className={cx('content')}>
                                                {moment(
                                                    booking.bt_lichkhoihanh
                                                        .lkh_ngaykhoihanh
                                                ).format('DD / MM / YYYY')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Ngày kết thúc
                                            </td>
                                            <td className={cx('content')}>
                                                {moment(
                                                    booking.bt_lichkhoihanh
                                                        .lkh_ngayketthuc
                                                ).format('DD / MM / YYYY')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-passenger')}>
                                <p>Số lượng hành khách</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Người lớn x{' '}
                                                {
                                                    booking.bt_soluonghanhkhach
                                                        .adult
                                                }
                                            </td>
                                            <td className={cx('content')}>
                                                {(
                                                    booking.bt_tour.t_gia *
                                                    booking.bt_soluonghanhkhach
                                                        .adult
                                                ).toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </td>
                                        </tr>

                                        {booking.bt_soluonghanhkhach.children >
                                            0 && (
                                            <tr>
                                                <td className={cx('label')}>
                                                    Trẻ em x{' '}
                                                    {
                                                        booking
                                                            .bt_soluonghanhkhach
                                                            .children
                                                    }
                                                </td>
                                                <td className={cx('content')}>
                                                    {(
                                                        (booking.bt_tour.t_gia *
                                                            booking
                                                                .bt_soluonghanhkhach
                                                                .children *
                                                            60) /
                                                        100
                                                    ).toLocaleString('vi', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </td>
                                            </tr>
                                        )}

                                        {booking.bt_soluonghanhkhach.baby >
                                            0 && (
                                            <tr>
                                                <td className={cx('label')}>
                                                    Em bé x{' '}
                                                    {
                                                        booking
                                                            .bt_soluonghanhkhach
                                                            .baby
                                                    }
                                                </td>
                                                <td className={cx('content')}>
                                                    {(
                                                        (booking.bt_tour.t_gia *
                                                            booking
                                                                .bt_soluonghanhkhach
                                                                .baby *
                                                            40) /
                                                        100
                                                    ).toLocaleString('vi', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p>Thông tin hành khách</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        {booking.bt_nguoilon.map(
                                            (passenger, index) => (
                                                <tr key={`adult${index}`}>
                                                    <td className={cx('label')}>
                                                        {passenger.fullname}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.gender}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.birthday}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        {booking.bt_treem.map(
                                            (passenger, index) => (
                                                <tr key={`children${index}`}>
                                                    <td className={cx('label')}>
                                                        {passenger.fullname}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.gender}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.birthday}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        {booking.bt_embe.map(
                                            (passenger, index) => (
                                                <tr key={`baby${index}`}>
                                                    <td className={cx('label')}>
                                                        {passenger.fullname}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.gender}
                                                    </td>
                                                    <td
                                                        className={cx(
                                                            'content'
                                                        )}
                                                    >
                                                        {passenger.birthday}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx('detail-right')}>
                            <div className={cx('detail-contact')}>
                                <p>Thông tin liên hệ</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Họ tên
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .firstname
                                                }{' '}
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .lastname
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giới tính
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_thongtinlienhe
                                                    .gender === 'female'
                                                    ? 'Nam'
                                                    : booking.bt_thongtinlienhe
                                                          .gender === 'male'
                                                    ? 'Nữ'
                                                    : 'Khác'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Email
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .email
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số điện thoại
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .phone
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Địa chỉ
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .address
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-payment')}>
                                <p>Thông tin thanh toán</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Họ tên
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .firstname
                                                }{' '}
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .lastname
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giới tính
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_thongtinthanhtoan
                                                    .gender === 'female'
                                                    ? 'Nam'
                                                    : booking
                                                          .bt_thongtinthanhtoan
                                                          .gender === 'male'
                                                    ? 'Nữ'
                                                    : 'Khác'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Email
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .email
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số điện thoại
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .phone
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Địa chỉ
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Hình thức thanh toán
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .type
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
