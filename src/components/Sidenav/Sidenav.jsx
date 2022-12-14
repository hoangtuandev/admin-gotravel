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
                            title="Th???ng k??"
                            style={
                                labelOption === 'Th???ng k??' ? selectedStyle : {}
                            }
                        >
                            <span className={cx('icon')} title="Th???ng k??">
                                <FcPositiveDynamic />
                            </span>
                            <span className={cx('label')} title="Th???ng k??">
                                Th???ng k??
                            </span>
                        </li>
                    </Link>
                    <Link to="/loai-hinh-tour" className={cx('link-router')}>
                        <li
                            title="Lo???i h??nh Tour"
                            onClick={(e) => handleSelectOption(e)}
                            style={
                                labelOption === 'Lo???i h??nh Tour'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Lo???i h??nh Tour">
                                <FcParallelTasks />
                            </span>
                            <span
                                className={cx('label')}
                                title="Lo???i h??nh Tour"
                            >
                                Lo???i h??nh Tour
                            </span>
                        </li>
                    </Link>
                    <Link to="/phuong-tien" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="Ph????ng ti???n"
                            style={
                                labelOption === 'Ph????ng ti???n'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="Ph????ng ti???n">
                                <FcAutomotive />
                            </span>
                            <span className={cx('label')} title="Ph????ng ti???n">
                                Ph????ng ti???n
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
                            title="L???ch d???n Tour"
                            style={
                                labelOption === 'L???ch d???n Tour'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="L???ch d???n Tour">
                                <FcCalendar />
                            </span>
                            <span className={cx('label')} title="L???ch d???n Tour">
                                L???ch d???n Tour
                            </span>
                        </li>
                    </Link>
                    <Link to="/chia-se" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="B??i chia s???"
                            style={
                                labelOption === 'B??i chia s???'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="B??i chia s???">
                                <FcShare />
                            </span>
                            <span className={cx('label')} title="B??i chia s???">
                                B??i chia s???
                            </span>
                        </li>
                    </Link>

                    <Link to="/quang-ba" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="B??i qu???ng b??"
                            style={
                                labelOption === 'B??i qu???ng b??'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="B??i qu???ng b??">
                                <FcAdvertising />
                            </span>
                            <span className={cx('label')} title="B??i qu???ng b??">
                                B??i qu???ng b??
                            </span>
                        </li>
                    </Link>
                    <Link to="/huong-dan-vien" className={cx('link-router')}>
                        <li
                            onClick={(e) => handleSelectOption(e)}
                            title="H?????ng d???n vi??n"
                            style={
                                labelOption === 'H?????ng d???n vi??n'
                                    ? selectedStyle
                                    : {}
                            }
                        >
                            <span className={cx('icon')} title="H?????ng d???n vi??n">
                                <FcAssistant />
                            </span>
                            <span
                                className={cx('label')}
                                title="H?????ng d???n vi??n"
                            >
                                H?????ng d???n vi??n
                            </span>
                        </li>
                    </Link>
                    {admin &&
                        (admin.tkqtv_nhanvien.qtv_chucvu === 'Qu???n l??' ||
                            admin.tkqtv_nhanvien.qtv_chucvu === 'Nh??n s???') && (
                            <Link
                                to="/quan-tri-vien"
                                className={cx('link-router')}
                            >
                                <li
                                    onClick={(e) => handleSelectOption(e)}
                                    title="Qu???n tr??? vi??n"
                                    style={
                                        labelOption === 'Qu???n tr??? vi??n'
                                            ? selectedStyle
                                            : {}
                                    }
                                >
                                    <span
                                        className={cx('icon')}
                                        title="Qu???n tr??? vi??n"
                                    >
                                        <FcPortraitMode />
                                    </span>
                                    <span
                                        className={cx('label')}
                                        title="Qu???n tr??? vi??n"
                                    >
                                        Qu???n tr??? vi??n
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
