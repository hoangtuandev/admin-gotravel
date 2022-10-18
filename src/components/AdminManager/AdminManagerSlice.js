import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addAdminManager: false,
    updateProfile: false,
    adminSelected: {},
};

export const AdminManagerSlice = createSlice({
    name: 'adminManager',
    initialState,
    reducers: {
        handleToggleAddAdminManager: (state, action) => {
            state.addAdminManager = action.payload;
        },

        handleToggleUpdateProfile: (state, action) => {
            state.updateProfile = action.payload;
        },

        handleSelectProfileAdmin: (state, action) => {
            state.adminSelected = action.payload;
        },
    },
});

export const {
    handleToggleAddAdminManager,
    handleToggleUpdateProfile,
    handleSelectProfileAdmin,
} = AdminManagerSlice.actions;

export const addAdminManager = (state) => state.adminManager.addAdminManager;

export const updateProfile = (state) => state.adminManager.updateProfile;

export const adminSelected = (state) => state.adminManager.adminSelected;

export default AdminManagerSlice.reducer;
