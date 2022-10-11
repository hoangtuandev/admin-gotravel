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

export default function HistoryCalendarItem(props) {
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
            <AccordionDetails className={cx('accordion-details')}>
                <div className={cx('details-evaluate')}>
                    <div className={cx('departure-tour')}>
                        <p>
                            <span>Khởi hành:</span> 20/09/2022
                        </p>
                        <p>
                            <span>Kết thúc:</span> 25/09/2022
                        </p>
                    </div>
                    <div className={cx('informations-calendar')}>
                        <ul>
                            <li>
                                <p className={cx('label-infor')}>Mã tour:</p>
                                <p className={cx('content-infor')}>
                                    T001661305449580
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>Loại hình:</p>
                                <p className={cx('content-infor')}>
                                    Tour khám khá
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>Thời gian:</p>
                                <p className={cx('content-infor')}>3 ngày</p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Khách tối đa:
                                </p>
                                <p className={cx('content-infor')}>3 </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Số hướng dẫn viên:
                                </p>
                                <p className={cx('content-infor')}>3 </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Điểm khởi hành:
                                </p>
                                <p className={cx('content-infor')}>
                                    Sân bay Tan Sơn NHất
                                </p>
                            </li>
                        </ul>

                        <ul className={cx('guide-list')}>
                            <li>
                                <Accordion className={cx('accordition')}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                className={cx('expandIcon')}
                                            />
                                        }
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={cx('accordition-summary')}
                                    >
                                        <div
                                            className={cx('accordition-guide')}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg"
                                                alt=""
                                            />
                                            <span>Pham Hoang Tuan</span>
                                            <p className={cx('rating')}>
                                                <span>4.5</span>
                                                <StarIcon className="iconStart" />
                                            </p>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className={cx('accordition-details')}
                                    >
                                        <ul className={cx('guide-details')}>
                                            <li>
                                                <p
                                                    className={cx(
                                                        'label-infor'
                                                    )}
                                                >
                                                    Mã HDV:
                                                </p>
                                                <p
                                                    className={cx(
                                                        'content-infor'
                                                    )}
                                                >
                                                    T001661305449580
                                                </p>
                                            </li>
                                            <li>
                                                <p
                                                    className={cx(
                                                        'label-infor'
                                                    )}
                                                >
                                                    Tên đăng nhập
                                                </p>
                                                <p
                                                    className={cx(
                                                        'content-infor'
                                                    )}
                                                >
                                                    T001661305449580
                                                </p>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion className={cx('accordition')}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                className={cx('expandIcon')}
                                            />
                                        }
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={cx('accordition-summary')}
                                    >
                                        <div
                                            className={cx('accordition-guide')}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg"
                                                alt=""
                                            />
                                            <span>Pham Hoang Tuan</span>
                                            <p className={cx('rating')}>
                                                <span>4.5</span>
                                                <StarIcon className="iconStart" />
                                            </p>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        className={cx('accordition-details')}
                                    >
                                        <ul className={cx('guide-details')}>
                                            <li>
                                                <p
                                                    className={cx(
                                                        'label-infor'
                                                    )}
                                                >
                                                    Mã HDV:
                                                </p>
                                                <p
                                                    className={cx(
                                                        'content-infor'
                                                    )}
                                                >
                                                    T001661305449580
                                                </p>
                                            </li>
                                            <li>
                                                <p
                                                    className={cx(
                                                        'label-infor'
                                                    )}
                                                >
                                                    Tên đăng nhập
                                                </p>
                                                <p
                                                    className={cx(
                                                        'content-infor'
                                                    )}
                                                >
                                                    T001661305449580
                                                </p>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                        </ul>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
