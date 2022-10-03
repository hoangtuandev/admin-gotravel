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
    activeProfile,
    handleToggleActiveProfile,
    profileSelected,
} from './GuideManagerSlice';

const cx = classNames.bind(styles);

export default function ActiveProfile(props) {
    const dispatch = useDispatch();
    const { setAccountGuideList, setLockedAccountGuideList } = props;
    const profile = useSelector(profileSelected);
    const openDialog = useSelector(activeProfile);

    const [isLoading, setIsLoading] = useState(false);

    const submitActiveProfile = () => {
        setIsLoading(true);
        api.activeProfile({ _id: profile._id }).then((res) => {
            api.getActiveGuideAccount().then((res) => {
                setAccountGuideList(res.data);
            });

            api.getLockedGuideAccount().then((res) => {
                setLockedAccountGuideList(res.data);
                setIsLoading(false);
                dispatch(handleToggleActiveProfile(false));
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('lock-profile')}
                open={openDialog}
                onClose={() => dispatch(handleToggleActiveProfile(false))}
            >
                <DialogTitle className={cx('dialog-title')}>
                    Mở khóa hồ sơ hướng dẫn viên
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
                        onClick={() =>
                            dispatch(handleToggleActiveProfile(false))
                        }
                    >
                        THOÁT
                    </Button>
                    {!isLoading && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => submitActiveProfile()}
                        >
                            MỞ
                        </Button>
                    )}
                    {isLoading && (
                        <Button disabled variant="contained" color="primary">
                            MỞ
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}
