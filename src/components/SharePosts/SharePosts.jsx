import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SharePosts.scss';
import SharePostsItem from './SharePostsItem';
import * as api from '../../api';
import {
    handleChangeTypeListPosts,
    openView,
    typeListPosts,
} from './SharePostsSlice';
import ViewPosts from './ViewPosts';

const cx = classNames.bind(styles);

function SharePosts() {
    const dispatch = useDispatch();
    const openDialog = useSelector(openView);
    const [valueNavigation, setValueNavigation] = useState(1);
    const typeList = useSelector(typeListPosts);

    const [listPosts, setListPosts] = useState([]);

    const [searchingKey, setSearchingKey] = useState('');

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

    const handleChangeSearchingKey = (key) => {
        setSearchingKey(key);
        api.searchingSharePosts({
            keySearch: key,
            currentStatus: typeList,
        }).then((res) => {
            setListPosts(res.data);
        });
    };

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
                        label="Không duyệt"
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

                <div className={cx('search-tour')}>
                    <input
                        className={'textfield-search'}
                        type="text"
                        placeholder="Tìm kiếm tiêu đề bài viết..."
                        value={searchingKey}
                        onChange={(e) =>
                            handleChangeSearchingKey(e.target.value)
                        }
                    />
                    <label>
                        <SearchIcon className={cx('search-icon')} />
                    </label>
                </div>
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
            {openDialog && <ViewPosts></ViewPosts>}
        </div>
    );
}

export default SharePosts;
