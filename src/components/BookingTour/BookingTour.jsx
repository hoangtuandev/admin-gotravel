import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './BookingTour.scss';
import * as api from '../../api';
import { useState } from 'react';
import BookingTourItem from './BookingTourItem';
import {
    handleSetBookingTourList,
    bookingTourList,
    handleChangeCurrentTab,
    currentTab,
} from './BookingTourSlice';

const cx = classNames.bind(styles);

function BookingTour() {
    const dispatch = useDispatch();
    const tabSelected = useSelector(currentTab);
    const bookingList = useSelector(bookingTourList);

    // const [tabSelected, setTabSelected] = useState(1);

    const handleChangeTab = (event, newValue) => {
        // setTabSelected(newValue);
        dispatch(handleChangeCurrentTab(newValue));
        console.log(newValue);
    };
    // const [bookingTourList, setBookingTourList] = useState([]);
    useEffect(() => {
        // const status =
        //     tabSelected === 0
        //         ? 0
        //         : tabSelected === 1
        //         ? 1
        //         : tabSelected === 2
        //         ? 2
        //         : tabSelected === 3
        //         ? 3
        //         : 4;
        api.getBookingTourByStatus({ bt_trangthai: tabSelected }).then(
            (res) => {
                dispatch(handleSetBookingTourList(res.data));
            }
        );
    }, [tabSelected]);

    return (
        <div className={cx('bookingTour')}>
            <Box
                className={cx('menu-box')}
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 320, sm: 480 },
                    bgcolor: 'background.paper',
                }}
            >
                <Tabs
                    value={tabSelected}
                    onChange={handleChangeTab}
                    // variant="scrollable"
                    scrollButtons
                    centered
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab className={cx('menu-tab')} label="Đã hủy" />
                    <Tab className={cx('menu-tab')} label="Chờ xác nhận" />
                    <Tab className={cx('menu-tab')} label="Đã xác nhận" />
                    <Tab className={cx('menu-tab')} label="Đang diễn ra" />
                    <Tab className={cx('menu-tab')} label="Đã kết thúc" />
                </Tabs>
            </Box>
            <table>
                <thead>
                    <tr>
                        <th className={cx('text-center')}>Mã</th>
                        <th className={cx('text-left')}>Tên tour</th>
                        <th className={cx('text-center')}>Khởi hành</th>
                        <th className={cx('text-center')}>Ngày book</th>
                        <th className={cx('text-center')}>Thanh toán</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bookingList.map((item, index) => (
                        <BookingTourItem
                            key={index}
                            item={item}
                        ></BookingTourItem>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookingTour;
