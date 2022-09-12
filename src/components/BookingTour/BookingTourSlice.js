import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookingTourList: [],
    currentTab: 1,
    viewBookingTour: false,
    bookingSelected: {},
    paramsBookingFilter: {
        price: [0, 25000000],
        departure: new Date().getTime(),
        time: new Date().getTime(),
        allPrice: true,
        allDeparture: true,
        allTime: true,
    },
};

export const BookingTourSlice = createSlice({
    name: 'bookingTour',
    initialState,
    reducers: {
        handleSetBookingTourList: (state, action) => {
            state.bookingTourList = action.payload;
        },
        handleChangeCurrentTab: (state, action) => {
            state.currentTab = action.payload;
        },
        handleTooggleViewBookingTour: (state, action) => {
            state.viewBookingTour = action.payload;
        },
        handleSelectBookingTour: (state, action) => {
            state.bookingSelected = action.payload;
        },
        handleChangeParamsFilter: (state, action) => {
            state.paramsBookingFilter.price = action.payload.price;
            state.paramsBookingFilter.departure = action.payload.departure;
            state.paramsBookingFilter.time = action.payload.time;
            state.paramsBookingFilter.allPrice = action.payload.allPrice;
            state.paramsBookingFilter.allDeparture =
                action.payload.allDeparture;
            state.paramsBookingFilter.allTime = action.payload.allTime;
        },
    },
});

export const {
    handleSetBookingTourList,
    handleChangeCurrentTab,
    handleTooggleViewBookingTour,
    handleSelectBookingTour,
    handleChangeParamsFilter,
} = BookingTourSlice.actions;

export const bookingTourList = (state) => state.bookingTour.bookingTourList;
export const currentTab = (state) => state.bookingTour.currentTab;
export const viewBookingTour = (state) => state.bookingTour.viewBookingTour;
export const bookingSelected = (state) => state.bookingTour.bookingSelected;
export const paramsBookingFilter = (state) =>
    state.bookingTour.paramsBookingFilter;

export default BookingTourSlice.reducer;
