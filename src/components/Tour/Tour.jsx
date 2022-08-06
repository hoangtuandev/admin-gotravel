import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import Button from '@mui/material/Button';

import styles from './Tour.scss';
import * as api from '../../api';
import TourItem from './TourItem';

import {
    handleOpenAddDialog,
    isOpenAddDialog,
    isOpenUpdateDialog,
} from './TourSlice';
import AddDialog from './AddDialog';
import UpdateDialog from './UpdateDialog';

const cx = classNames.bind(styles);

function Tour() {
    const dispatch = useDispatch();
    const openAddDialog = useSelector(isOpenAddDialog);
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const [tourList, setTourList] = useState([]);

    useEffect(() => {
        api.getAllTour().then((res) => {
            setTourList(res.data);
        });
    }, []);

    return (
        <div className={cx('tour')}>
            <div>
                <Button
                    variant="contained"
                    className={cx('button-add')}
                    onClick={() => dispatch(handleOpenAddDialog())}
                >
                    <MdAdd className={cx('icon')} />
                    <span>Thêm Tour mới</span>
                </Button>
                {openAddDialog && (
                    <AddDialog setTourList={setTourList}></AddDialog>
                )}
                {openUpdateDialog && (
                    <UpdateDialog setTourList={setTourList}></UpdateDialog>
                )}

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
            </div>
        </div>
    );
}

export default Tour;
