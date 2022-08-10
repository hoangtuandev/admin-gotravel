import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './Tour.scss';
import {
    isOpenStopDialog,
    itemSelected,
    handleCloseStopDialog,
} from './TourSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

export default function StopDialog(props) {
    const { setTourList, setStopedTourList } = props;
    const dispatch = useDispatch();
    const tourSelected = useSelector(itemSelected);
    const openDialog = useSelector(isOpenStopDialog);

    const handleSubmitStopTour = () => {
        api.updateStopTour({ _id: tourSelected._id }).then((res) => {
            api.getAllActiveTour().then((res) => {
                setTourList(res.data);
                dispatch(handleCloseStopDialog());
            });

            api.getAllStopedTour().then((res) => {
                setStopedTourList(res.data);
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDialog}
                onClose={() => dispatch(handleCloseStopDialog())}
            >
                <DialogTitle className="dialog-title">
                    Xác nhận ngưng hoạt động tour
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr className={cx('id-item')}>
                                <td rowSpan={3} className={cx('content')}>
                                    <img
                                        src={tourSelected.t_hinhanh[0]}
                                        alt=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Mã tour</td>
                                <td className={cx('content')}>
                                    {tourSelected.t_ma}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên tour</td>
                                <td className={cx('content')}>
                                    {tourSelected.t_ten}
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
                        onClick={() => handleSubmitStopTour()}
                    >
                        XÁC NHẬN
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        className={cx('button-groups button-close')}
                        onClick={() => dispatch(handleCloseStopDialog())}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
