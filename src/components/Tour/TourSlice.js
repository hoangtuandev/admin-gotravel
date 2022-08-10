import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenViewDialog: false,
    isOpenStopDialog: false,
    isOpenUpdateDialog: false,
    isOpenAddDialog: false,
    isShowStopedTour: false,
    isOpenBackdrop: false,
    itemSelected: {},
};

export const TourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        handleOpenViewDialog: (state) => {
            state.isOpenViewDialog = true;
        },
        handleCloseViewDialog: (state) => {
            state.isOpenViewDialog = false;
        },
        handleSetItemSelected: (state, action) => {
            state.itemSelected = action.payload;
        },

        handleOpenStopDialog: (state) => {
            state.isOpenStopDialog = true;
        },
        handleCloseStopDialog: (state) => {
            state.isOpenStopDialog = false;
        },
        handleOpenUpdateDialog: (state) => {
            state.isOpenUpdateDialog = true;
        },
        handleCloseUpdateDialog: (state) => {
            state.isOpenUpdateDialog = false;
        },
        handleOpenAddDialog: (state) => {
            state.isOpenAddDialog = true;
        },
        handleCloseAddDialog: (state) => {
            state.isOpenAddDialog = false;
        },

        handleOpenStopedTour: (state) => {
            state.isShowStopedTour = true;
        },
        handleCloseStopedTour: (state) => {
            state.isShowStopedTour = false;
        },
        handleCloseBackdrop: (state) => {
            state.isOpenBackdrop = false;
        },
        handleOpenBackdrop: (state) => {
            state.isOpenBackdrop = true;
        },
    },
});

export const {
    handleOpenViewDialog,
    handleCloseViewDialog,
    handleSetItemSelected,
    handleOpenStopDialog,
    handleCloseStopDialog,
    handleOpenUpdateDialog,
    handleCloseUpdateDialog,
    handleOpenAddDialog,
    handleCloseAddDialog,
    handleOpenStopedTour,
    handleCloseStopedTour,
    handleCloseBackdrop,
    handleOpenBackdrop,
} = TourSlice.actions;

export const isOpenViewDialog = (state) => state.tour.isOpenViewDialog;

export const isOpenStopDialog = (state) => state.tour.isOpenStopDialog;

export const isOpenUpdateDialog = (state) => state.tour.isOpenUpdateDialog;

export const isOpenAddDialog = (state) => state.tour.isOpenAddDialog;

export const isOpenBackdrop = (state) => state.tour.isOpenBackdrop;

export const isShowStopedTour = (state) => state.tour.isShowStopedTour;

export const itemSelected = (state) => state.tour.itemSelected;

export default TourSlice.reducer;
