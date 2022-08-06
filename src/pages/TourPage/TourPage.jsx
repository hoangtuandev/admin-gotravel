import { React } from 'react';
// import classNames from 'classnames/bind';

import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import Tour from '../../components/Tour/Tour';

// const cx = classNames.bind(styles);

function TourPage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <Tour></Tour>
        </div>
    );
}

export default TourPage;
