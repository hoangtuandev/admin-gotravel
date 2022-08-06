import { React } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.scss';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-page')}>
            <Sidenav></Sidenav>
            <Header></Header>
        </div>
    );
}

export default Home;
