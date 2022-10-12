import { React, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import TourIcon from '@mui/icons-material/Tour';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './GuideManager.scss';

const cx = classNames.bind(styles);

export default function HistoryCalendarItem(props) {
    const { guidetime } = props;
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
                    <span>{guidetime.ldt_tour.t_ten}</span>
                </div>
            </AccordionSummary>
            <AccordionDetails className={cx('accordion-details')}>
                <div className={cx('details-evaluate')}>
                    <div className={cx('departure-tour')}>
                        <p>
                            <span>Khởi hành:</span>{' '}
                            {moment(
                                guidetime.ldt_lichkhoihanh.lkh_ngaykhoihanh
                            ).format('DD/MM/YYYY')}
                        </p>
                        <p>
                            <span>Kết thúc:</span>{' '}
                            {moment(
                                guidetime.ldt_lichkhoihanh.lkh_ngayketthuc
                            ).format('DD/MM/YYYY')}
                        </p>
                    </div>
                    <div className={cx('informations-calendar')}>
                        <ul>
                            <li>
                                <p className={cx('label-infor')}>Mã tour:</p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_tour.t_ma}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>Loại hình:</p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_tour.t_loaihinh.lht_ten}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>Thời gian:</p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_tour.t_thoigian} ngày
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Khách tối đa:
                                </p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_tour.t_soluongkhach}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Số hướng dẫn viên:
                                </p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_tour.t_soluonghuongdanvien}
                                </p>
                            </li>
                            <li>
                                <p className={cx('label-infor')}>
                                    Điểm khởi hành:
                                </p>
                                <p className={cx('content-infor')}>
                                    {guidetime.ldt_lichkhoihanh.lkh_diadiem}
                                </p>
                            </li>
                        </ul>

                        <ul className={cx('guide-list')}>
                            {guidetime.ldt_huongdanvien.map((guide, index) => (
                                <li key={index} guide={guide}>
                                    <Accordion className={cx('accordition')}>
                                        <AccordionSummary
                                            expandIcon={
                                                <ExpandMoreIcon
                                                    className={cx('expandIcon')}
                                                />
                                            }
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className={cx(
                                                'accordition-summary'
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'accordition-guide'
                                                )}
                                            >
                                                <img
                                                    src={guide.tkhdv_anhdaidien}
                                                    alt=""
                                                />
                                                <span>
                                                    {
                                                        guide.tkhdv_huongdanvien
                                                            .hdv_hoten
                                                    }
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            className={cx(
                                                'accordition-details'
                                            )}
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
                                                        {
                                                            guide
                                                                .tkhdv_huongdanvien
                                                                .hdv_ma
                                                        }
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
                                                        {
                                                            guide.tkhdv_tendangnhap
                                                        }
                                                    </p>
                                                </li>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
