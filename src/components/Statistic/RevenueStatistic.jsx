import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';
import * as api from '../../api';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function RevenueStatistic() {
    const [yearsBooking, setYearsBooking] = useState([]);
    const [revenueMonth, setrevenueMonth] = useState([]);

    useEffect(() => {
        api.getYearsBookingTour().then((res) => {
            setYearsBooking(res.data);
        });
    }, []);

    const state = {
        labels: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
        ],
        datasets: [
            {
                label: 'Doanh thu tháng',
                backgroundColor: [
                    'rgba(231, 76, 60, 0.1)',
                    'rgba(142, 68, 173, 0.1)',
                    'rgba(46, 134, 193, 0.1)',
                    'rgba(40, 180, 99, 0.1)',
                    'rgba(243, 156, 18, 0.1)',
                    'rgba(192, 57, 43, 0.1)',
                    'rgba(201, 203, 207, 0.1)',
                    'rgba(23, 165, 137, 0.1)',
                    'rgba(255, 159, 64, 0.1)',
                    'rgba(255, 205, 86, 0.1)',
                    'rgba(236, 112, 99, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                ],
                borderColor: [
                    'rgb(231, 76, 60)',
                    'rgb(142, 68, 173)',
                    'rgb(46, 134, 193)',
                    'rgb(40, 180, 99)',
                    'rgb(243, 156, 18)',
                    'rgb(192, 57, 43)',
                    'rgb(201, 203, 207)',
                    'rgb(23, 165, 137)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(236, 112, 99)',
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 2,
                data: revenueMonth,
            },
        ],
    };

    const handleChangeYearSelected = (option) => {
        api.revenueBookingTourByMonth({ currentYear: option.value }).then(
            (res) => {
                setrevenueMonth(res.data);
            }
        );
    };

    return (
        <div className={cx('revenue-statistic')}>
            <p className={cx('label-statistic')}>
                THỐNG KÊ DOANH THU THEO THÁNG
            </p>
            <div className={cx('select-year')}>
                <Select
                    placeholder="Chọn năm thống kê"
                    className={cx('select-field')}
                    options={yearsBooking}
                    onChange={handleChangeYearSelected}
                />
            </div>
            <Bar
                // width={100}
                height={100}
                data={state}
            />
        </div>
    );
}

export default RevenueStatistic;
