import { React, useState } from 'react';
import classNames from 'classnames/bind';
// import { useSelector, useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import TourIcon from '@mui/icons-material/Tour';
import PersonIcon from '@mui/icons-material/Person';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './GuideManager.scss';

const cx = classNames.bind(styles);

export default function HistoryRatingItem(props) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion
            className={cx('accordion')}
            expanded={expanded === 'asdfshgdfhb'}
            onChange={handleChange('asdfshgdfhb')}
        >
            <AccordionSummary
                className={cx('accordion-summary')}
                expandIcon={<ExpandMoreIcon className={cx('expand-icon')} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div
                    className={cx('typography')}
                    sx={{ color: 'text.secondary' }}
                >
                    <TourIcon className={cx('tour-icon')} />
                    <span>
                        Hà Nội - Du Thuyền Hạ Long 5 Sao - Lịch Trình 6 Tiếng
                        Trong Ngày
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails
                className={cx('accordion-details')}
            ></AccordionDetails>
        </Accordion>
    );
}
