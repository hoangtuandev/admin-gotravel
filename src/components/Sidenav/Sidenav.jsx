import { React, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import {
    FcParallelTasks,
    FcLandscape,
    FcPositiveDynamic,
    FcAutomotive,
    FcCalendar,
    FcTodoList,
    FcShare,
    FcAssistant,
    FcPortraitMode,
    FcAdvertising,
} from 'react-icons/fc';
import * as api from '../../api';
import styles from './Sidenav.scss';
import { setLabelOption, selectLabelOption } from '../GlobalSlice';

const cx = classNames.bind(styles);
const cookies = new Cookies();

const selectedStyle = {
    cursor: 'pointer',
    transform: 'scale(1.05)',
    transition: 'ease-in-out 0.2s',
    backgroundColor: 'white',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    borderLeft: '13px solid #0b9de0',
    boxShadow: '1px 1px 7px #a8a8a8',
    color: '#005cbefe',
    fontWeight: '700',
};

function Sidenav() {
    const dispatch = useDispatch();
    const labelOption = useSelector(selectLabelOption);

    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        api.getAccountAdminByUsername({
            username: cookies.get('useradmin'),
        }).then((res) => {
            setAdmin(res.data[0]);
        });
    }, []);

    const handleSelectOption = (e) => {
        dispatch(setLabelOption(e.target.title));
        setLabelOption(e.target.title);
    };
    return (
        <div className={cx('sidenav')}>
            <div className={cx('logo')}>
                <img
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1658737322/GoTravel/Screenshot_2022-07-25_152144_rzkfy0.png"
                    alt=""
                />
            </div>
            <div className={cx('menu')}>
                <ul>
                    <Link to="/thong-ke" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Thống kê"
                            style={
                                labelOption === 'Thống kê' ? selectedStyle : {}
                            }
                        >
                            <span className={cx('icon')} title="Thống kê">
                                <FcPositiveDynamic />
                            </span>
                            <span className={cx('label')} title="Thống kê">
                                Thống kê
                            </span>
                        </li>
                    </Link>
                    <Link to="/loai-hinh-tour" className={cx('link-router')}>
                        <li
                            title="Loại hình Tour"
                            onClick={(e) => handleSelectOption(e)}
                            style={
                                labelOption === 'Loại hình Tour'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Loại hình Tour">
                                <FcParallelTasks />
                            </span>
                            <span
                                className={cx('label')}
                                title="Loại hình Tour"
                            >
                                Loại hình Tour
                            </span>
                        </li>
                    </Link>
                    <Link to="/phuong-tien" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Phương tiện"
                            style={
                                labelOption === 'Phương tiện'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Phương tiện">
                                <FcAutomotive />
                            </span>
                            <span className={cx('label')} title="Phương tiện">
                                Phương tiện
                            </span>
                        </li>
                    </Link>
                    <Link to="/tour" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Tour"
                            style={labelOption === 'Tour' ? selectedStyle : {}}
                        >
                            <span className={cx('icon')} title="Tour">
                                <FcLandscape />
                            </span>
                            <span className={cx('label')} title="Tour">
                                Tour
                            </span>
                        </li>
                    </Link>
                    <Link to="/booking-tour" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Booking"
                            style={
                                labelOption === 'Booking' ? selectedStyle : {}
                            }
                        >
                            <span className={cx('icon')} title="Booking">
                                <FcTodoList />
                            </span>
                            <span className={cx('label')} title="Booking">
                                Booking
                            </span>
                        </li>
                    </Link>
                    <Link to="/lich-dan-tour" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Lịch dẫn Tour"
                            style={
                                labelOption === 'Lịch dẫn Tour'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Lịch dẫn Tour">
                                <FcCalendar />
                            </span>
                            <span className={cx('label')} title="Lịch dẫn Tour">
                                Lịch dẫn Tour
                            </span>
                        </li>
                    </Link>
                    <Link to="/chia-se" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Bài chia sẻ"
                            style={
                                labelOption === 'Bài chia sẻ'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Bài chia sẻ">
                                <FcShare />
                            </span>
                            <span className={cx('label')} title="Bài chia sẻ">
                                Bài chia sẻ
                            </span>
                        </li>
                    </Link>

                    <Link to="/quang-ba" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Bài quảng bá"
                            style={
                                labelOption === 'Bài quảng bá'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Bài quảng bá">
                                <FcAdvertising />
                            </span>
                            <span className={cx('label')} title="Bài quảng bá">
                                Bài quảng bá
                            </span>
                        </li>
                    </Link>
                    <Link to="/huong-dan-vien" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Hướng dẫn viên"
                            style={
                                labelOption === 'Hướng dẫn viên'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Hướng dẫn viên">
                                <FcAssistant />
                            </span>
                            <span
                                className={cx('label')}
                                title="Hướng dẫn viên"
                            >
                                Hướng dẫn viên
                            </span>
                        </li>
                    </Link>
                    {admin &&
                        (admin.tkqtv_nhanvien.qtv_chucvu === 'Quản lý' ||
                            admin.tkqtv_nhanvien.qtv_chucvu === 'Nhân sự') && (
                            <Link
                                to="/quan-tri-vien"
                                className={cx('link-router')}
                            >
                                <li
                                    onClick={(e) => handleSelectOption(e)}
                                    title="Quản trị viên"
                                    style={
                                        labelOption === 'Quản trị viên'
                                            ? selectedStyle
                                            : {}
                                    }
                                >
                                    <span
                                        className={cx('icon')}
                                        title="Quản trị viên"
                                    >
                                        <FcPortraitMode />
                                    </span>
                                    <span
                                        className={cx('label')}
                                        title="Quản trị viên"
                                    >
                                        Quản trị viên
                                    </span>
                                </li>
                            </Link>
                        )}
                </ul>
            </div>
        </div>
    );
}

export default Sidenav;
