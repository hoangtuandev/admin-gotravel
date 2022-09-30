import { React } from 'react';
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
import AddAdminManager from './AddAdminManager';
import {
    addAdminManager,
    handleToggleAddAdminManager,
} from './AdminManagerSlice';

const cx = classNames.bind(styles);

function AdminManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addAdminManager);
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
                        <tr>
                            <td>
                                <PersonIcon className={cx('user-icon')} />
                            </td>
                            <td className={cx('content-center')}>
                                PHTUAN00235
                            </td>
                            <td className={cx('admin-name')}>
                                Phạm Hoàng Tuấn
                            </td>
                            <td className={cx('content-center')}>Nam</td>
                            <td className={cx('content-center')}>
                                <span className={cx('manager-level')}>
                                    Quản lý
                                </span>
                            </td>
                            <td>
                                <ButtonGroup variant="contained">
                                    <Button>
                                        <VisibilityIcon
                                            className={cx('icon')}
                                        />
                                    </Button>
                                    <Button color="success">
                                        <EditIcon className={cx('icon')} />
                                    </Button>
                                    <Button color="error">
                                        <VpnKeyIcon className={cx('icon')} />
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {openAdd && <AddAdminManager></AddAdminManager>}
        </div>
    );
}

export default AdminManager;
