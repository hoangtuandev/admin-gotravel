import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addAdminManager: false,
};

export const AdminManagerSlice = createSlice({
    name: 'adminManager',
    initialState,
    reducers: {
        handleToggleAddAdminManager: (state, action) => {
            state.addAdminManager = action.payload;
        },
    },
});

export const { handleToggleAddAdminManager } = AdminManagerSlice.actions;

export const addAdminManager = (state) => state.adminManager.addAdminManager;

export default AdminManagerSlice.reducer;
