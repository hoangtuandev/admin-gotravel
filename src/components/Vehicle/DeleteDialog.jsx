import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './Vehicle.scss';
import {
    isOpenDeleteDialog,
    itemSelected,
    handleCloseDeleteDialog,
} from './VehicleSlice';

import * as api from '../../api';

const cx = classNames.bind(styles);

export default function DeleteDialog(props) {
    const { setVehicleList } = props;

    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenDeleteDialog);
    const vehicle = useSelector(itemSelected);

    const handleSubmitDelete = () => {
        api.deleteVehicle(vehicle).then((res) => {
            api.getAllVehicle().then((res) => {
                setVehicleList(res.data);
                dispatch(handleCloseDeleteDialog());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDialog}
                onClose={() => dispatch(handleCloseDeleteDialog())}
            >
                <DialogTitle className="dialog-title">
                    Xác nhận xóa Phương tiện
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr className={cx('id-item')}>
                                <td className={cx('title')}>Mã phương tiện</td>
                                <td className={cx('content')}>
                                    {vehicle.pt_ma}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên phương tiện</td>
                                <td className={cx('content')}>
                                    {vehicle.pt_ten}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        className={cx('button-groups button-submit')}
                        onClick={() => handleSubmitDelete()}
                    >
                        XÓA
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseDeleteDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
