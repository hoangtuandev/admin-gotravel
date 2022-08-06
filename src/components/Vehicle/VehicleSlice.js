import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemSelected: {},
    isOpenViewDialog: false,
    isOpenDeleteDialog: false,
    isOpenUpdateDialog: false,
    isOpenAddDialog: false,
};

export const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        handleSetItemSelected: (state, action) => {
            state.itemSelected = action.payload;
        },

        handleOpenViewDialog: (state) => {
            state.isOpenViewDialog = true;
        },

        handleCloseViewDialog: (state) => {
            state.isOpenViewDialog = false;
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

export const isOpenViewDialog = (state) => state.vehicle.isOpenViewDialog;

export const isOpenDeleteDialog = (state) => state.vehicle.isOpenDeleteDialog;

export const isOpenUpdateDialog = (state) => state.vehicle.isOpenUpdateDialog;

export const isOpenAddDialog = (state) => state.vehicle.isOpenAddDialog;

export const {
    handleSetItemSelected,
    handleOpenViewDialog,
    handleCloseViewDialog,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    handleOpenUpdateDialog,
    handleCloseUpdateDialog,
    handleOpenAddDialog,
    handleCloseAddDialog,
} = VehicleSlice.actions;

export const itemSelected = (state) => state.vehicle.itemSelected;

export default VehicleSlice.reducer;
