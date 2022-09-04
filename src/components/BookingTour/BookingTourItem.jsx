import { React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as api from '../../api';
import styles from './BookingTour.scss';
import { handleSetBookingTourList } from './BookingTourSlice';

const cx = classNames.bind(styles);

function BookingTourItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const handleAcceptBookingTour = () => {
        api.updateStatusBookingTour({ _id: item._id }).then((res) => {
            api.getAllBookingTour().then((res) => {
                console.log(res.data);
                dispatch(handleSetBookingTourList(res.data));
            });
        });
    };

    const handleDeclineBookingTour = () => {};
    return (
        <tr>
            <td className={cx('text-center')}>{item.bt_ma}</td>
            <td className={cx('text-left name-tour')}>{item.bt_tour.t_ten}</td>
            <td className={cx('text-center departure-day')}>
                {moment(item.bt_lichkhoihanh.lkh_ngaykhoihanh).format(
                    'HH:mm DD/MM/YYYY'
                )}
            </td>
            <td className={cx('text-center')}>
                {moment(item.bt_ngaydat).format('HH:mm DD/MM/YYYY')}
            </td>
            <td className={cx('text-center total-payment')}>
                {' '}
                {item.bt_tongthanhtoan.toLocaleString('vi', {
                    style: 'currency',
                    currency: 'VND',
                })}
            </td>
            <td className={cx('text-center')}>
                <IconButton aria-label="delete" className={cx('button-view')}>
                    <VisibilityIcon className={cx('icon-view')} />
                </IconButton>
            </td>
            <td className={cx('text-center')}>
                {item.bt_trangthai === 1 && (
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined error button group"
                        className={cx('buttons-group')}
                    >
                        <Button
                            className={cx('button-accept')}
                            onClick={() => handleAcceptBookingTour()}
                        >
                            XÁC NHẬN
                        </Button>
                        <Button
                            className={cx('button-decline')}
                            onClick={() => handleDeclineBookingTour()}
                        >
                            TỪ CHỐI
                        </Button>
                    </ButtonGroup>
                )}
                {item.bt_trangthai === 2 && (
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined error button group"
                        className={cx('buttons-group')}
                    >
                        <Button
                            className={cx('button-decline')}
                            onClick={() => handleDeclineBookingTour()}
                        >
                            HỦY TOUR
                        </Button>
                    </ButtonGroup>
                )}
            </td>
        </tr>
    );
}

export default BookingTourItem;
