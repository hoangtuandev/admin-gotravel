import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import StarIcon from '@mui/icons-material/Star';
import styles from './Statistic.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);

function CalendarGuideStatistic() {
    useEffect(() => {
        api.calendarGuideTimesStatistic().then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className={cx('calendar-times-statistic')}>
            <table>
                <thead>
                    <tr>
                        <td className={cx('top-index')}></td>

                        <td>Mã HDV</td>
                        <td className={cx('guide-name')}>Hướng dẫn viên</td>
                        <td>Sao trung bình</td>
                        <td>Lượt dẫn tour</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={cx('top-index')}>
                            <p className={cx('top-index-one')}>1</p>
                        </td>

                        <td>T3496578349876</td>
                        <td className={cx('guide-name')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg"
                                alt=""
                            />
                            <span>Pham Hoang Tuan Tuan</span>
                        </td>
                        <td>
                            <div className={cx('average-star')}>
                                <span>4.5</span>
                                <StarIcon className={cx('icon-star')} />
                            </div>
                        </td>
                        <td className={cx('calendar-times')}>4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CalendarGuideStatistic;
