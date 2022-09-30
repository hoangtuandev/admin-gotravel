import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import styles from './CalendarGuideTest.scss';
import * as api from '../../api';
import {
    handleOpenGuidesSubmit,
    handleSelectCalendar,
} from './CalendarGuideSlice';
const cx = classNames.bind(styles);

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.6rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function CalendarAccordion(props) {
    const dispatch = useDispatch();
    const { calendar } = props;
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleViewCalendarGuide = () => {
        dispatch(handleOpenGuidesSubmit());
        dispatch(handleSelectCalendar(calendar));
    };

    const dateStart = new Date(calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh);
    const dateEnd = new Date(calendar.ldt_lichkhoihanh.lkh_ngayketthuc);
    const dayStart =
        dateStart.getDay() === 0
            ? 'Chủ nhật'
            : dateStart.getDay() === 1
            ? 'Thứ 2'
            : dateStart.getDay() === 2
            ? 'Thứ 3'
            : dateStart.getDay() === 3
            ? 'Thứ 4'
            : dateStart.getDay() === 4
            ? 'Thứ 5'
            : dateStart.getDay() === 5
            ? 'Thứ 6'
            : 'Thứ 7';

    const dayEnd =
        dateEnd.getDay() === 0
            ? 'Chủ nhật'
            : dateStart.getDay() === 1
            ? 'Thứ 2'
            : dateStart.getDay() === 2
            ? 'Thứ 3'
            : dateStart.getDay() === 3
            ? 'Thứ 4'
            : dateStart.getDay() === 4
            ? 'Thứ 5'
            : dateStart.getDay() === 5
            ? 'Thứ 6'
            : 'Thứ 7';
    // console.log(date.toLocaleDateString());

    // useEffect(() => {
    //     var date = new Date();
    //     date.setDate(date.getDate() + 30);
    //     var dateString = new Date(date.toISOString().split('T')[0]);

    //     const start = new Date();

    //     const end = new Date(dateString.toLocaleDateString());

    //     let loop = new Date(start);
    //     while (loop <= end) {
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
    // }, [tourList, departureList]);

    return (
        <Accordion
            className={cx('accordion-date')}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
        >
            <AccordionSummary
                className={cx('accordion-summary')}
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                <Typography className={cx('typography')}>
                    <span>Khởi hành</span>
                    {`${dayStart}, `}
                    {moment(dateStart).format('DD / MM / YYYY')}{' '}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={cx('accordion-details')}>
                <Accordion className={cx('accordion-tour')}>
                    <AccordionSummary
                        className={cx('accordion-summary')}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <div className={cx('typography')}>
                            <div className={cx('typography-tour')}>
                                {calendar.ldt_tour.t_ten}
                            </div>

                            <AvatarGroup
                                max={4}
                                className={cx('list-guide')}
                                onClick={() => handleViewCalendarGuide()}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658649734/GoTravel/tran-thanh-1_tq38tx.png"
                                />
                                <Avatar
                                    alt="Agnes Walker"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658649721/GoTravel/hari-1_r7zjev.jpg"
                                />
                                <Avatar
                                    alt="Travis Howard"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658649722/GoTravel/karik_zfjwem.jpg"
                                />
                                <Avatar
                                    alt="Trevor Henderson"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658645865/GoTravel/Thoat-kiep-ta-1656037029-25-width660height660_rj4jy5.jpg"
                                />
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658649721/GoTravel/miule_nbsahv.jpg"
                                />
                            </AvatarGroup>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={cx('accordion-details')}>
                        <table className={cx('details-tour')}>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={cx('label')}>
                                        Điểm khởi hành
                                    </td>
                                    <td className={cx('content')}>
                                        {calendar.ldt_lichkhoihanh.lkh_diadiem}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('label')}>Kết thúc</td>
                                    <td className={cx('content')}>
                                        {`${dayEnd}, `}
                                        {moment(dateEnd).format(
                                            'DD / MM / YYYY'
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('label')}>Mã tour</td>
                                    <td className={cx('content')}>
                                        {calendar.ldt_tour.t_ma}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <img src={calendar.ldt_tour.t_hinhanh[0]} alt="" />
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    );
}

export default CalendarAccordion;
