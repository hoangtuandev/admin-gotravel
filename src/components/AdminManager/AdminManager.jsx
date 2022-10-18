import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import ButtonGroup from '@mui/material/ButtonGroup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import styles from './AdminManager.scss';
import AddProfile from './AddProfile';
import * as api from '../../api';
import {
    addAdminManager,
    handleToggleAddAdminManager,
    updateProfile,
} from './AdminManagerSlice';
import ProfileAdmin from './ProfileAdmin';
import UpdateProfile from './UpdateProfile';

const cx = classNames.bind(styles);

function AdminManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addAdminManager);
    const openUpdate = useSelector(updateProfile);

    const [accountList, setAccountList] = useState([]);

    useEffect(() => {
        api.getActivedAccountAdmin().then((res) => {
            setAccountList(res.data);
        });
    }, []);

    return (
        <div className={cx('admin-manager')}>
            <div className={cx('btn-group')}>
                <Button
                    variant="contained"
                    className="button-add-advertisement"
                    onClick={() => dispatch(handleToggleAddAdminManager(true))}
                >
                    <AddIcon className={cx('icon')} />
                    <span>THÊM TÀI KHOẢN</span>
                </Button>

                <Button
                    variant="contained"
                    className="button-add-advertisement"
                >
                    <ReplyAllIcon className={cx('icon')} />
                    <span>TÀI KHOẢN HOẠT ĐỘNG</span>
                </Button>
                <Button
                    variant="contained"
                    className="button-remove-advertisement"
                >
                    <VpnKeyIcon className={cx('icon')} />
                    <span>TÀI KHOẢN BỊ KHÓA</span>
                </Button>
            </div>
            <div className={cx('account-list')}>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td className={cx('content-center')}>Tài khoản</td>
                            <td>Nhân viên</td>
                            <td className={cx('content-center')}>Giới tính</td>
                            <td className={cx('content-center')}>Chức vụ</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {accountList.map((account, index) => (
                            <ProfileAdmin
                                key={index}
                                account={account}
                            ></ProfileAdmin>
                        ))}
                    </tbody>
                </table>
            </div>
            {openAdd && <AddProfile></AddProfile>}
            {openUpdate && <UpdateProfile></UpdateProfile>}
        </div>
    );
}

export default AdminManager;
