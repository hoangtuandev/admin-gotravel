import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import styles from './SharePosts.scss';
import { baseURLServer, typeListPosts } from './SharePostsSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

function SharePostsItem(props) {
    const { posts, setListPosts } = props;
    const dispatch = useDispatch();
    const typeList = useSelector(typeListPosts);
    const baseURL = useSelector(baseURLServer);

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        api.getTouristAccountById({ idAccount: posts.bvcs_taikhoan._id }).then(
            (res) => {
                setAuthor(res.data[0]);
            }
        );
    }, [posts]);

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

    const handleAcceptSharePosts = () => {
        api.acceptSharePost({ idPosts: posts.bvcs_ma }).then((res) => {
            api.getWaitingSharePosts().then((res) => {
                setListPosts(res.data);
            });
        });
    };

    const handleRejectSharePosts = () => {
        api.rejectSharePost({ idPosts: posts.bvcs_ma }).then((res) => {
            api.getWaitingSharePosts().then((res) => {
                setListPosts(res.data);
            });
        });
    };

    return (
        <li>
            <Card className={cx('card')}>
                <CardActionArea className={cx('card-action-area')}>
                    <CardMedia
                        component="img"
                        height="230"
                        image={`${baseURL}${posts.bvcs_hinhanhtieude}`}
                        alt="green iguana"
                        className={cx('card-media')}
                    />
                    <CardContent className={cx('card-content')}>
                        {author && (
                            <div className="author">
                                <img
                                    src={`${baseURL}${author.tkkdl_anhdaidien}`}
                                    alt=""
                                />
                                <p>
                                    <i>{author.tkkdl_khachdulich.kdl_hoten}</i>
                                </p>
                            </div>
                        )}
                        <div className={cx('typography-title')}>
                            {posts.bvcs_tieude}
                        </div>

                        <div
                            variant="body2"
                            color="text.secondary"
                            className={cx('typography-content')}
                        >
                            {posts.bvcs_noidung}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className="card-actions">
                    <div className="datetime-post">
                        <AccessTimeIcon className="icon-accesstime" />
                        <span>
                            {/* {moment(posts.bvcs_thoigian).format(
                                'HH:mm DD/MM/YYYY'
                            )} */}
                            {prettyDate(posts.bvcs_thoigian)}
                        </span>
                    </div>
                    {typeList === 1 && (
                        <div>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleRejectSharePosts()}
                            >
                                Từ chối
                            </Button>
                            <Button
                                variant="outlined"
                                color="success"
                                onClick={() => handleAcceptSharePosts()}
                            >
                                Duyệt
                            </Button>
                        </div>
                    )}
                    {typeList === 2 && (
                        <div className={cx('typography-control')}>
                            <div className={cx('favorite-time')}>
                                <span>10</span>
                                <FavoriteIcon className={cx('icon')} />
                            </div>
                            <div className={cx('comment-time')}>
                                <span>10</span>
                                <QuestionAnswerIcon className={cx('icon')} />
                            </div>
                        </div>
                    )}
                </CardActions>
            </Card>
        </li>
    );
}

export default SharePostsItem;
