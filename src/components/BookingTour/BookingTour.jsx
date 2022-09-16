import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { CgArrowLongRightC } from 'react-icons/cg';
import { BsCalendar3 } from 'react-icons/bs';
import Tab from '@mui/material/Tab';
import styles from './BookingTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import * as api from '../../api';
import BookingTourItem from './BookingTourItem';
import {
    handleSetBookingTourList,
    bookingTourList,
    handleChangeCurrentTab,
    currentTab,
    viewBookingTour,
    paramsBookingFilter,
    handleChangeParamsFilter,
} from './BookingTourSlice';
import ViewBookingTour from './ViewBookingTour';

const cx = classNames.bind(styles);

function valueTextPriceArange(value) {
    return `${value}`;
}

function BookingTour() {
    const dispatch = useDispatch();
    const tabSelected = useSelector(currentTab);
    const bookings = useSelector(bookingTourList);
    const viewBooking = useSelector(viewBookingTour);
    const paramsFilter = useSelector(paramsBookingFilter);

    // const [sortValue, setSortValue] = useState(0);
    // const [allTour, setAllTour] = useState([]);

    const handleChangeTab = (event, newValue) => {
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

    // const handleChangeSortValue = (event, newAlignment) => {
    //     setSortValue(newAlignment);
    //     if (newAlignment === 1) {
    //         bookings.sort(
    //             (a, b) =>
    //                 parseFloat(a.bt_tongthanhtoan) -
    //                 parseFloat(b.bt_tongthanhtoan)
    //         );
    //     } else if (newAlignment === -1) {
    //         bookings.sort(
    //             (a, b) =>
    //                 parseFloat(b.bt_tongthanhtoan) -
    //                 parseFloat(a.bt_tongthanhtoan)
    //         );
    //     }
    // };

    const handleChangePriceArange = (event, newValue) => {
        dispatch(
            handleChangeParamsFilter({
                price: newValue,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: false,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
        api.filterBookingTourByParams({
            params: {
                price: newValue,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: false,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

    const handleCheckAllPriceFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: [0, 50000000],
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: !paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
        api.filterBookingTourByParams({
            params: {
                price: [0, 50000000],
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: !paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

    const handleChangeDeparture = (newDate) => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: newDate.getTime(),
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: false,
                allTime: paramsFilter.allTime,
            })
        );

        api.filterBookingTourByParams({
            params: {
                price: paramsFilter.price,
                departure: newDate.getTime(),
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: false,
                allTime: paramsFilter.allTime,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

    const handleCheckAllDepartureFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: !paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
        api.filterBookingTourByParams({
            params: {
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: !paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

    const handleChangeBookingDate = (newDate) => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: newDate.getTime(),
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: false,
            })
        );

        api.filterBookingTourByParams({
            params: {
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: newDate.getTime(),
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: false,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

    const handleCheckAllTimeFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: !paramsFilter.allTime,
            })
        );
        api.filterBookingTourByParams({
            params: {
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: !paramsFilter.allTime,
            },
            bt_trangthai: tabSelected,
        }).then((res) => {
            dispatch(handleSetBookingTourList(res.data));
        });
    };

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
            <div className={cx('filter')}>
                <div className={cx('filter-price')}>
                    <p className={cx('label-filter')}>Tổng thanh toán</p>
                    <Slider
                        className={cx('slider')}
                        getAriaLabel={() => 'Temperature range'}
                        size="small"
                        min={0}
                        max={50000000}
                        step={1000000}
                        value={paramsFilter.price}
                        onChange={handleChangePriceArange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueTextPriceArange}
                    />
                    <div className={cx('price-text')}>
                        <span className={cx('value')}>
                            {paramsFilter.price[0].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <span>
                            <CgArrowLongRightC className="icon" />
                        </span>
                        <span className={cx('value')}>
                            {paramsFilter.price[1].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allPrice}
                                onChange={() => handleCheckAllPriceFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Ngày khởi hành</p>
                    <div className={cx('departure')}>
                        <DatePicker
                            dateFormat="dd / MM / yyyy"
                            placeholderText="ngày / tháng / năm"
                            selected={paramsFilter.departure}
                            onChange={(date) => {
                                handleChangeDeparture(date);
                            }}
                        />
                        <BsCalendar3 className={cx('icon-calendar')} />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allDeparture}
                                onChange={() => handleCheckAllDepartureFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Ngày đặt tour</p>
                    <div className={cx('departure')}>
                        <DatePicker
                            dateFormat="dd / MM / yyyy"
                            placeholderText="ngày / tháng / năm"
                            selected={paramsFilter.time}
                            onChange={(date) => {
                                handleChangeBookingDate(date);
                            }}
                        />
                        <BsCalendar3 className={cx('icon-calendar')} />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allTime}
                                onChange={() => handleCheckAllTimeFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
            </div>
            {/* <div className={cx('sort-tours')}>
                <ToggleButtonGroup
                    color="error"
                    value={sortValue}
                    exclusive
                    // onChange={handleChangeSortValue}
                    aria-label="Platform"
                    className={cx('toggle-button-group')}
                >
                    <ToggleButton value={1}>
                        {allTour.length > 0 &&
                        allTour[0].bt_tongthanhtoan < allTour[1]
                            ? 'Giá tour giảm dần'
                            : 'Giá tour tăng dần'}
                    </ToggleButton>
                    <ToggleButton value={-1}>
                        {allTour.length > 0 &&
                        allTour[0].bt_tongthanhtoan < allTour[1]
                            ? 'Giá tour tăng dần'
                            : 'Giá tour giảm dần'}
                    </ToggleButton>
                </ToggleButtonGroup>
            </div> */}
            {bookings.length === 0 && (
                <div className={cx('empty-tourList')}>
                    <p>Không tìm thấy kết quả phù hợp!</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                        alt=""
                    />
                </div>
            )}
            {bookings.length !== 0 && (
                <table>
                    <thead>
                        <tr>
                            <th className={cx('text-left')}>Tên tour</th>
                            <th className={cx('text-center')}>Khởi hành</th>
                            <th className={cx('text-center')}>Ngày book</th>
                            <th className={cx('text-center')}>Thanh toán</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item, index) => (
                            <BookingTourItem
                                key={index}
                                item={item}
                            ></BookingTourItem>
                        ))}
                    </tbody>
                </table>
            )}
            {viewBooking && <ViewBookingTour></ViewBookingTour>}
        </div>
    );
}

export default BookingTour;
