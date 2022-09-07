import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {
    MdEdit,
    MdRemoveRedEye,
    MdNearMeDisabled,
    MdNearMe,
} from 'react-icons/md';

import styles from './Tour.scss';
import {
    handleOpenStopDialog,
    handleOpenUpdateDialog,
    handleOpenViewDialog,
    handleSetItemSelected,
    isShowStopedTour,
} from './TourSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

function TourItem(props) {
    const { setTourList, setStopedTourList } = props;
    const { data } = props;
    const dispatch = useDispatch();
    const showStopedTour = useSelector(isShowStopedTour);

    const handleClickUpdate = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenUpdateDialog());
    };

    const handleClickStop = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenStopDialog());
    };

    const handleActiveTour = () => {
        api.updateActiveTour({ _id: data._id }).then((res) => {
            api.getAllTour().then((res) => {
                setTourList(res.data);
            });

            api.getAllStopedTour().then((res) => {
                setStopedTourList(res.data);
            });
        });
    };

    const handleClickView = () => {
        dispatch(handleSetItemSelected(data));
        dispatch(handleOpenViewDialog());
    };

    return (
        <tr>
            <td className={cx('center-col img-tour')}>
                <img src={data.t_hinhanh[0]} alt="" />
            </td>
            <td className={cx('center-col')}>{data.t_ma}</td>
            <td className={cx('left-col name-tour-col')}>{data.t_ten}</td>
            <td className={cx('center-col')}>{data.t_thoigian} ngày</td>
            <td className={cx('center-col price-tour-col')}>
                {data.gia > 0 &&
                    data.t_gia.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}
            </td>
            <td className={cx('button-group')}>
                {!showStopedTour && (
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        size="large"
                    >
                        <Button
                            title="Ngưng tour"
                            color="error"
                            className={cx('icon')}
                            onClick={() => handleClickStop()}
                        >
                            <MdNearMeDisabled />
                        </Button>
                        <Button
                            title="Xem chi tiết tour"
                            color="primary"
                            className={cx('icon')}
                            onClick={() => handleClickView()}
                        >
                            <MdRemoveRedEye />
                        </Button>

                        <Button
                            title="Cập nhật tour"
                            color="success"
                            className={cx('icon')}
                            onClick={() => handleClickUpdate()}
                        >
                            <MdEdit />
                        </Button>
                    </ButtonGroup>
                )}
                {showStopedTour && (
                    <Button
                        title="Kích hoạt tour"
                        variant="contained"
                        color="primary"
                        className={cx('icon')}
                        onClick={() => handleActiveTour()}
                    >
                        <MdNearMe />
                    </Button>
                )}
            </td>
        </tr>
    );
}

export default TourItem;
