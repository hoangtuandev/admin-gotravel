import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenGuidesSubmit: false,
    calendarSelected: {},
};

export const CalendarGuideSlice = createSlice({
    name: 'calendarGuide',
    initialState,
    reducers: {
        handleOpenGuidesSubmit: (state) => {
            state.isOpenGuidesSubmit = true;
        },
        handleCloseGuidesSubmit: (state) => {
            state.isOpenGuidesSubmit = false;
        },
        handleSelectCalendar: (state, action) => {
            state.calendarSelected = action.payload;
        },
    },
});

export const {
    handleOpenGuidesSubmit,
    handleCloseGuidesSubmit,
    handleSelectCalendar,
} = CalendarGuideSlice.actions;

export const calendarSelected = (state) => state.calendarGuide.calendarSelected;

export const isOpenGuidesSubmit = (state) =>
    state.calendarGuide.isOpenGuidesSubmit;

export default CalendarGuideSlice.reducer;
