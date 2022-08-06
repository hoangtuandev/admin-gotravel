import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import GlobalReducer from '../components/GlobalSlice';
import TypeTourismReducer from '../components/TypeTourism/TypeTourismSlice';
import VehicleReducer from '../components/Vehicle/VehicleSlice';
import TourReducer from '../components/Tour/TourSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        global: GlobalReducer,
        typeTourism: TypeTourismReducer,
        vehicle: VehicleReducer,
        tour: TourReducer,
    },
});
