import { React, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styles from './CalendarGuide.scss';
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
    // const [expanded, setExpanded] = useState('panel1');

    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };

    const handleViewCalendarGuide = () => {
        dispatch(handleOpenGuidesSubmit());
        dispatch(handleSelectCalendar(calendar));
    };

    const dateStart = new Date(calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh);
    const dateEnd = new Date(calendar.ldt_lichkhoihanh.lkh_ngayketthuc);
    const dayStart =
        dateStart.getDay() === 0
            ? 'Ch??? nh???t'
            : dateStart.getDay() === 1
            ? 'Th??? 2'
            : dateStart.getDay() === 2
            ? 'Th??? 3'
            : dateStart.getDay() === 3
            ? 'Th??? 4'
            : dateStart.getDay() === 4
            ? 'Th??? 5'
            : dateStart.getDay() === 5
            ? 'Th??? 6'
            : 'Th??? 7';

    const dayEnd =
        dateEnd.getDay() === 0
            ? 'Ch??? nh???t'
            : dateStart.getDay() === 1
            ? 'Th??? 2'
            : dateStart.getDay() === 2
            ? 'Th??? 3'
            : dateStart.getDay() === 3
            ? 'Th??? 4'
            : dateStart.getDay() === 4
            ? 'Th??? 5'
            : dateStart.getDay() === 5
            ? 'Th??? 6'
            : 'Th??? 7';

    return (
        <Accordion
            expanded
            className={cx('accordion-date')}
            // expanded={expanded === 'panel1'}
            // onChange={handleChange('panel1')}
        >
            <AccordionSummary
                className={cx('accordion-summary')}
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                <Typography
                    className={cx('typography')}
                    onClick={() => handleViewCalendarGuide()}
                >
                    <span>Kh???i h??nh</span>
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
                                {calendar.ldt_huongdanvien.map(
                                    (guide, index) => (
                                        <Avatar
                                            key={index}
                                            alt="Remy Sharp"
                                            src={guide.tkhdv_anhdaidien}
                                        />
                                    )
                                )}
                            </AvatarGroup>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={cx('accordion-details')}>
                        <table className={cx('details-tour')}>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={cx('label')}>
                                        ??i???m kh???i h??nh
                                    </td>
                                    <td className={cx('content')}>
                                        {calendar.ldt_lichkhoihanh.lkh_diadiem}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('label')}>K???t th??c</td>
                                    <td className={cx('content')}>
                                        {`${dayEnd}, `}
                                        {moment(dateEnd).format(
                                            'DD / MM / YYYY'
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('label')}>M?? tour</td>
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
