import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import CalendarGuide from '../../components/CalendarGuide/CalendarGuide';

function CalendarGuidePage() {
    return (
        <Fragment>
            <Sidenav></Sidenav>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="xl">
                <CalendarGuide></CalendarGuide>
            </Container>
        </Fragment>
    );
}

export default CalendarGuidePage;
