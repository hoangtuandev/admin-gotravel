import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import { TbArrowBackUp } from 'react-icons/tb';
import Button from '@mui/material/Button';

import styles from './Tour.scss';
import * as api from '../../api';
import TourItem from './TourItem';

import {
    handleCloseStopedTour,
    handleOpenAddDialog,
    handleOpenStopedTour,
    isOpenAddDialog,
    isOpenStopDialog,
    isOpenUpdateDialog,
    isOpenViewDialog,
    isShowStopedTour,
} from './TourSlice';
import AddDialog from './AddDialog';
import UpdateDialog from './UpdateDialog';
import StopDialog from './StopDialog';
import ViewDialog from './ViewDialog';

const cx = classNames.bind(styles);

function Tour() {
    const dispatch = useDispatch();
    const openAddDialog = useSelector(isOpenAddDialog);
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const openStopDialog = useSelector(isOpenStopDialog);
    const showStopedTour = useSelector(isShowStopedTour);
    const openViewDialog = useSelector(isOpenViewDialog);
    const [tourList, setTourList] = useState([]);
    const [stopedTourList, setStopedTourList] = useState([]);

    useEffect(() => {
        api.getAllActiveTour().then((res) => {
            setTourList(res.data);
        });

        api.getAllStopedTour().then((res) => {
            setStopedTourList(res.data);
        });
    }, []);

    const handleGetAllActiveTour = () => {
        api.getAllActiveTour().then((res) => {
            setTourList(res.data);
            dispatch(handleCloseStopedTour());
        });

        api.getAllStopedTour().then((res) => {
            setStopedTourList(res.data);
        });
    };

    return (
        <div className={cx('tour')}>
            <div>
                {!showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-add')}
                        onClick={() => dispatch(handleOpenAddDialog())}
                    >
                        <MdAdd className={cx('icon')} />
                        <span>Thêm Tour mới</span>
                    </Button>
                )}
                {showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-add')}
                        onClick={() => handleGetAllActiveTour()}
                    >
                        <TbArrowBackUp className={cx('icon')} />
                        <span>TOUR ĐANG HOẠT ĐỘNG</span>
                    </Button>
                )}
                {!showStopedTour && (
                    <Button
                        variant="contained"
                        className={cx('button-stopedTour')}
                        onClick={() => dispatch(handleOpenStopedTour())}
                    >
                        <span>TOUR NGƯNG HOẠT ĐỘNG</span>
                    </Button>
                )}

                {!showStopedTour && (
                    <table className={cx('tour_table')}>
                        <thead>
                            <tr>
                                <th className={cx('left-col')}></th>
                                <th className={cx('center-col')}>Mã tour</th>
                                <th className={cx('left-col')}>Tên tour</th>
                                <th className={cx('center-col')}>Thời gian</th>
                                <th className={cx('center-col')}>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            {tourList.map((data, index) => (
                                <TourItem key={index} data={data}></TourItem>
                            ))}
                        </tbody>
                    </table>
                )}

                {showStopedTour && (
                    <table className={cx('tour_table stoped-tours')}>
                        <thead>
                            <tr>
                                <th className={cx('left-col')}></th>
                                <th className={cx('center-col')}>Mã tour</th>
                                <th className={cx('left-col')}>Tên tour</th>
                                <th className={cx('center-col')}>Thời gian</th>
                                <th className={cx('center-col')}>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            {stopedTourList.map((data, index) => (
                                <TourItem
                                    setTourList={setTourList}
                                    setStopedTourList={setStopedTourList}
                                    key={index}
                                    data={data}
                                ></TourItem>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {openAddDialog && <AddDialog setTourList={setTourList}></AddDialog>}
            {openUpdateDialog && (
                <UpdateDialog setTourList={setTourList}></UpdateDialog>
            )}
            {openStopDialog && (
                <StopDialog
                    setTourList={setTourList}
                    setStopedTourList={setStopedTourList}
                ></StopDialog>
            )}
            {openViewDialog && <ViewDialog></ViewDialog>}
        </div>
    );
}

export default Tour;
