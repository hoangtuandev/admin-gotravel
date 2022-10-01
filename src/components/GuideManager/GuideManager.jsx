import { React, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './GuideManager.scss';
import {
    addProfile,
    handleToggleAddProfile,
    updateProfile,
} from './GuideManagerSlice';
import AddProfile from './AddProfile';
import ProfileItem from './ProfileItem';
import * as api from '../../api';
import { useState } from 'react';
import UpdateProfile from './UpdateProfile';

const cx = classNames.bind(styles);

function GuideManager() {
    const dispatch = useDispatch();
    const openAdd = useSelector(addProfile);
    const openUpdate = useSelector(updateProfile);

    const [accountGuideList, setAccountGuideList] = useState([]);

    const handleAddProfile = () => {
        dispatch(handleToggleAddProfile(true));
    };

    useEffect(() => {
        api.getAllGuideAccount().then((res) => {
            setAccountGuideList(res.data);
        });
    }, []);

    return (
        <div className={cx('guide-manager')}>
            <div className={cx('buttons-group')}>
                <Button
                    variant="contained"
                    className="button-add-advertisement"
                    onClick={() => handleAddProfile()}
                >
                    <AddIcon className={cx('icon')} />
                    <span>THÊM HỒ SƠ HDV</span>
                </Button>
            </div>
            <div className="box-manager">
                {accountGuideList.length !== 0 && (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Tài khoản</td>
                                    <td className={cx('name-guide')}>
                                        Hướng dẫn viên
                                    </td>
                                    <td>Năm sinh</td>
                                    <td>Đánh giá</td>
                                    <td></td>
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
                    </div>
                )}
                {accountGuideList.length === 0 && (
                    <div className={cx('empty-list')}>
                        <div>
                            <CircularProgress />
                        </div>
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
        </div>
    );
}

export default GuideManager;
