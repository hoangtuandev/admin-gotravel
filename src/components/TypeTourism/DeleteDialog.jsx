import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './TypeTourism.scss';
import {
    itemSelected,
    isOpenDeleteDialog,
    handleCloseDeleteDialog,
} from './TypeTourismSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

export default function DeleteDialog(props) {
    const { settypeTourismList } = props;
    const dispatch = useDispatch();
    const openDeleteDialog = useSelector(isOpenDeleteDialog);
    const item = useSelector(itemSelected);

    const handleSubmitDelete = () => {
        api.deleteTypeTourism(item).then((res) => {
            api.getAllTypeTourism().then((res) => {
                settypeTourismList(res.data);
                dispatch(handleCloseDeleteDialog());
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openDeleteDialog}
                onClose={() => dispatch(handleCloseDeleteDialog())}
            >
                <DialogTitle className="dialog-title">
                    Xác nhận xóa Loại hình tour
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
                                    {item.lht_ten}
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
