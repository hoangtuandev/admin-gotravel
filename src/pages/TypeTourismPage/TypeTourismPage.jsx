import { React } from 'react';
// import classNames from 'classnames/bind';

import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import TypeTourism from '../../components/TypeTourism/TypeTourism';

// const cx = classNames.bind(styles);

function TypeTourismPage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <TypeTourism></TypeTourism>
        </div>
    );
}

export default TypeTourismPage;
