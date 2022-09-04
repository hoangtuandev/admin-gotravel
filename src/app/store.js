import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import GlobalReducer from '../components/GlobalSlice';
import TypeTourismReducer from '../components/TypeTourism/TypeTourismSlice';
import VehicleReducer from '../components/Vehicle/VehicleSlice';
import TourReducer from '../components/Tour/TourSlice';
import VoucherReducer from '../components/Voucher/VoucherSlice';
import CalendarGuideReducer from '../components/CalendarGuide/CalendarGuideSlice';
import BookingTourReducer from '../components/BookingTour/BookingTourSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        global: GlobalReducer,
        typeTourism: TypeTourismReducer,
        vehicle: VehicleReducer,
        tour: TourReducer,
        voucher: VoucherReducer,
        calendarGuide: CalendarGuideReducer,
        bookingTour: BookingTourReducer,
    },
});
