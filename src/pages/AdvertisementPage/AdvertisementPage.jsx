import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Advertisement from '../../components/Advertisement/Advertisement';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';

function AdvertisementPage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <Advertisement></Advertisement>
            </Container>
        </Fragment>
    );
}

export default AdvertisementPage;
