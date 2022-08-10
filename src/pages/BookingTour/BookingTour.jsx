import { React } from 'react';
import BookingTour from '../../components/BookingTour/BookingTour';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';

function BookingTourPage() {
    return (
        <div>
            <Sidenav></Sidenav>
            <Header></Header>
            <BookingTour></BookingTour>
        </div>
    );
}

export default BookingTourPage;
