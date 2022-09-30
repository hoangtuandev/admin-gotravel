import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import GuideManager from '../../components/GuideManager/GuideManager';

function GuidePage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <GuideManager></GuideManager>
            </Container>
        </Fragment>
    );
}

export default GuidePage;
