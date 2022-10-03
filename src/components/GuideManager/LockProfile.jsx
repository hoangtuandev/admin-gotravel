import { React, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './GuideManager.scss';
import * as api from '../../api';
import {
    handleToggleLockProfile,
    lockProfile,
    profileSelected,
} from './GuideManagerSlice';

const cx = classNames.bind(styles);

export default function LockProfile(props) {
    const dispatch = useDispatch();
    const { setAccountGuideList, setLockedAccountGuideList } = props;
    const profile = useSelector(profileSelected);
    const openDialog = useSelector(lockProfile);

    const [isLoading, setIsLoading] = useState(false);

    const submitLockProfile = () => {
        setIsLoading(true);
        api.lockProfile({ _id: profile._id }).then((res) => {
            api.getActiveGuideAccount().then((res) => {
                setAccountGuideList(res.data);
            });

            api.getLockedGuideAccount().then((res) => {
                setLockedAccountGuideList(res.data);
                setIsLoading(false);
                dispatch(handleToggleLockProfile(false));
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('lock-profile')}
                open={openDialog}
                onClose={() => dispatch(handleToggleLockProfile(false))}
            >
                <DialogTitle className={cx('dialog-title')}>
                    Khóa hồ sơ hướng dẫn viên
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={profile.tkhdv_anhdaidien}
                                        sx={{ width: 55, height: 55 }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Tài khoản</td>
                                <td className={cx('content')}>
                                    {profile.tkhdv_tendangnhap}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Hướng dẫn viên</td>
                                <td className={cx('content')}>
                                    {profile.tkhdv_huongdanvien.hdv_hoten}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions className={cx('dialog-actions')}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(handleToggleLockProfile(false))}
                    >
                        THOÁT
                    </Button>
                    {!isLoading && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => submitLockProfile()}
                        >
                            KHÓA
                        </Button>
                    )}
                    {isLoading && (
                        <Button
                            disabled
                            variant="contained"
                            color="primary"
                            onClick={() => submitLockProfile()}
                        >
                            KHÓA
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}
