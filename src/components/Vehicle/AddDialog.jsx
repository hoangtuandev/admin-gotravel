import { React, memo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './Vehicle.scss';

import * as api from '../../api';
import { handleCloseAddDialog, isOpenAddDialog } from './VehicleSlice';
import axios from 'axios';

const cx = classNames.bind(styles);

function AddDialog(props) {
    const { setVehicleList } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenAddDialog);

    const [idVehicle, setIdVehicle] = useState();
    const [nameVehicle, setNameVehicle] = useState('');

    useEffect(() => {
        setIdVehicle(setRandomID());
    }, []);

    const setRandomID = () => {
        const current = new Date().getTime();
        const randomID = `PT${current}`;
        return randomID;
    };

    const handleSubmitAdd = () => {
        api.createVehicle({
            pt_ma: idVehicle,
            pt_ten: nameVehicle,
        }).then((res) => {
            api.getAllVehicle().then((res) => {
                setVehicleList(res.data);
                dispatch(handleCloseAddDialog());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDialog}
                onClose={() => dispatch(handleCloseAddDialog())}
            >
                <DialogTitle className="dialog-title">
                    Thêm mới Phương tiện
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className={cx('title')}>Mã phương tiện</td>
                                <td className={cx('content')}>{idVehicle}</td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên phương tiện</td>
                                <td className={cx('content')}>
                                    <input
                                        type="text"
                                        value={nameVehicle}
                                        onChange={(e) =>
                                            setNameVehicle(e.target.value)
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
                        onClick={() => handleSubmitAdd()}
                    >
                        LƯU
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseAddDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(AddDialog);
