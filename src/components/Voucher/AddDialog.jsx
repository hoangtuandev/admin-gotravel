import { React, memo, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './Voucher.scss';

import * as api from '../../api';
import { handleCloseAddDialog, isOpenAddDialog } from './VoucherSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AddDialog(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenAddDialog);

    return (
        <div>
            <Dialog
                className={cx('add-dialog')}
                fullScreen
                TransitionComponent={Transition}
                open={openDialog}
            >
                <AppBar
                    sx={{ position: 'relative' }}
                    className={cx('add-dialog-appbar')}
                >
                    <Toolbar className={cx('add-dialog-toolbar')}>
                        <IconButton
                            className={cx('add-dialog-iconButton')}
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={() => dispatch(handleCloseAddDialog())}
                        >
                            <CloseIcon className={cx('add-dialog-icon')} />
                        </IconButton>
                        <Typography
                            className={cx('add-dialog-typography')}
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            THÊM PHIẾU GIẢM GIÁ MỚI
                        </Typography>
                        <Button
                            className={cx('add-dialog-btn-save')}
                            onClick={() => dispatch(handleCloseAddDialog())}
                        >
                            THOÁT
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={cx('add-form')}>
                    <div className={cx('add-form-main')}>
                        <ul>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                />
                                <label className={cx('label-field')}>
                                    Mã phiếu giảm giá
                                </label>
                            </li>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                />
                                <label className={cx('label-field')}>
                                    Giá trị
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li className={cx('fields-item')}>
                                <input
                                    className={cx('text-field')}
                                    type="text"
                                    placeholder=""
                                />
                                <label className={cx('label-field')}>
                                    Điều kiện
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(AddDialog);
