import { React, memo, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Accordion from '@mui/material/Accordion';
import Avatar from '@mui/material/Avatar';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './CalendarGuideTest.scss';
import {
    calendarSelected,
    handleCloseGuidesSubmit,
    isOpenGuidesSubmit,
} from './CalendarGuideSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function GuidesSubmit(props) {
    const openGuidesSubmit = useSelector(isOpenGuidesSubmit);
    const calendar = useSelector(calendarSelected);
    const dispatch = useDispatch();

    console.log(calendar);
    const dateStart = new Date(calendar.ldt_lichkhoihanh.lkh_ngaykhoihanh);
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

    return (
        <div>
            <Dialog
                open={openGuidesSubmit}
                className={cx('add-dialog')}
                fullScreen
                TransitionComponent={Transition}
                onClose={() => dispatch(handleCloseGuidesSubmit())}
            >
                <AppBar
                    sx={{ position: 'relative' }}
                    className={cx('add-dialog-appbar')}
                >
                    <Toolbar className={cx('add-dialog-toolbar')}>
                        <IconButton
                            className={cx('add-dialog-iconButton')}
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={() => dispatch(handleCloseGuidesSubmit())}
                        >
                            <CloseIcon className={cx('add-dialog-icon')} />
                        </IconButton>
                        <Typography
                            className={cx('add-dialog-typography')}
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            CHI TIẾT ĐĂNG KÝ LỊCH DẪN TOUR
                        </Typography>
                        <Button
                            className={cx('add-dialog-btn-save')}
                            onClick={() => dispatch(handleCloseGuidesSubmit())}
                        >
                            THOÁT
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={cx('guides-submit')}>
                    <div className={cx('guides-submit-details')}>
                        <Accordion className={cx('accordion details-tour')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                className={cx('accordionSummary')}
                            >
                                <div className={cx('typography')}>
                                    <div className={cx('name-tour')}>
                                        {calendar.ldt_tour.t_ten}
                                    </div>
                                    <div className={cx('departure')}>
                                        <span>
                                            {`${dayStart}, `}
                                            {moment(dateStart).format(
                                                'DD / MM / YYYY'
                                            )}
                                        </span>{' '}
                                        khởi hành
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                className={cx('accordionDetails')}
                            >
                                <div className={cx('typography')}>
                                    <div className={cx('table-infor')}>
                                        <div className={cx('table-item')}>
                                            <table>
                                                <thead></thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Mã tour
                                                        </td>
                                                        <td
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {
                                                                calendar
                                                                    .ldt_tour
                                                                    .t_ma
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Loại hình tour
                                                        </td>
                                                        <td
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {
                                                                calendar
                                                                    .ldt_tour
                                                                    .t_loaihinh
                                                                    .lht_ten
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={cx('table-item')}>
                                            <table>
                                                <thead></thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Thời gian
                                                        </td>
                                                        <td
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {
                                                                calendar
                                                                    .ldt_tour
                                                                    .t_thoigian
                                                            }{' '}
                                                            ngày{' '}
                                                            {calendar.ldt_tour
                                                                .t_thoigian -
                                                                1}{' '}
                                                            đêm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Giá tour
                                                        </td>
                                                        <td
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {calendar.ldt_tour.t_gia.toLocaleString(
                                                                'vi',
                                                                {
                                                                    style: 'currency',
                                                                    currency:
                                                                        'VND',
                                                                }
                                                            )}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={cx('schedule-tour')}>
                                        {calendar.ldt_tour.t_lichtrinhtour.map(
                                            (item, index) => (
                                                <div key={index}>
                                                    <Accordion
                                                        className={cx(
                                                            'accordion'
                                                        )}
                                                    >
                                                        <AccordionSummary
                                                            expandIcon={
                                                                <ExpandMoreIcon />
                                                            }
                                                            aria-controls="panel1a-content"
                                                            className={cx(
                                                                'accordionSummary'
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'typography'
                                                                )}
                                                            >
                                                                Ngày{' '}
                                                                {item.ltt_ngay}:{' '}
                                                                {item.ltt_ten}
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails
                                                            className={cx(
                                                                'accordionDetails'
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'typography'
                                                                )}
                                                            >
                                                                <table>
                                                                    <thead></thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className={cx(
                                                                                    'label'
                                                                                )}
                                                                            >
                                                                                Phương
                                                                                tiện
                                                                            </td>
                                                                            <td
                                                                                className={cx(
                                                                                    'content'
                                                                                )}
                                                                            >
                                                                                {item.ltt_phuongtien
                                                                                    .map(
                                                                                        (
                                                                                            item,
                                                                                            index
                                                                                        ) =>
                                                                                            item.pt_ten
                                                                                    )
                                                                                    .join(
                                                                                        ', '
                                                                                    )}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                className={cx(
                                                                                    'label'
                                                                                )}
                                                                            >
                                                                                Nội
                                                                                dung
                                                                            </td>
                                                                            <td
                                                                                className={cx(
                                                                                    'content'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    item.ltt_noidung
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <div className={cx('guides-list')}>
                            {/* <p className={cx('label-list')}>
                                HƯỚNG DẪN VIÊN ĐÃ ĐĂNG KÝ
                            </p> */}

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
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1658649722/GoTravel/karik_zfjwem.jpg"
                                                sx={{ width: 50, height: 50 }}
                                            />
                                            <span>Phạm Hoàng Tuấn</span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className={cx('accordion-details')}
                                    >
                                        <div className={cx('typography')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Suspendisse malesuada lacus ex, sit
                                            amet blandit leo lobortis eget.
                                        </div>
                                        <IconButton
                                            aria-label="delete"
                                            className={cx('delete-button')}
                                        >
                                            <DeleteIcon
                                                className={cx('icon')}
                                            />
                                        </IconButton>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
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
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1658649722/GoTravel/karik_zfjwem.jpg"
                                                sx={{ width: 50, height: 50 }}
                                            />
                                            <span>Phạm Hoàng Tuấn</span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className={cx('accordion-details')}
                                    >
                                        <div className={cx('typography')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Suspendisse malesuada lacus ex, sit
                                            amet blandit leo lobortis eget.
                                        </div>
                                        <IconButton
                                            aria-label="delete"
                                            className={cx('delete-button')}
                                        >
                                            <DeleteIcon
                                                className={cx('icon')}
                                            />
                                        </IconButton>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(GuidesSubmit);
