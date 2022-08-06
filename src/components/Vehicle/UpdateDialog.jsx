import { React, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './Vehicle.scss';
import * as api from '../../api';
import {
    handleCloseUpdateDialog,
    isOpenUpdateDialog,
    itemSelected,
} from './VehicleSlice';

const cx = classNames.bind(styles);

function UpdateDialog(props) {
    const { setVehicleList } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenUpdateDialog);
    const vehicle = useSelector(itemSelected);

    const [nameUpdate, setNameUpdate] = useState(vehicle.pt_ten);

    const handleSubmitUpdate = () => {
        api.updateVehicle({
            _id: vehicle._id,
            pt_ma: vehicle.pt_ma,
            pt_ten: nameUpdate,
        }).then((res) => {
            api.getAllVehicle().then((res) => {
                setVehicleList(res.data);
                dispatch(handleCloseUpdateDialog());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDialog}
                onClose={() => dispatch(handleCloseUpdateDialog())}
            >
                <DialogTitle className="dialog-title">
                    Cập nhật Loại hình tour
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr className={cx('id-item')}>
                                <td className={cx('title')}>ID</td>
                                <td className={cx('content')}>{vehicle._id}</td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Mã phương tiện</td>
                                <td className={cx('content')}>
                                    {vehicle.pt_ma}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên phương tiện</td>
                                <td className={cx('content')}>
                                    <input
                                        type="text"
                                        value={nameUpdate}
                                        onChange={(e) =>
                                            setNameUpdate(e.target.value)
                                        }
                                    />
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
                        onClick={() => handleSubmitUpdate()}
                    >
                        LƯU
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseUpdateDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(UpdateDialog);
