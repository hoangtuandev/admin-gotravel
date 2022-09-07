import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './BookingTour.scss';
import * as api from '../../api';
import BookingTourItem from './BookingTourItem';
import {
    handleSetBookingTourList,
    bookingTourList,
    handleChangeCurrentTab,
    currentTab,
    viewBookingTour,
} from './BookingTourSlice';
import ViewBookingTour from './ViewBookingTour';

const cx = classNames.bind(styles);

function BookingTour() {
    const dispatch = useDispatch();
    const tabSelected = useSelector(currentTab);
    const bookingList = useSelector(bookingTourList);
    const viewBooking = useSelector(viewBookingTour);

    // const [tabSelected, setTabSelected] = useState(1);

    const handleChangeTab = (event, newValue) => {
        // setTabSelected(newValue);
        dispatch(handleChangeCurrentTab(newValue));
    };

    useEffect(() => {
        api.updateBookingTourWorking({ bt_trangthai: 3 }).then((res) => {});
        api.updateBookingTourFinish({ bt_trangthai: 4 }).then((res) => {});
    }, []);

    useEffect(() => {
        api.getBookingTourByStatus({ bt_trangthai: tabSelected }).then(
            (res) => {
                dispatch(handleSetBookingTourList(res.data));
            }
        );
    }, [tabSelected, dispatch]);
    console.log('dispatch');

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
            {viewBooking && <ViewBookingTour></ViewBookingTour>}
        </div>
    );
}

export default BookingTour;
