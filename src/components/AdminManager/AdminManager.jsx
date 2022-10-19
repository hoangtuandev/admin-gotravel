import { React, useEffect, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import styles from './AdminManager.scss';
import AddProfile from './AddProfile';
import * as api from '../../api';
import {
    activeProfile,
    addAdminManager,
    handleChangeTypeAccounts,
    handleToggleAddAdminManager,
    lockProfile,
    showAccountType,
    updateProfile,
} from './AdminManagerSlice';
import ProfileAdmin from './ProfileAdmin';
import UpdateProfile from './UpdateProfile';
import LockProfile from './LockProfile';
import ActiveProfile from './ActiveProfile';

const cx = classNames.bind(styles);

const powerSelectOptions = [
    { value: 'Quản lý', label: 'Quản lý' },
    { value: 'Nhân sự', label: 'Nhân sự' },
    { value: 'Nhân viên', label: 'Nhân viên' },
];

function AdminManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addAdminManager);
    const openUpdate = useSelector(updateProfile);
    const openLock = useSelector(lockProfile);
    const openActive = useSelector(activeProfile);
    const typeAccounts = useSelector(showAccountType);
    const [accountList, setAccountList] = useState([]);
    const [lockedAccountList, setLockedAccountList] = useState([]);

    const [selectAll, setSelectAll] = useState(true);
    const [searchingKey, setSearchingKey] = useState('');

    useEffect(() => {
        api.getActivedAccountAdmin().then((res) => {
            setAccountList(res.data);
        });

        api.getLockedAccountAdmin().then((res) => {
            setLockedAccountList(res.data);
        });
    }, []);

    useEffect(() => {
        setSearchingKey('');
        if (selectAll) {
            api.getActivedAccountAdmin().then((res) => {
                setAccountList(res.data);
            });
        }
    }, [selectAll]);

    const handleToggleSelectAll = (event) => {
        setSelectAll(event.target.checked);
    };

    const handleChangePowerOptions = (option) => {
        setSelectAll(false);
        api.filterAdminAccountByPower({ power: option.value }).then((res) => {
            setAccountList(res.data);
        });
    };

    const handleChangeSearchingKey = (key) => {
        setSelectAll(false);
        setSearchingKey(key);
        api.searchingAdminAccount({ keySearch: key }).then((res) => {
            setAccountList(res.data);
        });
    };

    return (
        <div className={cx('admin-manager')}>
            <div className={cx('btn-group')}>
                {typeAccounts === 'actived' && (
                    <Button
                        variant="contained"
                        className="button-add-advertisement"
                        onClick={() =>
                            dispatch(handleToggleAddAdminManager(true))
                        }
                    >
                        <AddIcon className={cx('icon')} />
                        <span>THÊM TÀI KHOẢN</span>
                    </Button>
                )}

                {typeAccounts === 'locked' && (
                    <Button
                        variant="contained"
                        className="button-add-advertisement"
                        onClick={() =>
                            dispatch(handleChangeTypeAccounts('actived'))
                        }
                    >
                        <ReplyAllIcon className={cx('icon')} />
                        <span>TÀI KHOẢN HOẠT ĐỘNG</span>
                    </Button>
                )}
                {typeAccounts === 'actived' && (
                    <Button
                        variant="contained"
                        className="button-remove-advertisement"
                        onClick={() =>
                            dispatch(handleChangeTypeAccounts('locked'))
                        }
                    >
                        <VpnKeyIcon className={cx('icon')} />
                        <span>TÀI KHOẢN BỊ KHÓA</span>
                    </Button>
                )}
            </div>
            <div className={cx('filter-admin')}>
                <div className={cx('select-filter')}>
                    <div className={cx('select-all')}>
                        <span className={cx('label')}>Tất cả</span>
                        <Switch
                            size="large"
                            color="error"
                            checked={selectAll}
                            onChange={handleToggleSelectAll}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                    <div className={'select-sort'}>
                        <Select
                            placeholder="Lọc theo bộ phận"
                            className={cx('select-field')}
                            options={powerSelectOptions}
                            onChange={handleChangePowerOptions}
                        />
                    </div>
                </div>
                <div className={cx('search-filter')}>
                    <input
                        className={'textfield-search'}
                        type="text"
                        placeholder="Tìm kiếm tên theo quản trị viên..."
                        value={searchingKey}
                        onChange={(e) =>
                            handleChangeSearchingKey(e.target.value)
                        }
                    />
                    <label>
                        <SearchIcon className={cx('search-icon')} />
                    </label>
                </div>
            </div>
            <div className={cx('account-list')}>
                {typeAccounts === 'actived' && (
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td className={cx('content-center')}>
                                    Tài khoản
                                </td>
                                <td className={cx('admin-name')}>
                                    Quản trị viên
                                </td>
                                <td>Email</td>
                                <td className={cx('content-center')}>
                                    Bộ phận
                                </td>
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
                )}
            </div>

            <div className={cx('account-list locked-account-table')}>
                {typeAccounts === 'locked' && (
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td className={cx('content-center')}>
                                    Tài khoản
                                </td>
                                <td className={cx('admin-name')}>
                                    Quản trị viên
                                </td>
                                <td>Email</td>
                                <td className={cx('content-center')}>
                                    Bộ phận
                                </td>
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
                            </tr>
                            {lockedAccountList.map((account, index) => (
                                <ProfileAdmin
                                    key={index}
                                    account={account}
                                ></ProfileAdmin>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {openAdd && (
                <AddProfile setAccountList={setAccountList}></AddProfile>
            )}
            {openUpdate && (
                <UpdateProfile setAccountList={setAccountList}></UpdateProfile>
            )}
            {openLock && (
                <LockProfile
                    setAccountList={setAccountList}
                    setLockedAccountList={setLockedAccountList}
                ></LockProfile>
            )}

            {openActive && (
                <ActiveProfile
                    setAccountList={setAccountList}
                    setLockedAccountList={setLockedAccountList}
                ></ActiveProfile>
            )}
        </div>
    );
}

export default AdminManager;
