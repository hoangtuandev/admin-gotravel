import { React, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './TypeTourism.scss';
import {
    isOpenUpdateDialog,
    handleCloseUpdateDialog,
    itemSelected,
    isOpenBackdrop,
} from './TypeTourismSlice';

import { handleCloseBackdrop, handleOpenBackdrop } from '../Tour/TourSlice';

import * as api from '../../api';

const cx = classNames.bind(styles);

function UpdateDialog(props) {
    const { settypeTourismList } = props;
    const dispatch = useDispatch();
    const openUpdateDialog = useSelector(isOpenUpdateDialog);
    const openBackdrop = useSelector(isOpenBackdrop);
    const item = useSelector(itemSelected);

    const [nameUpdate, setNameUpdate] = useState(item.lht_ten);
    const [describleUpdate, setDescribleUpdate] = useState(item.lht_mota);

    const handleSubmitUpdate = () => {
        dispatch(handleOpenBackdrop());
        api.updateTypeTourism({
            id: item._id,
            lht_ma: item.lht_ma,
            lht_ten: nameUpdate,
            lht_mota: describleUpdate,
        }).then((res) => {
            api.getAllTypeTourism().then((res) => {
                settypeTourismList(res.data);
                dispatch(handleCloseBackdrop());
                dispatch(handleCloseUpdateDialog());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openUpdateDialog}
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
                                <td className={cx('title')}>Mã loại hình</td>
                                <td className={cx('content')}>{item.lht_ma}</td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Tên loại hình</td>
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
                            <tr>
                                <td className={cx('title')}>Mô tả</td>
                                <td className={cx('content')}>
                                    <textarea
                                        rows="7"
                                        value={describleUpdate}
                                        onChange={(e) =>
                                            setDescribleUpdate(e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    {openBackdrop && (
                        <Button
                            variant="contained"
                            disabled
                            className={cx('button-groups button-submit')}
                            onClick={() => handleSubmitUpdate()}
                        >
                            <CircularProgress
                                size={18}
                                className={cx('circularProgress')}
                            />
                            &nbsp;&nbsp; ĐANG XỬ LÝ
                        </Button>
                    )}
                    {!openBackdrop && (
                        <Button
                            variant="contained"
                            color="primary"
                            className={cx('button-groups button-submit')}
                            onClick={() => handleSubmitUpdate()}
                        >
                            LƯU
                        </Button>
                    )}
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
