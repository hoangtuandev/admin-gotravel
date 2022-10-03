import { React, Fragment, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BadgeIcon from '@mui/icons-material/Badge';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './GuideManager.scss';
import {
    handleToggleViewProfile,
    profileSelected,
    viewProfile,
} from './GuideManagerSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewProfile(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(viewProfile);
    const profile = useSelector(profileSelected);

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    open={openDialog}
                    onClose={() => dispatch(handleToggleViewProfile(false))}
                    fullScreen
                    TransitionComponent={Transition}
                    className={cx('dialog')}
                >
                    <AppBar
                        sx={{ position: 'relative' }}
                        className={cx('appbar')}
                    >
                        <Toolbar className={cx('toolbar')}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                className={cx('icon-button')}
                                onClick={() =>
                                    dispatch(handleToggleViewProfile(false))
                                }
                            >
                                <CloseIcon className={cx('close-icon')} />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                                className={cx('typography')}
                            >
                                CHI TIẾT HỒ SƠ HƯỚNG DẪN VIÊN
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(handleToggleViewProfile(false))
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('view-profile')}>
                        <div className={cx('profile-infor')}>
                            <div className={cx('header-profile')}>
                                <div>
                                    <img
                                        className={cx('avatar-guide')}
                                        src="https://res.cloudinary.com/phtuandev/image/upload/v1664593994/Avatar/Ribi-Sach_nwf0tv.jpg"
                                        alt=""
                                    />
                                    <div>
                                        <p className={cx('name-guide')}>
                                            Phạm Hoàng Tuấn
                                        </p>
                                    </div>
                                    <div className={cx('rating')}>
                                        <StarIcon className={cx('star-icon')} />
                                        <StarIcon className={cx('star-icon')} />
                                        <StarIcon className={cx('star-icon')} />
                                        <StarIcon className={cx('star-icon')} />
                                        <StarIcon className={cx('star-icon')} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content-profile')}>
                                <ul>
                                    <li>
                                        <FingerprintIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>
                                            PG0547354845
                                        </p>
                                    </li>

                                    <li>
                                        <TransgenderIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>Nam</p>
                                    </li>

                                    <li>
                                        <CakeIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>2000</p>
                                    </li>
                                    <li>
                                        <LocalPhoneIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>
                                            098975445
                                        </p>
                                    </li>
                                    <li>
                                        <EmailIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>
                                            @gmail.com
                                        </p>
                                    </li>

                                    <li>
                                        <HomeIcon
                                            className={cx('icon-profile')}
                                        />

                                        <p className={cx('content')}>
                                            Vinh Long
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('profile-evaluate')}>2</div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
