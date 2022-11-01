import { React } from 'react';
import classNames from 'classnames/bind';
import { Chart, registerables } from 'chart.js';
import styles from './Statistic.scss';
import GeneralStatistic from './GeneralStatistic';
import TouristStatistic from './TouristStatistic';
import TourStatistic from './TourStatistic';
import RevenueStatistic from './RevenueStatistic';
import GuideStatistic from './GuideStatistic';
import CalendarGuideStatistic from './CalendarGuideStatistic';
import CompareRevenueStatistic from './CompareRevenueStatistic';

Chart.register(...registerables);
const cx = classNames.bind(styles);

function Statistic() {
    return (
        <div className={cx('statistic')}>
            <GeneralStatistic></GeneralStatistic>
            <CompareRevenueStatistic></CompareRevenueStatistic>
            <RevenueStatistic></RevenueStatistic>
            <TourStatistic></TourStatistic>
            <TouristStatistic></TouristStatistic>
            {/* <GuideStatistic></GuideStatistic>
            <CalendarGuideStatistic></CalendarGuideStatistic> */}
        </div>
    );
}

export default Statistic;
