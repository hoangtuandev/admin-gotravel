import { React, Fragment, forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
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
import styles from './GuideManager.scss';
import {
    handleToggleViewProfile,
    profileSelected,
    viewProfile,
} from './GuideManagerSlice';
import * as api from '../../api';
import HistoryCalendarItem from './HistoryCalendarItem';
import HistoryRatingItem from './HistoryRatingItem';
import InformationsProfile from './InformationProfileView';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewProfile(props) {
    const dispatch = useDispatch();
    const openDialog = useSelector(viewProfile);
    const profile = useSelector(profileSelected);

    const [ratingList, setRatingList] = useState([]);
    const [guideTimes, setGuideTimes] = useState([]);

    useEffect(() => {
        api.getRatingGuideByGuideAccount({ _id: profile._id }).then((res) => {
            setRatingList(res.data);
        });
    }, [profile]);

    useEffect(() => {
        api.getGuideTimesByAccount({
            username: profile.tkhdv_tendangnhap,
        }).then((res) => {
            setGuideTimes(res.data);
        });
    }, [profile]);

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
                        <InformationsProfile></InformationsProfile>
                        <div className={cx('profile-evaluate')}>
                            <p className={cx('label-profile-evaluate')}>
                                LỊCH SỬ DẪN TOUR
                            </p>
                            <div className={cx('history-calendar')}>
                                {guideTimes.map((guidetime, index) => (
                                    <HistoryCalendarItem
                                        key={index}
                                        guidetime={guidetime}
                                    ></HistoryCalendarItem>
                                ))}
                            </div>
                            {guideTimes.length === 0 && (
                                <div className={cx('empty-list')}>
                                    <p className={cx('notification')}>
                                        Lịch sử dẫn tour rỗng
                                    </p>
                                    <img
                                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                                        alt=""
                                    />
                                </div>
                            )}

                            <p className={cx('label-profile-evaluate')}>
                                LỊCH SỬ ĐÁNH GIÁ
                            </p>
                            <div className={cx('history-rating')}>
                                {ratingList.map((rating, index) => (
                                    <HistoryRatingItem
                                        key={index}
                                        rating={rating}
                                    ></HistoryRatingItem>
                                ))}
                            </div>
                            {ratingList.length === 0 && (
                                <div className={cx('empty-list')}>
                                    <p className={cx('notification')}>
                                        Lịch sử đánh giá rỗng !
                                    </p>
                                    <img
                                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                                        alt=""
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
