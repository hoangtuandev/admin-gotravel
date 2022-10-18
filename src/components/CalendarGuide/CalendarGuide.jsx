import { React, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import styles from './CalendarGuide.scss';
import * as api from '../../api';
import CalendarAccordion from './CalendarAccordion';
import Pagination from '@mui/material/Pagination';
import Switch from '@mui/material/Switch';
import { BsCalendar3 } from 'react-icons/bs';
import { isOpenGuidesSubmit } from './CalendarGuideSlice';
import GuidesSubmit from './GuidesSubmit';
import SearchIcon from '@mui/icons-material/Search';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

function CalendarGuide() {
    const openGuidesSubmit = useSelector(isOpenGuidesSubmit);
    const [calendarGuide, setCalendarGuide] = useState([]);
    const [departure, setDeparture] = useState(new Date());
    const [selectAll, setSelectAll] = useState(true);
    const [searchingKey, setSearchingKey] = useState('');
    const [page, setPage] = useState(1);

    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    const handleToggleSelectAll = (event) => {
        setSelectAll(event.target.checked);
    };

    useEffect(() => {
        if (selectAll === true) {
            setSearchingKey('');
            setDeparture(new Date());
            api.get30NextDayCalendarGuide().then((res) => {
                setCalendarGuide(
                    res.data.sort(
                        (a, b) =>
                            Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                            Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                    )
                );
            });
        }
    }, [selectAll]);

    useEffect(() => {
        api.get30NextDayCalendarGuide().then((res) => {
            setCalendarGuide(
                res.data.sort(
                    (a, b) =>
                        Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                        Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                )
            );
        });
    }, []);

    const handleChangeDepartureDate = (date) => {
        setSelectAll(false);
        setDeparture(date);
        api.getCalendarGuidebyDeaprtureDate({ date: date }).then((res) => {
            setCalendarGuide(
                res.data.sort(
                    (a, b) =>
                        Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                        Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                )
            );
        });
    };

    const handleChangeSearchingKey = (key) => {
        setSelectAll(false);
        setSearchingKey(key);
        api.searchingCalendarGuideByTourName({
            keySearching: key,
        }).then((res) => {
            setCalendarGuide(
                res.data.sort(
                    (a, b) =>
                        Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                        Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                )
            );
        });
    };

    return (
        <div className={cx('calendar-guide')}>
            <div className={cx('filter-calendar-guide')}>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Ngày khởi hành</p>
                    <DatePicker
                        dateFormat="dd / MM / yyyy"
                        placeholderText="ngày / tháng / năm"
                        selected={departure}
                        onChange={(date) => {
                            handleChangeDepartureDate(date);
                        }}
                    />
                    <BsCalendar3 className={cx('icon-calendar')} />
                </div>
                <div className={cx('search-tour')}>
                    <input
                        className={'textfield-search'}
                        type="text"
                        placeholder="Nhập tên tour để tìm kiếm..."
                        value={searchingKey}
                        onChange={(e) =>
                            handleChangeSearchingKey(e.target.value)
                        }
                    />
                    <label>
                        <SearchIcon className={cx('search-icon')} />
                    </label>
                </div>
            </div>
            <div className={cx('select-all')}>
                <span className={cx('label')}>Tất cả</span>
                <Switch
                    size="large"
                    color="error"
                    checked={selectAll}
                    onChange={handleToggleSelectAll}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>

            {calendarGuide.length === 0 && (
                <div className={cx('empty-list')}>
                    <p className={cx('notifications')}>
                        Không tìm thấy lịch dẫn tour phù hợp !
                    </p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                        alt=""
                    />
                </div>
            )}

            {openGuidesSubmit && (
                <GuidesSubmit
                    setCalendarGuide={setCalendarGuide}
                ></GuidesSubmit>
            )}
            {calendarGuide.length !== 0 &&
                calendarGuide
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((calendar, index) => (
                        <CalendarAccordion
                            key={index}
                            calendar={calendar}
                        ></CalendarAccordion>
                    ))}

            {Math.ceil(calendarGuide.length / 10) > 1 && (
                <div className={cx('pagination-list')}>
                    <Pagination
                        size="large"
                        count={Math.ceil(calendarGuide.length / 10)}
                        page={page}
                        color="error"
                        variant="outlined"
                        className={cx('pagination')}
                        onChange={handleChangePagination}
                    />
                </div>
            )}
        </div>
    );
}

export default CalendarGuide;
