import { React, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import Avatar from '@mui/material/Avatar';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CalendarGuide.scss';
import * as api from '../../api';
import { calendarSelected } from './CalendarGuideSlice';

const cx = classNames.bind(styles);

function GuideRegisted(props) {
    const { setCalendarGuide } = props;
    const selectedCalendar = useSelector(calendarSelected);
    const { guide } = props;
    const [calendar, setCalendar] = useState(selectedCalendar);

    console.log('rerender');

    const handleDeleteGuide = () => {
        api.deleteRegistedGuide({
            username: guide.tkhdv_tendangnhap,
            idCalendar: calendar._id,
        }).then((res) => {
            api.get30NextDayCalendarGuide().then((res) => {
                setCalendarGuide(
                    res.data.sort(
                        (a, b) =>
                            Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
                            Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
                    )
                );
            });
            setCalendar(selectedCalendar);
        });
    };

    return (
        <div>
            <Accordion className={cx('accordion')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={cx('accordion-summary')}
                >
                    <div className={cx('typography')}>
                        <Avatar
                            alt="Remy Sharp"
                            src={guide.tkhdv_anhdaidien}
                            sx={{
                                width: 50,
                                height: 50,
                            }}
                        />
                        <span>{guide.tkhdv_huongdanvien.hdv_hoten}</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={cx('accordion-details')}>
                    <div className={cx('typography')}>
                        <ul>
                            <li>
                                <p className={cx('label')}>M?? HDV:</p>
                                <p className={cx('content')}>
                                    {guide.tkhdv_huongdanvien.hdv_ma}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label')}>T??i kho???n:</p>
                                <p className={cx('content')}>
                                    {guide.tkhdv_tendangnhap}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label')}>S??? ??i???n tho???i:</p>
                                <p className={cx('content')}>
                                    {guide.tkhdv_huongdanvien.hdv_sodienthoai}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label')}>Email:</p>
                                <p className={cx('content')}>
                                    {guide.tkhdv_huongdanvien.hdv_mail}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <IconButton
                        aria-label="delete"
                        className={cx('delete-button')}
                        onClick={() => handleDeleteGuide()}
                    >
                        <DeleteIcon className={cx('icon')} />
                    </IconButton>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default memo(GuideRegisted);
