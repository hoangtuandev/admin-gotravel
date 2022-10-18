import * as React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { GiSailboat } from 'react-icons/gi';
import { BiLandscape } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import styles from './Header.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);
const cookies = new Cookies();

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const usernameAdmin = cookies.get('useradmin');
    const open = Boolean(anchorEl);

    const [admin, setAdmin] = React.useState(null);

    useEffect(() => {
        api.getAccountAdminByUsername({ username: usernameAdmin }).then(
            (res) => {
                setAdmin(res.data[0]);
            }
        );
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        cookies.remove('useradmin', { path: '/' });
        window.location.href = '/';
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Tooltip title="">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {admin && (
                            <Avatar
                                alt="User"
                                src={admin.tkqtv_anhdaidien}
                                sx={{ width: 45, height: 45 }}
                            />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                className={cx('account-menu')}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 22,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem className={cx('menu-item')}>
                    <ListItemIcon>
                        <PersonAdd className={cx('icon')} />
                    </ListItemIcon>
                    Quản lý tài khoản
                </MenuItem>

                <Link to="/lich-su-dat-tour" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <GiSailboat className={cx('icon')} />
                        </ListItemIcon>
                        Tour đã đặt
                    </MenuItem>
                </Link>
                <Link to="/dia-diem-da-luu" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <BiLandscape className={cx('icon')} />
                        </ListItemIcon>
                        Địa điểm đã lưu
                    </MenuItem>
                </Link>
                <MenuItem
                    className={cx('menu-item logout-option')}
                    onClick={() => handleLogout()}
                >
                    <ListItemIcon>
                        <Logout className={cx('icon')} />
                    </ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
