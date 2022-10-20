import { Fragment, React, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import ButtonGroup from '@mui/material/ButtonGroup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import EditIcon from '@mui/icons-material/Edit';
import styles from './AdminManager.scss';

import * as api from '../../api';
import {
    handleSelectProfileAdmin,
    handleToggleActiveProfile,
    handleToggleLockProfile,
    handleTogglePositionAdmin,
    handleToggleUpdateProfile,
    showAccountType,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function ProfileAdmin(props) {
    const { account } = props;
    const dispatch = useDispatch();
    const typeAccounts = useSelector(showAccountType);

    const [adminLogined, setAdminLogined] = useState(null);
    const [adminProfile, setAdminProfile] = useState(null);

    useEffect(() => {
        api.getAccountAdminByUsername({
            username: cookies.get('useradmin'),
        }).then((res) => {
            setAdminLogined(res.data[0]);
        });
    }, []);

    useEffect(() => {
        api.getAdminById({ idAdmin: account.tkqtv_nhanvien.qtv_ma }).then(
            (res) => {
                setAdminProfile(res.data[0]);
            }
        );
    }, [account]);

    const handleLockProfile = () => {
        dispatch(handleSelectProfileAdmin({ account, adminProfile }));
        dispatch(handleToggleLockProfile(true));
    };

    const handleActiveProfile = () => {
        dispatch(handleSelectProfileAdmin({ account, adminProfile }));
        dispatch(handleToggleActiveProfile(true));
    };

    const handleUpdateProfile = () => {
        dispatch(handleSelectProfileAdmin({ account, adminProfile }));
        dispatch(handleToggleUpdateProfile(true));
    };

    const handleChangePositionAdmin = () => {
        dispatch(handleSelectProfileAdmin({ account, adminProfile }));
        dispatch(handleTogglePositionAdmin(true));
    };

    return (
        <Fragment>
            {adminProfile && (
                <tr>
                    <td>
                        <img
                            className={cx('avatar')}
                            src={account.tkqtv_anhdaidien}
                            alt=""
                        />
                    </td>
                    <td className={cx('content-center')}>
                        {account.tkqtv_tendangnhap}
                    </td>
                    <td className={cx('admin-name')}>
                        {account.tkqtv_nhanvien.qtv_hoten}
                    </td>
                    <td>{account.tkqtv_nhanvien.qtv_email}</td>
                    <td className={cx('content-center power-admin')}>
                        {adminProfile.qtv_chucvu === 'Quản lý' && (
                            <p className={cx('manager-level')}>
                                <span>{account.tkqtv_nhanvien.qtv_chucvu}</span>
                                {adminLogined &&
                                    adminLogined.tkqtv_nhanvien.qtv_chucvu ===
                                        'Nhân sự' && (
                                        <WifiProtectedSetupIcon
                                            className={cx('promotion-icon')}
                                            onClick={() =>
                                                handleChangePositionAdmin()
                                            }
                                        />
                                    )}
                            </p>
                        )}
                        {adminProfile.qtv_chucvu === 'Nhân viên' && (
                            <p className={cx('staff-level')}>
                                <span>{account.tkqtv_nhanvien.qtv_chucvu}</span>
                                {adminLogined &&
                                    (adminLogined.tkqtv_nhanvien.qtv_chucvu ===
                                        'Nhân sự' ||
                                        adminLogined.tkqtv_nhanvien
                                            .qtv_chucvu === 'Quản lý') && (
                                        <WifiProtectedSetupIcon
                                            className={cx('promotion-icon')}
                                            onClick={() =>
                                                handleChangePositionAdmin()
                                            }
                                        />
                                    )}
                            </p>
                        )}
                        {adminProfile.qtv_chucvu === 'Nhân sự' && (
                            <p className={cx('humanresources-level')}>
                                <span>{account.tkqtv_nhanvien.qtv_chucvu}</span>
                                {adminLogined &&
                                    adminLogined.tkqtv_nhanvien.qtv_chucvu ===
                                        'Nhân sự' && (
                                        <WifiProtectedSetupIcon
                                            className={cx('promotion-icon')}
                                            onClick={() =>
                                                handleChangePositionAdmin()
                                            }
                                        />
                                    )}
                            </p>
                        )}
                    </td>

                    <td>
                        <ButtonGroup
                            className={cx('action-buttons')}
                            variant="contained"
                        >
                            {typeAccounts === 'actived' && (
                                <Button
                                    color="error"
                                    onClick={() => handleLockProfile()}
                                >
                                    <VpnKeyIcon className={cx('icon')} />
                                </Button>
                            )}
                            {typeAccounts === 'locked' && (
                                <Button
                                    color="error"
                                    onClick={() => handleActiveProfile()}
                                >
                                    <VpnKeyOffIcon className={cx('icon')} />
                                </Button>
                            )}
                            <Button>
                                <VisibilityIcon className={cx('icon')} />
                            </Button>
                            {typeAccounts === 'actived' && (
                                <Button
                                    color="success"
                                    onClick={() => handleUpdateProfile()}
                                >
                                    <EditIcon className={cx('icon')} />
                                </Button>
                            )}
                            {typeAccounts === 'locked' && (
                                <Button
                                    disabled
                                    color="success"
                                    onClick={() => handleUpdateProfile()}
                                >
                                    <EditIcon className={cx('icon')} />
                                </Button>
                            )}
                        </ButtonGroup>
                    </td>
                </tr>
            )}
        </Fragment>
    );
}

export default ProfileAdmin;
