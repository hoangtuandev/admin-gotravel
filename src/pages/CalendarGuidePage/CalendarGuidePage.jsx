import { React } from 'react';
import CalendarGuide from '../../components/CalendarGuide/CalendarGuide';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';

function CalendarGuidePage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <CalendarGuide></CalendarGuide>
        </div>
    );
}

export default CalendarGuidePage;
