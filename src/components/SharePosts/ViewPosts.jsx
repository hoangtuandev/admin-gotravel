import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PublicIcon from '@mui/icons-material/Public';
import Checkbox from '@mui/material/Checkbox';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Favorite from '@mui/icons-material/Favorite';
import styles from './SharePosts.scss';
import * as api from '../../api';
import {
    baseURLServer,
    handleToggleViewPosts,
    openView,
    postsSelected,
} from './SharePostsSlice';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

export default function ViewPosts(props) {
    const dispatch = useDispatch();
    const baseURL = useSelector(baseURLServer);
    const posts = useSelector(postsSelected);
    const openDialog = useSelector(openView);

    const filterContent = (item) => item !== '';
    const contentPosts = posts.bvcs_noidung.split('\n').filter(filterContent);

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        api.getTouristAccountById({ idAccount: posts.bvcs_taikhoan._id }).then(
            (res) => {
                setAuthor(res.data[0]);
            }
        );
    }, []);

    function prettyDate(time) {
        var date = new Date(time);
        var diff = (new Date().getTime() - date.getTime()) / 1000,
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) return;

        return (
            (day_diff === 0 &&
                ((diff < 60 && 'vừa xong') ||
                    (diff < 120 && '1 phút trước') ||
                    (diff < 3600 && Math.floor(diff / 60) + ' phút trước') ||
                    (diff < 7200 && '1 giờ trước') ||
                    (diff < 86400 &&
                        Math.floor(diff / 3600) + ' giờ trước'))) ||
            (day_diff === 1 && '1 ngày trước') ||
            (day_diff < 7 && day_diff + ' ngày trước') ||
            (day_diff < 31 && Math.ceil(day_diff / 7) + ' tuần trước') ||
            (day_diff > 31 && Math.floor(day_diff / 31) + ' tháng trước')
        );
    }

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={() => dispatch(handleToggleViewPosts(false))}
                className={cx('dialog-view-posts')}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className={cx('dialog-content')}>
                    {author && (
                        <div className={cx('header-form')}>
                            <img
                                src={`${baseURL}${author.tkkdl_anhdaidien}`}
                                alt=""
                                className="avatar"
                            />

                            <div className="user">
                                <p className="user-name">
                                    {author.tkkdl_khachdulich.kdl_hoten}
                                </p>
                                <p className="permission">
                                    <PublicIcon className="icon-permission" />
                                    <span>Công khai</span>
                                </p>
                            </div>
                        </div>
                    )}

                    <div className={cx('body-form')}>
                        <div className={cx('image-label')}>
                            <img
                                src={`${baseURL}${posts.bvcs_hinhanhtieude}`}
                                alt=""
                            />
                        </div>
                        <div className={cx('label-posts')}>
                            <p>{posts.bvcs_tieude}</p>
                        </div>
                        <div className={cx('content-posts')}>
                            <div className="details-view">
                                {contentPosts.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className={cx('interact-posts')}>
                            <div className={cx('interact-item')}>
                                <Checkbox
                                    {...label}
                                    icon={
                                        <Favorite className="favorite-icon" />
                                    }
                                    checkedIcon={
                                        <Favorite className="favorite-icon" />
                                    }
                                    className={cx('interact-checkbox')}
                                />
                                <p className={cx('interact-value')}>
                                    {posts.bvcs_luotthich.length}
                                </p>
                            </div>

                            <div className={cx('interact-item')}>
                                <Checkbox
                                    {...label}
                                    icon={
                                        <ForumOutlinedIcon className="interact-icon" />
                                    }
                                    checkedIcon={
                                        <ForumOutlinedIcon className="interact-icon" />
                                    }
                                    className={cx('interact-checkbox')}
                                />
                                <p className={cx('interact-value')}>
                                    {posts.bvcs_binhluan.length}
                                </p>
                            </div>
                            <div className={cx('interact-item')}>
                                <Checkbox
                                    {...label}
                                    icon={
                                        <ShareOutlinedIcon className="interact-icon" />
                                    }
                                    checkedIcon={
                                        <ShareOutlinedIcon className="interact-icon" />
                                    }
                                    className={cx('interact-checkbox')}
                                />
                                <p className={cx('interact-value')}>
                                    {posts.bvcs_luotchiase.length}
                                </p>
                            </div>
                        </div>
                        <div className="comments-posts">
                            <div className="comment-list">
                                {posts.bvcs_binhluan.map((comment, index) => (
                                    <div
                                        key={index}
                                        comment={comment}
                                        className="comment-item"
                                    >
                                        {comment.blbv_taikhoan
                                            .tkkdl_anhdaidien && (
                                            <img
                                                src={`${baseURL}${comment.blbv_taikhoan.tkkdl_anhdaidien}`}
                                                alt=""
                                                className="avatar-comment"
                                            />
                                        )}
                                        {!comment.blbv_taikhoan
                                            .tkkdl_anhdaidien && (
                                            <img
                                                src="https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg"
                                                alt=""
                                                className="avatar-comment"
                                            />
                                        )}
                                        <div>
                                            <div className="content-comment">
                                                <p className="user">
                                                    {
                                                        comment.blbv_taikhoan
                                                            .tkkdl_khachdulich
                                                            .kdl_hoten
                                                    }
                                                </p>
                                                <p className="detail">
                                                    {comment.blbv_noidung}
                                                </p>
                                            </div>
                                            <div className="interact-comment">
                                                <p className="time">
                                                    {prettyDate(
                                                        comment.blbv_thoigian
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
