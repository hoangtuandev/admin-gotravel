import { React, memo, forwardRef, useState } from 'react';
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
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Tour.scss';
import {
    handleCloseViewDialog,
    isOpenViewDialog,
    itemSelected,
} from './TourSlice';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ViewDialog(props) {
    const dispatch = useDispatch();
    const tourSelected = useSelector(itemSelected);
    const openDialog = useSelector(isOpenViewDialog);

    const [listDeparture, setListDeparture] = useState([]);

    useEffect(() => {
        const current = new Date();
        const filterByDeparture = (departure) => {
            const startDate = new Date(departure.lkh_ngaykhoihanh);
            // return date.toLocaleDateString() > current.toLocaleDateString();
            return current < startDate;
        };
        const newDeparture =
            tourSelected.t_lichkhoihanh.filter(filterByDeparture);
        setListDeparture(newDeparture);
    }, [tourSelected]);

    return (
        <div>
            <Dialog
                open={openDialog}
                className={cx('add-dialog')}
                fullScreen
                TransitionComponent={Transition}
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
                            onClick={() => dispatch(handleCloseViewDialog())}
                        >
                            <CloseIcon className={cx('add-dialog-icon')} />
                        </IconButton>
                        <Typography
                            className={cx('add-dialog-typography')}
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            TH??NG TIN CHI TI???T TOUR
                        </Typography>
                        <Button
                            className={cx('add-dialog-btn-save')}
                            onClick={() => dispatch(handleCloseViewDialog())}
                        >
                            THO??T
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={cx('add-form')}>
                    <div className={cx('view-details')}>
                        <div className={cx('details-component')}>
                            <table className={cx('infor-tour')}>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td className={cx('label')}>M?? tour</td>
                                        <td className={cx('content id-tour')}>
                                            {tourSelected.t_ma}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            T??n tour
                                        </td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_ten}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            Lo???i h??nh tour
                                        </td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_loaihinh.lht_ten}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>S??? ng??y</td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_thoigian}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            S??? h??nh kh??ch
                                        </td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_soluongkhach}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            S??? h?????ng d???n vi??n
                                        </td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_soluonghuongdanvien}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>Gi??</td>
                                        <td className={cx('content')}>
                                            {tourSelected.t_gia.toLocaleString(
                                                'vi',
                                                {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={cx('images-tour')}>
                                <p>H??nh ???nh tour</p>
                                <ul>
                                    {tourSelected.t_hinhanh.map(
                                        (item, index) => (
                                            <li key={index}>
                                                <img src={item} alt="" />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className={cx('details-component')}>
                            <div className={cx('departure-tour')}>
                                <p className={cx('title-infor')}>
                                    L???ch kh???i h??nh
                                </p>
                                {listDeparture.length !== 0 &&
                                    listDeparture.map((item, index) => (
                                        <Accordion
                                            key={index}
                                            className={cx('accordion')}
                                        >
                                            <AccordionSummary
                                                className={cx(
                                                    'accordion-summary'
                                                )}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    className={cx(
                                                        'typography typography-summary'
                                                    )}
                                                >
                                                    T???
                                                    <span>
                                                        {moment(
                                                            item.lkh_ngaykhoihanh
                                                        ).format('DD/MM/YYYY')}
                                                    </span>
                                                    ?????n
                                                    <span>
                                                        {moment(
                                                            item.lkh_ngayketthuc
                                                        ).format('DD/MM/YYYY')}
                                                    </span>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails
                                                className={cx(
                                                    'accordion-details'
                                                )}
                                            >
                                                <Typography
                                                    className={cx(
                                                        'typography typography-details'
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            'details-item'
                                                        )}
                                                    >
                                                        <span
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            ?????a ??i???m
                                                        </span>
                                                        <span
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {item.lkh_diadiem}
                                                        </span>
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'details-item'
                                                        )}
                                                    >
                                                        <span
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Ph????ng ti???n
                                                        </span>
                                                        <span
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {item.lkh_phuongtien
                                                                .map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) =>
                                                                        item.pt_ten
                                                                )
                                                                .join(', ')}
                                                        </span>
                                                    </span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                            </div>
                            <div className={cx('schedules-tour')}>
                                <p className={cx('title-infor')}>
                                    L???ch tr??nh tour
                                </p>
                                {tourSelected.t_lichtrinhtour.map(
                                    (item, index) => (
                                        <Accordion
                                            className={cx('accordion')}
                                            key={index}
                                        >
                                            <AccordionSummary
                                                className={cx(
                                                    'accordion-summary'
                                                )}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    className={cx(
                                                        'typography typography-summary'
                                                    )}
                                                >
                                                    Ng??y {item.ltt_ngay}:{' '}
                                                    {item.ltt_ten}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails
                                                className={cx(
                                                    'accordion-details'
                                                )}
                                            >
                                                <Typography
                                                    className={cx(
                                                        'typography typography-details'
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            'details-item'
                                                        )}
                                                    >
                                                        <span
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            Ph????ng ti???n
                                                        </span>
                                                        <span
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
                                                                .join(', ')}
                                                        </span>
                                                    </span>
                                                    <span
                                                        className={cx(
                                                            'details-item'
                                                        )}
                                                    >
                                                        <span
                                                            className={cx(
                                                                'label'
                                                            )}
                                                        >
                                                            N???i dung
                                                        </span>
                                                        <span
                                                            className={cx(
                                                                'content'
                                                            )}
                                                        >
                                                            {item.ltt_noidung}
                                                        </span>
                                                    </span>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(ViewDialog);
