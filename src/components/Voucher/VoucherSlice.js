import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenViewDialog: false,
    isOpenDeleteDialog: false,
    isOpenUpdateDialog: false,
    isOpenAddDialog: true,
    itemSelected: {},
};

export const VoucherSlice = createSlice({
    name: 'voucher',
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
} = VoucherSlice.actions;

export const isOpenViewDialog = (state) => state.voucher.isOpenViewDialog;

export const isOpenDeleteDialog = (state) => state.voucher.isOpenDeleteDialog;

export const isOpenUpdateDialog = (state) => state.voucher.isOpenUpdateDialog;

export const isOpenAddDialog = (state) => state.voucher.isOpenAddDialog;

export const itemSelected = (state) => state.voucher.itemSelected;

export default VoucherSlice.reducer;
