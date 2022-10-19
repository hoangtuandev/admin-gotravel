import * as React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './AdminManager.scss';
import * as api from '../../api';
import {
    adminSelected,
    handleToggleLockProfile,
    lockProfile,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);

export default function LockProfile(props) {
    const { setAccountList, setLockedAccountList } = props;
    const dispatch = useDispatch();
    const profile = useSelector(adminSelected);
    const openDialog = useSelector(lockProfile);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmitLockAdminAccount = () => {
        setIsLoading(true);
        api.lockAdminAccount({
            username: profile.account.tkqtv_tendangnhap,
        }).then((res) => {
            api.getActivedAccountAdmin().then((res) => {
                setAccountList(res.data);
                api.getLockedAccountAdmin().then((res) => {
                    setLockedAccountList(res.data);
                    setIsLoading(false);
                    dispatch(handleToggleLockProfile(false));
                });
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('popup')}
                open={openDialog}
                onClose={() => dispatch(handleToggleLockProfile(false))}
            >
                <DialogTitle className={cx('popup-title')}>
                    Khóa tài khoản quản trị viên
                </DialogTitle>
                <div className={cx('popup-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <img
                                        src={profile.account.tkqtv_anhdaidien}
                                        alt=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Tài khoản</td>
                                <td className={cx('content')}>
                                    {profile.account.tkqtv_tendangnhap}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Quản trị viên</td>
                                <td className={cx('content')}>
                                    {profile.account.tkqtv_nhanvien.qtv_hoten}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Bộ phận</td>
                                <td className={cx('content')}>
                                    {profile.account.tkqtv_nhanvien.qtv_chucvu}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <DialogActions className={cx('popup-actions')}>
                    {!isLoading && (
                        <Button
                            variant="contained"
                            onClick={() => handleSubmitLockAdminAccount()}
                        >
                            KHÓA
                        </Button>
                    )}
                    {isLoading && (
                        <Button
                            disabled
                            variant="contained"
                            onClick={() => handleSubmitLockAdminAccount()}
                        >
                            KHÓA
                        </Button>
                    )}
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(handleToggleLockProfile(false))}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
