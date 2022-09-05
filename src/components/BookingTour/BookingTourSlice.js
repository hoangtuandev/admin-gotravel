import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookingTourList: [],
    currentTab: 1,
    viewBookingTour: false,
    bookingSelected: {},
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
    },
});

export const {
    handleSetBookingTourList,
    handleChangeCurrentTab,
    handleTooggleViewBookingTour,
    handleSelectBookingTour,
} = BookingTourSlice.actions;

export const bookingTourList = (state) => state.bookingTour.bookingTourList;
export const currentTab = (state) => state.bookingTour.currentTab;
export const viewBookingTour = (state) => state.bookingTour.viewBookingTour;
export const bookingSelected = (state) => state.bookingTour.bookingSelected;

export default BookingTourSlice.reducer;
