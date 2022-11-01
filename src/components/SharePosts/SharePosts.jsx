import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './SharePosts.scss';
import SharePostsItem from './SharePostsItem';
import * as api from '../../api';
import { handleChangeTypeListPosts, typeListPosts } from './SharePostsSlice';

const cx = classNames.bind(styles);

function SharePosts() {
    const dispatch = useDispatch();
    const [valueNavigation, setValueNavigation] = useState(1);
    const typeList = useSelector(typeListPosts);

    const [listPosts, setListPosts] = useState([]);

    useEffect(() => {
        if (typeList === 0) {
            api.getRejectSharePosts().then((res) => {
                setListPosts(res.data);
            });
        } else if (typeList === 1) {
            api.getWaitingSharePosts().then((res) => {
                setListPosts(res.data);
            });
        } else if (typeList === 2) {
            api.getAcceptedSharePosts().then((res) => {
                setListPosts(res.data);
            });
        }
    }, [typeList]);

    return (
        <div className={cx('share-posts')}>
            <div className="tab">
                <BottomNavigation
                    showLabels
                    value={valueNavigation}
                    className="navigation-menu"
                    onChange={(event, newValue) => {
                        setValueNavigation(newValue);
                        dispatch(handleChangeTypeListPosts(newValue));
                    }}
                >
                    <BottomNavigationAction
                        className="navigation-action"
                        label="Từ chối"
                    />
                    <BottomNavigationAction
                        className="navigation-action"
                        label="Chờ duyệt"
                    />
                    <BottomNavigationAction
                        className="navigation-action"
                        label="Đã duyệt"
                    />
                </BottomNavigation>
            </div>
            <ul className="posts-list">
                {listPosts.length !== 0 &&
                    listPosts.map((posts, index) => (
                        <SharePostsItem
                            key={index}
                            posts={posts}
                            setListPosts={setListPosts}
                        ></SharePostsItem>
                    ))}
            </ul>
        </div>
    );
}

export default SharePosts;
