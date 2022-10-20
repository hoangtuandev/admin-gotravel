import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './AdminManager.scss';
import * as api from '../../api';
import {
    adminSelected,
    handleTogglePositionAdmin,
    positionAdmin,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);

export default function PositionAdmin(props) {
    const { setAccountList } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(positionAdmin);
    const profile = useSelector(adminSelected);

    const [positionChanged, setPositionChanged] = useState('');

    const positionSelectOptions = [
        { value: 'Quản lý', label: 'Quản lý' },
        { value: 'Nhân sự', label: 'Nhân sự' },
        { value: 'Nhân viên', label: 'Nhân viên' },
    ].filter((option) => {
        return option.value !== profile.account.tkqtv_nhanvien.qtv_chucvu;
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const handleChangePosition = (option) => {
        setPositionChanged(option.value);
    };

    const handleSubmitChangePositionAdmin = () => {
        setIsLoading(true);
        api.changePositionAdmin({
            qtv_ma: profile.account.tkqtv_nhanvien.qtv_ma,
            qtv_chucvu: positionChanged,
        }).then((res) => {
            api.updatePositionAdmin({
                tkqtv_tendangnhap: profile.account.tkqtv_tendangnhap,
                tkqtv_nhanvien: res.data[0],
            }).then((res) => {
                api.getActivedAccountAdmin().then((res) => {
                    setAccountList(res.data);
                    setIsLoading(false);
                    dispatch(handleTogglePositionAdmin(false));
                });
            });
        });
    };

    return (
        <div>
            <Dialog
                className={cx('popup-position')}
                open={openDialog}
                onClose={() => dispatch(handleTogglePositionAdmin(false))}
            >
                <DialogTitle className={cx('popup-position-title')}>
                    Thay đổi bộ phận quản trị viên
                </DialogTitle>
                <div className={cx('popup-position-content')}>
                    <div className={cx('infor-table')}>
                        <img
                            className={cx('avatar')}
                            src={profile.account.tkqtv_anhdaidien}
                            alt=""
                        />
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={cx('label')}>Tài khoản</td>
                                    <td className={cx('content')}>
                                        {profile.account.tkqtv_tendangnhap}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('label')}>
                                        Quản trị viên
                                    </td>
                                    <td className={cx('content')}>
                                        {
                                            profile.account.tkqtv_nhanvien
                                                .qtv_hoten
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('change-position')}>
                        <Select
                            isDisabled={true}
                            placeholder={
                                profile.account.tkqtv_nhanvien.qtv_chucvu
                            }
                            className={cx('select-field')}
                        />
                        <div>
                            <DoubleArrowIcon className={cx('change-icon')} />
                        </div>
                        <Select
                            placeholder="Bộ phận mới"
                            className={cx('select-field new-position')}
                            options={positionSelectOptions}
                            onChange={handleChangePosition}
                        />
                    </div>
                </div>
                <DialogActions className={cx('popup-actions')}>
                    {!isLoading && (
                        <Button
                            variant="contained"
                            onClick={() => handleSubmitChangePositionAdmin()}
                        >
                            LƯU
                        </Button>
                    )}
                    {isLoading && (
                        <Button disabled variant="contained">
                            LƯU
                        </Button>
                    )}
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() =>
                            dispatch(handleTogglePositionAdmin(false))
                        }
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
