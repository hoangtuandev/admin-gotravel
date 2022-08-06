import { React } from 'react';
// import classNames from 'classnames/bind';

import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import Vehicle from '../../components/Vehicle/Vehicle';

// const cx = classNames.bind(styles);

function VehiclePage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <Vehicle></Vehicle>
        </div>
    );
}

export default VehiclePage;
