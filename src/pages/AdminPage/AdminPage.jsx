import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import AdminManager from '../../components/AdminManager/AdminManager';

function AdminPage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <AdminManager></AdminManager>
            </Container>
        </Fragment>
    );
}

export default AdminPage;
