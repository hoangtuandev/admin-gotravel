import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addAdminManager: false,
    updateProfile: false,
    lockProfile: false,
    activeProfile: false,
    showAccountType: 'actived',
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

        handleToggleLockProfile: (state, action) => {
            state.lockProfile = action.payload;
        },

        handleToggleActiveProfile: (state, action) => {
            state.activeProfile = action.payload;
        },

        handleSelectProfileAdmin: (state, action) => {
            state.adminSelected = action.payload;
        },

        handleChangeTypeAccounts: (state, action) => {
            state.showAccountType = action.payload;
        },
    },
});

export const {
    handleToggleAddAdminManager,
    handleToggleUpdateProfile,
    handleToggleLockProfile,
    handleToggleActiveProfile,
    handleSelectProfileAdmin,
    handleChangeTypeAccounts,
} = AdminManagerSlice.actions;

export const addAdminManager = (state) => state.adminManager.addAdminManager;

export const updateProfile = (state) => state.adminManager.updateProfile;

export const lockProfile = (state) => state.adminManager.lockProfile;

export const activeProfile = (state) => state.adminManager.activeProfile;

export const adminSelected = (state) => state.adminManager.adminSelected;

export const showAccountType = (state) => state.adminManager.showAccountType;

export default AdminManagerSlice.reducer;
