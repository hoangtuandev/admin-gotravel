import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import Button from '@mui/material/Button';

import styles from './Vehicle.scss';
import VehicleItem from './VehicleItem';
import * as api from '../../api';
import { useEffect } from 'react';
import { useState } from 'react';
import ViewDialog from './ViewDialog';
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import {
    handleOpenAddDialog,
    isOpenAddDialog,
    isOpenDeleteDialog,
    isOpenUpdateDialog,
    isOpenViewDialog,
} from './VehicleSlice';
import AddDialog from './AddDialog';

const cx = classNames.bind(styles);

function Vehicle() {
    const dispatch = useDispatch();
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const openViewDialog = useSelector(isOpenViewDialog);
    const openDeleteDialog = useSelector(isOpenDeleteDialog);
    const openAddDialog = useSelector(isOpenAddDialog);

    const [vehicleList, setVehicleList] = useState([]);

    useEffect(() => {
        api.getAllVehicle().then((res) => {
            setVehicleList(res.data);
        });
    }, []);

    const handleClickAdd = () => {
        dispatch(handleOpenAddDialog());
    };

    return (
        <div className={cx('vehicle')}>
            {openViewDialog && <ViewDialog></ViewDialog>}

            {openDeleteDialog && (
                <DeleteDialog setVehicleList={setVehicleList}></DeleteDialog>
            )}

            {openUpdateDialog && (
                <UpdateDialog setVehicleList={setVehicleList}></UpdateDialog>
            )}

            {openAddDialog && (
                <AddDialog setVehicleList={setVehicleList}></AddDialog>
            )}

            <div>
                <Button
                    variant="contained"
                    className={cx('button-add')}
                    onClick={() => handleClickAdd()}
                >
                    <MdAdd className={cx('icon')} />
                    <span>Thêm Phương tiện</span>
                </Button>
                <table className={cx('vehicle_table')}>
                    <thead>
                        <tr>
                            <th className={cx('id-vehicle')}>Mã phương tiện</th>
                            <th className={cx('name-vehicle')}>
                                Tên phương tiện
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleList.map((data, index) => (
                            <VehicleItem key={index} item={data}></VehicleItem>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vehicle;
