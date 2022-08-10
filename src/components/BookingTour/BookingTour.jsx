import { React, useEffect } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

import styles from './BookingTour.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);

function BookingTour() {
    useEffect(() => {}, []);

    return (
        <div className={cx('bookingTour')}>
            <table>
                <thead>
                    <tr>
                        <th className={cx('text-center')}>Mã</th>
                        <th className={cx('text-left')}>Tên tour</th>
                        <th className={cx('text-center')}>Khởi hành</th>
                        <th className={cx('text-center')}>Ngày book</th>
                        <th className={cx('text-center')}>Tổng thanh toán</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={cx('text-center')}>BOO1659403115010</td>
                        <td className={cx('text-left name-tour')}>
                            Nghỉ dưỡng Resort Victory Cần Thơ
                        </td>
                        <td className={cx('text-center departure-day')}>
                            10/08/2022
                        </td>
                        <td className={cx('text-center')}>13:16 08/08/2022</td>
                        <td className={cx('text-center')}>13.590.000 đ</td>
                        <td className={cx('text-center')}>
                            <IconButton
                                aria-label="delete"
                                className={cx('button-view')}
                            >
                                <VisibilityIcon className={cx('icon-view')} />
                            </IconButton>
                        </td>
                        <td className={cx('text-center')}>
                            <ButtonGroup
                                variant="contained"
                                aria-label="outlined error button group"
                                className={cx('buttons-group')}
                            >
                                <Button className={cx('button-accept')}>
                                    XÁC NHẬN
                                </Button>
                                <Button className={cx('button-decline')}>
                                    TỪ CHỐI
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('text-center')}>BOO1659403115010</td>
                        <td className={cx('text-left name-tour')}>
                            Nghỉ dưỡng Resort Victory Cần Thơ
                        </td>
                        <td className={cx('text-center departure-day')}>
                            10/08/2022
                        </td>
                        <td className={cx('text-center')}>13:16 08/08/2022</td>
                        <td className={cx('text-center')}>13.590.000 đ</td>
                        <td className={cx('text-center')}>
                            <IconButton
                                aria-label="delete"
                                className={cx('button-view')}
                            >
                                <VisibilityIcon className={cx('icon-view')} />
                            </IconButton>
                        </td>
                        <td className={cx('text-center')}>
                            <ButtonGroup
                                variant="contained"
                                aria-label="outlined error button group"
                                className={cx('buttons-group')}
                            >
                                <Button className={cx('button-accept')}>
                                    XÁC NHẬN
                                </Button>
                                <Button className={cx('button-decline')}>
                                    TỪ CHỐI
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BookingTour;
