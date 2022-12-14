import { React, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import styles from './GuideManager.scss';

const cx = classNames.bind(styles);

export default function HistoryRatingItem(props) {
    const { rating } = props;
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion
            className={cx('rating-accordition')}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
        >
            <AccordionSummary
                className={cx('rating-accordition-summay')}
                expandIcon={
                    <ExpandMoreIcon className={cx('expandmore-icon')} />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div
                    className={cx('rating-content')}
                    sx={{ color: 'text.secondary' }}
                >
                    <div className={cx('rating-content-star')}>
                        <Rating
                            name="size-large"
                            defaultValue={rating.dghdv_saodanhgia}
                            size="large"
                        />
                    </div>
                    <div className={cx('rating-content-comment')}>
                        {rating.dghdv_nhanxet}
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className={cx('rating-accordition-details')}>
                <div className={cx('account-rating')}>
                    <AccountCircleIcon className={cx('account-icon')} />
                    <span>
                        {
                            rating.dghdv_booking.bt_taikhoan.tkkdl_khachdulich
                                .kdl_hoten
                        }
                    </span>
                </div>
                <ul className={cx('rating-detail')}>
                    <li>
                        <p className={cx('label-infor')}>S??? sao:</p>
                        <p className={cx('content-infor')}>
                            <Rating defaultValue={rating.dghdv_saodanhgia} />
                        </p>
                    </li>
                    <li className={cx('comment-rating')}>
                        <p className={cx('label-infor')}>Nh???n x??t:</p>
                        <p className={cx('content-infor')}>
                            {rating.dghdv_nhanxet}
                        </p>
                    </li>
                    <li>
                        <p className={cx('label-infor')}>Th???i gian:</p>
                        <p className={cx('content-infor')}>
                            {moment(rating.dghdv_thoigian).format(
                                'HH:mm DD/MM/YYYY'
                            )}
                        </p>
                    </li>
                    <li>
                        <p className={cx('label-infor')}>M?? booking:</p>
                        <p className={cx('content-infor')}>
                            {rating.dghdv_booking.bt_ma}
                        </p>
                    </li>
                    <li>
                        <p className={cx('label-infor')}>Ng??y kh???i h??nh:</p>
                        <p className={cx('content-infor')}>
                            {moment(
                                rating.dghdv_booking.bt_lichkhoihanh
                                    .lkh_ngaykhoihanh
                            ).format('DD/MM/YYYY')}
                        </p>
                    </li>
                    <li>
                        <p className={cx('label-infor')}>Ng??y k???t th??c</p>
                        <p className={cx('content-infor')}>
                            {moment(
                                rating.dghdv_booking.bt_lichkhoihanh
                                    .lkh_ngayketthuc
                            ).format('DD/MM/YYYY')}
                        </p>
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}
