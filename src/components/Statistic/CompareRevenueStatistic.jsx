import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';
import * as api from '../../api';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function CompareRevenueStatistic() {
    const [revenueMonth, setrevenueMonth] = useState([]);

    useEffect(() => {
        api.compareRevenueBookingTour().then((res) => {
            setrevenueMonth(res.data);
        });
    }, []);

    const state = {
        labels: ['Năm 2020', 'Năm 2021', 'Năm 2022'],
        datasets: [
            {
                label: 'Tổng doanh thu năm',
                backgroundColor: [
                    'rgba(231, 76, 60, 0.1)',
                    'rgba(142, 68, 173, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                ],
                borderColor: [
                    'rgb(231, 76, 60)',
                    'rgb(142, 68, 173)',
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 2,
                data: revenueMonth,
            },
        ],
    };

    return (
        <div className={cx('revenue-statistic')}>
            <p className={cx('label-statistic')}>DOANH THU QUA CÁC NĂM</p>

            <Bar height={100} data={state} />
        </div>
    );
}

export default CompareRevenueStatistic;
