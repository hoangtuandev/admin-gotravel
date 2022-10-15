import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import Statistic from '../../components/Statistic/Statistic';

function StatisticPage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <Statistic></Statistic>
            </Container>
        </Fragment>
    );
}

export default StatisticPage;
