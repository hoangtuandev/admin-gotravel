import { Fragment, React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import ButtonGroup from '@mui/material/ButtonGroup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import styles from './AdminManager.scss';

import * as api from '../../api';
import {
    adminSelected,
    handleSelectProfileAdmin,
    handleToggleUpdateProfile,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);

function ProfileAdmin(props) {
    const { account } = props;
    const dispatch = useDispatch();
    // const profile = useSelector(adminSelected);

    const [adminProfile, setAdminProfile] = useState(null);

    useEffect(() => {
        api.getAdminById({ idAdmin: account.tkqtv_nhanvien.qtv_ma }).then(
            (res) => {
                setAdminProfile(res.data[0]);
            }
        );
    }, []);

    // console.log('ACCOUNT: ', account);
    // console.log('PROFILE: ', adminProfile);

    const handleUpdateProfile = () => {
        dispatch(handleSelectProfileAdmin({ account, adminProfile }));
        dispatch(handleToggleUpdateProfile(true));
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
                        {adminProfile.qtv_hoten}
                    </td>
                    <td className={cx('content-center')}>
                        {adminProfile.qtv_gioitinh}
                    </td>
                    <td className={cx('content-center power-admin')}>
                        {adminProfile.qtv_chucvu === 'Quản lý' && (
                            <p className={cx('manager-level')}>
                                {adminProfile.qtv_chucvu}
                            </p>
                        )}
                        {adminProfile.qtv_chucvu === 'Nhân viên' && (
                            <p className={cx('staff-level')}>
                                {adminProfile.qtv_chucvu}
                            </p>
                        )}
                    </td>
                    <td>
                        <ButtonGroup
                            className={cx('action-buttons')}
                            variant="contained"
                        >
                            <Button color="error">
                                <VpnKeyIcon className={cx('icon')} />
                            </Button>
                            <Button>
                                <VisibilityIcon className={cx('icon')} />
                            </Button>
                            <Button
                                color="success"
                                onClick={() => handleUpdateProfile()}
                            >
                                <EditIcon className={cx('icon')} />
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )}
        </Fragment>
    );
}

export default ProfileAdmin;
