import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FcNext } from 'react-icons/fc';

import styles from './Header.scss';
import { selectLabelOption } from '../GlobalSlice';
import AccountMenu from './AccountMenu';

const cx = classNames.bind(styles);

function Header() {
    const labelOption = useSelector(selectLabelOption);

    return (
        <div className={cx('header')}>
            <div className={cx('header-label')}>
                <span className={cx('icon')}>
                    <FcNext />
                </span>
                <span className={cx('label')}>{labelOption}</span>
            </div>
            <div className={cx('header-control')}>
                <ul className={cx('menu')}>
                    <li>
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon className="icon" />
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Delete">
                            <IconButton>
                                <NotificationsIcon className="icon" />
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Delete">
                            <IconButton>
                                <DashboardIcon className="icon" />
                            </IconButton>
                        </Tooltip>
                    </li>
                </ul>
                <span className={cx('account')}>
                    <AccountMenu></AccountMenu>
                    {/* <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1658649721/GoTravel/miule_nbsahv.jpg"
                        alt=""
                    />
                    <ul className={cx('dropdown-account')}>
                        <li>
                            <span className={cx('icon')}>
                                <MdInfoOutline />
                            </span>
                            <span className={cx('label')}>
                                Th??ng tin t??i kho???n
                            </span>
                        </li>
                        <li onClick={() => handleLogout()}>
                            <span className={cx('icon')}>
                                <MdOutlineLogout />
                            </span>
                            <span className={cx('label')}>????ng xu???t</span>
                        </li>
                    </ul> */}
                </span>
            </div>
        </div>
    );
}

export default Header;
