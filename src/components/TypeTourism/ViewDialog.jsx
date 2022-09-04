import { React, memo } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './TypeTourism.scss';
import {
    isOpenViewDialog,
    handleCloseViewDialog,
    itemSelected,
} from './TypeTourismSlice';

const cx = classNames.bind(styles);

function ViewDialog(props) {
    const dispatch = useDispatch();
    const openViewDialog = useSelector(isOpenViewDialog);
    const item = useSelector(itemSelected);

    return (
        <div>
            <Dialog
                className={cx('dialog')}
                open={openViewDialog}
                onClose={() => dispatch(handleCloseViewDialog())}
            >
                <DialogTitle className="dialog-title">
                    Chi tiết Loại hình tour
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
                            <tr>
                                <td className={cx('title')}>Mô tả</td>
                                <td className={cx('content')}>
                                    <p> {item.lht_mota}</p>
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
