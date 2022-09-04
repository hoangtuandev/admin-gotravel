import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookingTourList: [],
    currentTab: 1,
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
    },
});

export const { handleSetBookingTourList, handleChangeCurrentTab } =
    BookingTourSlice.actions;

export const bookingTourList = (state) => state.bookingTour.bookingTourList;
export const currentTab = (state) => state.bookingTour.currentTab;

export default BookingTourSlice.reducer;
