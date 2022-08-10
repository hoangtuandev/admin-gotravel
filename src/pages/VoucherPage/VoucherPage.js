import { React } from 'react';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import Voucher from '../../components/Voucher/Voucher';

function VoucherPage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <Voucher></Voucher>
        </div>
    );
}

export default VoucherPage;
