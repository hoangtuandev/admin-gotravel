import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenViewDialog: false,
    isOpenDeleteDialog: false,
    isOpenUpdateDialog: false,
    isOpenAddDialog: false,
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

        handleOpenDeleteDialog: (state) => {
            state.isOpenDeleteDialog = true;
        },
        handleCloseDeleteDialog: (state) => {
            state.isOpenDeleteDialog = false;
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
    },
});

export const {
    handleOpenViewDialog,
    handleCloseViewDialog,
    handleSetItemSelected,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    handleOpenUpdateDialog,
    handleCloseUpdateDialog,
    handleOpenAddDialog,
    handleCloseAddDialog,
} = TourSlice.actions;

export const isOpenViewDialog = (state) => state.tour.isOpenViewDialog;

export const isOpenDeleteDialog = (state) => state.tour.isOpenDeleteDialog;

export const isOpenUpdateDialog = (state) => state.tour.isOpenUpdateDialog;

export const isOpenAddDialog = (state) => state.tour.isOpenAddDialog;

export const itemSelected = (state) => state.tour.itemSelected;

export default TourSlice.reducer;
