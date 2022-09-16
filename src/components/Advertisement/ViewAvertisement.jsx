import { React, Fragment, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PinDropIcon from '@mui/icons-material/PinDrop';
import styles from './Advertisement.scss';
import {
    handleToggleViewAdvertisement,
    viewAdvertisement,
    advertisementSelected,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewAdvertisement(props) {
    const dispatch = useDispatch();
    const openView = useSelector(viewAdvertisement);
    const advertisement = useSelector(advertisementSelected);

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    fullScreen
                    TransitionComponent={Transition}
                    className={cx('dialog')}
                    open={openView}
                    onClose={() =>
                        dispatch(handleToggleViewAdvertisement(false))
                    }
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
                                    dispatch(
                                        handleToggleViewAdvertisement(false)
                                    )
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
                                THÔNG TIN CHI TIẾT
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(
                                        handleToggleViewAdvertisement(false)
                                    )
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('view-advertisement')}>
                        <ul className={cx('infor-advertisement')}>
                            <li>
                                <span className={cx('label')}>
                                    Mã bài viết:
                                </span>
                                <span className={cx('content')}>
                                    {advertisement.bvqb_ma}
                                </span>
                            </li>

                            <li>
                                <span className={cx('label')}>
                                    Ngày hết hạn:
                                </span>
                                <span className={cx('content')}>
                                    {moment(advertisement.bvqb_thoihan).format(
                                        'DD/MM/YYYY'
                                    )}
                                </span>
                            </li>
                            <li>
                                <span className={cx('label')}>Trạng thái:</span>
                                <span className={cx('content')}>
                                    {advertisement.bvqb_trangthai === 1
                                        ? 'Đang đăng'
                                        : advertisement.bvqb_trangthai === 0
                                        ? 'Đã gỡ'
                                        : 'Hết hạn'}
                                </span>
                            </li>
                        </ul>

                        <p className={cx('title-advetisement')}>
                            <PinDropIcon className={cx('icon')} />
                            <span>{advertisement.bvqb_tieude}</span>
                        </p>
                        <div className={cx('content-advertisement')}>
                            <p className={cx('images-advertisement')}>
                                <img
                                    src={advertisement.bvqb_hinhanh[0]}
                                    alt=""
                                />
                            </p>
                            {advertisement.bvqb_noidung}
                            <p className={cx('images-advertisement')}>
                                <img
                                    src={advertisement.bvqb_hinhanh[1]}
                                    alt=""
                                />
                            </p>
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
