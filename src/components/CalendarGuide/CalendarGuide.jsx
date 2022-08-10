import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CalendarGuide.scss';
import * as api from '../../api';
import CalendarAccordion from './CalendarAccordion';

const cx = classNames.bind(styles);

function CalendarGuide() {
    // const [currentDate, setCurrentDate] = useState(new Date().getTime());
    // const [tourList, setTourList] = useState([]);
    // const [departureList, setDepartureList] = useState([]);
    // const [calendarGuide, setCalendarGuide] = useState([]);
    const [calendarGuide, setCalendarGuide] = useState([]);
    const [calendarGuideGoupBy, setCalendarGuideGoupBy] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        api.getCalendarGuide().then((res) => {
            setCalendarGuide(res.data);

            // const result = res.data.group(
            //     ({ type }) => ldt_lichkhoihanh.lkh_ngaykhoihanh
            // );
        });
    }, []);

    // useEffect(() => {
    //     setCalendarGuideGoupBy(
    //         calendarGuide.group(
    //             ({ type }) =>
    //                 calendarGuide.data.ldt_lichkhoihanh.lkh_ngaykhoihanh
    //         )
    //     );
    // }, [calendarGuide]);
    // console.log(calendarGuideGoupBy);

    // const createCalendarGuide = (departure, tour, start, end) => {
    //     // console.log(departure.lkh_ngaykhoihanh.getTime());
    //     let date = new Date(departure.lkh_ngaykhoihanh);
    //     console.log(date);
    //     // let dateStart = new Date(item.lkh_ngaykhoihanh);
    //     // if (dateStart >= start && dateStart <= end) {
    //     //     console.log(item.lkh_ngaykhoihanh, tour.t_ten);
    //     // }
    // };

    // useEffect(() => {
    //     var date = new Date();
    //     date.setDate(date.getDate() + 15);
    //     var dateString = new Date(date.toISOString().split('T')[0]);

    //     const end = new Date(dateString.toLocaleDateString());
    //     setEndDate(new Date(dateString.toLocaleDateString()));

    //     let loop = new Date(new Date());
    //     while (loop <= end) {
    //         console.log(loop);
    //         let calendar = [];
    //         calendarGuide.map(
    //             (item, index) =>

    //                 // item.ldt_lichkhoihanh.lkh_ngaykhoihanh >= startDate &&
    //                 // item.ldt_lichkhoihanh.lkh_ngaykhoihanh <= end
    //                 // ?
    //                 //     const calendarItem = {
    //                 //         date: item.ldt_lichkhoihanh.lkh_ngaykhoihanh,
    //                 //     }
    //                 // :
    //         );
    //         // calendarGuide.map((item, index) => console.log(item));
    //         // departureList.map((departure, index) =>
    //         //     tourList.map((tour, index) =>
    //         //         createCalendarGuide(departure, tour, start, end)
    //         //     )
    //         // );
    //         // // tourList.map((tour) =>
    //         // //     tour.t_lichkhoihanh.map(
    //         // //         (item) => createCalendarGuide(tour, item, start, end)
    //         // //         // item.lkh_ngaykhoihanh >= start &&
    //         // //         // item.lkh_ngayketthuc <= end
    //         // //         //     ? console.log(item.lkh_ngaykhoihanh, tour.t_ten)
    //         // //         //     : console.log('Error')
    //         // //     )
    //         // // );
    //         let newDate = loop.setDate(loop.getDate() + 1);
    //         loop = new Date(newDate);
    //     }
    // }, []);

    return (
        <div className={cx('calendar-guide')}>
            {calendarGuide.map((calendar, index) => (
                <CalendarAccordion
                    key={index}
                    calendar={calendar}
                ></CalendarAccordion>
            ))}
        </div>
    );
}

export default CalendarGuide;
