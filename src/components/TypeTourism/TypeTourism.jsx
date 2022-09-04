import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import Button from '@mui/material/Button';
import {
    handleOpenAddDialog,
    isOpenAddDialog,
    isOpenDeleteDialog,
    isOpenUpdateDialog,
    isOpenViewDialog,
} from './TypeTourismSlice';

import styles from './TypeTourism.scss';
import * as api from '../../api';
import { useState } from 'react';
import TypeItem from './TypeItem';
import ViewDialog from './ViewDialog';
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import AddDialog from './AddDialog';

const cx = classNames.bind(styles);

function TypeTourism() {
    const dispatch = useDispatch();
    const openViewDialog = useSelector(isOpenViewDialog);
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const openDeleteDialog = useSelector(isOpenDeleteDialog);
    const openAddDialog = useSelector(isOpenAddDialog);

    const [typeTourismList, settypeTourismList] = useState([]);

    useEffect(() => {
        api.getAllTypeTourism().then((res) => {
            settypeTourismList(res.data);
        });
    }, []);

    const handleClickAdd = () => {
        dispatch(handleOpenAddDialog());
    };

    return (
        <div className={cx('type-tourism')}>
            {openViewDialog && <ViewDialog></ViewDialog>}
            {openDeleteDialog && (
                <DeleteDialog
                    settypeTourismList={settypeTourismList}
                ></DeleteDialog>
            )}
            {openUpdateDialog && (
                <UpdateDialog
                    settypeTourismList={settypeTourismList}
                ></UpdateDialog>
            )}
            {openAddDialog && (
                <AddDialog settypeTourismList={settypeTourismList}></AddDialog>
            )}

            <div>
                <Button
                    variant="contained"
                    className={cx('button-add')}
                    onClick={() => handleClickAdd()}
                >
                    <MdAdd className={cx('icon')} />
                    <span>Thêm Loại hình tour</span>
                </Button>

                <table className={cx('typeTourism_table')}>
                    <thead>
                        <tr>
                            <th className={cx('id-type')}>Mã loại hình</th>
                            <th className={cx('name-type')}>Tên loại hình</th>
                            {/* <th className={cx('name-type')}>Mô tả</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        {typeTourismList.map((data, index) => (
                            <TypeItem data={data} key={index}></TypeItem>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TypeTourism;
