import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import SharePosts from '../../components/SharePosts/SharePosts';

function SharePostsPage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <SharePosts></SharePosts>
            </Container>
        </Fragment>
    );
}

export default SharePostsPage;
