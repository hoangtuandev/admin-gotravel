import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TourIcon from '@mui/icons-material/Tour';
import RuleIcon from '@mui/icons-material/Rule';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HailIcon from '@mui/icons-material/Hail';
import styles from './Statistic.scss';
import * as api from '../../api';
import { useState } from 'react';

const cx = classNames.bind(styles);

function GeneralStatistic() {
    const [amountTour, setAmountTour] = useState(0);
    const [amountBooking, setAmountBooking] = useState(0);
    const [amountGuideAccount, setAmountGuideAccount] = useState(0);
    const [amountTouristAccount, setAmountTouristAccount] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalTourist, setTotalTourist] = useState(0);

    useEffect(() => {
        api.countAmountTour().then((res) => {
            setAmountTour(res.data);
        });
        api.countAmountBooking().then((res) => {
            setAmountBooking(res.data);
        });

        api.countAmountGuide().then((res) => {
            setAmountGuideAccount(res.data);
        });

        api.countAmountTouristAccount().then((res) => {
            setAmountTouristAccount(res.data);
        });

        api.totalRevenueBookingTour().then((res) => {
            setTotalRevenue(res.data[0].totalPayment);
        });
        api.totalTouristSatistic().then((res) => {
            setTotalTourist(res.data);
        });
    }, []);

    return (
        <div className={cx('general-statistic')}>
            <ul className={cx('general-statistic-list')}>
                <li className="revenue-general">
                    <div className={cx('figures')}>
                        <AttachMoneyIcon className={cx('icon-figure')} />

                        <div className={cx('value-figure')}>
                            <p className={cx('total')}>
                                {totalRevenue.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                            <p className={cx('label')}>T???ng doanh thu</p>
                        </div>
                    </div>
                    <div className={cx('view-detail')}>
                        <span>Xem chi ti???t</span>
                        <VisibilityIcon className={cx('icon')} />
                    </div>
                </li>
                <li className="tour-general">
                    <div className={cx('figures')}>
                        <TourIcon className={cx('icon-figure')} />

                        <div className={cx('value-figure')}>
                            <p className={cx('total')}>{amountTour}</p>
                            <p className={cx('label')}>T???ng s??? tour</p>
                        </div>
                    </div>
                    <div className={cx('view-detail')}>
                        <span>Xem chi ti???t</span>
                        <VisibilityIcon className={cx('icon')} />
                    </div>
                </li>
                <li className="booking-general">
                    <div className={cx('figures')}>
                        <RuleIcon className={cx('icon-figure')} />

                        <div className={cx('value-figure')}>
                            <p className={cx('total')}>{amountBooking}</p>
                            <p className={cx('label')}>T???ng booking</p>
                        </div>
                    </div>
                    <div className={cx('view-detail')}>
                        <span>Xem chi ti???t</span>
                        <VisibilityIcon className={cx('icon')} />
                    </div>
                </li>
                <li className="guide-general">
                    <div className={cx('figures')}>
                        <SupportAgentIcon className={cx('icon-figure')} />

                        <div className={cx('value-figure')}>
                            <p className={cx('total')}>{amountGuideAccount}</p>
                            <p className={cx('label')}>H?????ng d???n vi??n</p>
                        </div>
                    </div>
                    <div className={cx('view-detail')}>
                        <span>Xem chi ti???t</span>
                        <VisibilityIcon className={cx('icon')} />
                    </div>
                </li>
                <li className="tourist-general">
                    <div className={cx('figures')}>
                        <HailIcon className={cx('icon-figure')} />

                        <div className={cx('value-figure')}>
                            <p className={cx('total')}>{totalTourist}</p>
                            <p className={cx('label')}>T???ng l?????ng kh??ch</p>
                        </div>
                    </div>
                    <div className={cx('view-detail')}>
                        <span>Xem chi ti???t</span>
                        <VisibilityIcon className={cx('icon')} />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default GeneralStatistic;
