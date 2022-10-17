import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ReplyIcon from '@mui/icons-material/Reply';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import Select from 'react-select';
import styles from './GuideManager.scss';
import {
    activeProfile,
    addProfile,
    currentList,
    handleSetCurrentList,
    handleToggleAddProfile,
    lockProfile,
    updateProfile,
    viewProfile,
} from './GuideManagerSlice';
import AddProfile from './AddProfile';
import ProfileItem from './ProfileItem';
import * as api from '../../api';
import { useState } from 'react';
import UpdateProfile from './UpdateProfile';
import ViewProfile from './ViewProfile';
import LockProfile from './LockProfile';
import ActiveProfile from './ActiveProfile';

const cx = classNames.bind(styles);

const starSelectOptions = [
    { value: 'starIncrement', label: 'Tăng dần' },
    { value: 'starDecrement', label: 'Giảm dần' },
];
const timesSelectOptions = [
    { value: 'timesIncrement', label: 'Tăng dần' },
    { value: 'timesDecrement', label: 'Giảm dần' },
];

function GuideManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addProfile);
    const openUpdate = useSelector(updateProfile);
    const openView = useSelector(viewProfile);
    const openLock = useSelector(lockProfile);
    const openActive = useSelector(activeProfile);
    const typeList = useSelector(currentList);

    const [accountGuideList, setAccountGuideList] = useState([]);
    const [lockedAccountGuideList, setLockedAccountGuideList] = useState([]);
    const [selectAll, setSelectAll] = useState(true);
    const [searchingKey, setSearchingKey] = useState('');
    // const [typeSortStar, setTypeSortStar] = useState(null);

    const handleToggleSelectAll = (event) => {
        setSelectAll(event.target.checked);
    };

    const handleAddProfile = () => {
        dispatch(handleToggleAddProfile(true));
    };

    useEffect(() => {
        api.getActiveGuideAccount().then((res) => {
            setAccountGuideList(res.data);
        });

        api.getLockedGuideAccount().then((res) => {
            setLockedAccountGuideList(res.data);
        });
    }, []);

    useEffect(() => {
        setSearchingKey('');
        if (selectAll) {
            api.getActiveGuideAccount().then((res) => {
                setAccountGuideList(res.data);
            });
        }
    }, [selectAll]);

    const handleShowLockedProfile = () => {
        dispatch(handleSetCurrentList('locked'));
    };

    const handleShowActivedProfile = () => {
        dispatch(handleSetCurrentList('actived'));
    };

    const handleChangeSearchingKey = (key) => {
        setSelectAll(false);
        setSearchingKey(key);
        api.searchingGuide({ keySearch: key }).then((res) => {
            setAccountGuideList(res.data);
        });
    };

    const handleChangeSelectSortStar = (option) => {
        setSelectAll(false);
        option.value === 'starIncrement' &&
            api.sortAccountGuideByAverageStar({ typeSort: 1 }).then((res) => {
                setAccountGuideList(res.data);
            });

        option.value === 'starDecrement' &&
            api.sortAccountGuideByAverageStar({ typeSort: -1 }).then((res) => {
                setAccountGuideList(res.data);
            });
    };

    return (
        <div className={cx('guide-manager')}>
            <div className={cx('buttons-group')}>
                {typeList === 'actived' && (
                    <Button
                        variant="contained"
                        className="button-add"
                        onClick={() => handleAddProfile()}
                    >
                        <AddIcon className={cx('icon')} />
                        <span>THÊM HỒ SƠ HDV</span>
                    </Button>
                )}
                {typeList === 'locked' && (
                    <Button
                        color="error"
                        variant="contained"
                        className="button-add"
                        onClick={() => handleShowActivedProfile()}
                    >
                        <ReplyIcon className={cx('icon')} />
                        <span>HỒ SƠ HDV</span>
                    </Button>
                )}
                {typeList === 'actived' && (
                    <Button
                        color="error"
                        variant="contained"
                        className="button-lock"
                        onClick={() => handleShowLockedProfile()}
                    >
                        <VpnKeyIcon className={cx('icon')} />
                        <span>HỒ SƠ BỊ KHÓA</span>
                    </Button>
                )}
            </div>
            {typeList === 'actived' && (
                <div className={cx('filter-guide')}>
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
                    {/* <div className={'select-sort'}>
                        <Select
                            placeholder="Lượt dẫn tour"
                            className={cx('select-field')}
                            options={timesSelectOptions}
                            // onChange={handleChangeYearSelected}
                        />
                    </div> */}
                    <div className={'select-sort'}>
                        <Select
                            placeholder="Sao trung bình"
                            className={cx('select-field')}
                            options={starSelectOptions}
                            onChange={handleChangeSelectSortStar}
                        />
                    </div>
                    <div className={cx('search-tour')}>
                        <input
                            className={'textfield-search'}
                            type="text"
                            placeholder="Tìm kiếm hướng dẫn viên..."
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
            )}

            <div className="box-manager">
                {accountGuideList.length !== 0 && (
                    <div>
                        {typeList === 'actived' && (
                            <table>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>Tài khoản</td>
                                        <td className={cx('name-guide')}>
                                            Hướng dẫn viên
                                        </td>
                                        <td>Số điện thoại</td>
                                        <td>Lượt dẫn tour</td>
                                        <td>Lượt đánh giá</td>
                                        <td>Sao trung bình</td>

                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    {accountGuideList.map((account, index) => (
                                        <ProfileItem
                                            key={index}
                                            account={account}
                                        ></ProfileItem>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        {typeList === 'locked' && (
                            <table className={cx('locked-table')}>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>Tài khoản</td>
                                        <td className={cx('name-guide')}>
                                            Hướng dẫn viên
                                        </td>
                                        <td>Số điện thoại</td>
                                        <td>Lượt dẫn tour</td>
                                        <td>Lượt đánh giá</td>
                                        <td>Sao trung bình</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    {lockedAccountGuideList.map(
                                        (account, index) => (
                                            <ProfileItem
                                                key={index}
                                                account={account}
                                            ></ProfileItem>
                                        )
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
                {accountGuideList.length === 0 && (
                    <div className={cx('empty-list')}>
                        <p className={cx('notification')}>
                            Không tìm thấy hướng dẫn viên !
                        </p>
                        <div>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                                alt=""
                            />
                        </div>
                    </div>
                )}
            </div>

            {openAdd && (
                <AddProfile
                    setAccountGuideList={setAccountGuideList}
                ></AddProfile>
            )}
            {openUpdate && (
                <UpdateProfile
                    setAccountGuideList={setAccountGuideList}
                ></UpdateProfile>
            )}
            {openLock && (
                <LockProfile
                    setAccountGuideList={setAccountGuideList}
                    setLockedAccountGuideList={setLockedAccountGuideList}
                ></LockProfile>
            )}
            {openActive && (
                <ActiveProfile
                    setAccountGuideList={setAccountGuideList}
                    setLockedAccountGuideList={setLockedAccountGuideList}
                ></ActiveProfile>
            )}
            {openView && <ViewProfile></ViewProfile>}
        </div>
    );
}

export default GuideManager;
