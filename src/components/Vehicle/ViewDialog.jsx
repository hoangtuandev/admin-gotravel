import { React, memo } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './Vehicle.scss';
import {
    isOpenViewDialog,
    itemSelected,
    handleCloseViewDialog,
} from './VehicleSlice';

const cx = classNames.bind(styles);

function ViewDialog(props) {
    const vehicle = useSelector(itemSelected);
    const openViewVehicle = useSelector(isOpenViewDialog);
    const dispatch = useDispatch();

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openViewVehicle}
                onClose={() => dispatch(handleCloseViewDialog())}
            >
                <DialogTitle className="dialog-title">
                    Chi tiết Phương tiện
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
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseViewDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(ViewDialog);
