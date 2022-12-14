import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenViewDialog: false,
    isOpenDeleteDialog: false,
    isOpenUpdateDialog: false,
    isOpenAddDialog: false,
    isOpenBackdrop: false,
    itemSelected: {},
};

export const TypeTourismSlice = createSlice({
    name: 'typeTourism',
    initialState,
    reducers: {
        // handleGetAllTypeTourism: (state) => {},
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
        handleOpenBackdrop: (state) => {
            state.isOpenBackdrop = true;
        },
        handleCloseBackdrop: (state) => {
            state.isOpenBackdrop = false;
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
    handleOpenBackdrop,
    handleCloseBackdrop,
} = TypeTourismSlice.actions;

export const isOpenViewDialog = (state) => state.typeTourism.isOpenViewDialog;

export const isOpenDeleteDialog = (state) =>
    state.typeTourism.isOpenDeleteDialog;

export const isOpenUpdateDialog = (state) =>
    state.typeTourism.isOpenUpdateDialog;

export const isOpenAddDialog = (state) => state.typeTourism.isOpenAddDialog;

export const isOpenBackdrop = (state) => state.typeTourism.isOpenBackdrop;

export const itemSelected = (state) => state.typeTourism.itemSelected;

export default TypeTourismSlice.reducer;
