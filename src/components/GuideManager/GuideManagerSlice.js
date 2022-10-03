import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProfile: false,
    updateProfile: false,
    viewProfile: false,
    lockProfile: false,
    activeProfile: false,
    currentList: 'actived',
    profileSelected: {},
};

export const GuideManagerSlice = createSlice({
    name: 'guideManager',
    initialState,
    reducers: {
        handleToggleAddProfile: (state, action) => {
            state.addProfile = action.payload;
        },
        handleToggleUpdateProfile: (state, action) => {
            state.updateProfile = action.payload;
        },
        handleToggleViewProfile: (state, action) => {
            state.viewProfile = action.payload;
        },
        handleToggleLockProfile: (state, action) => {
            state.lockProfile = action.payload;
        },
        handleToggleActiveProfile: (state, action) => {
            state.activeProfile = action.payload;
        },
        handleSetCurrentList: (state, action) => {
            state.currentList = action.payload;
        },
        handleSelectProfile: (state, action) => {
            state.profileSelected = action.payload;
        },
    },
});

export const {
    handleToggleAddProfile,
    handleToggleUpdateProfile,
    handleSelectProfile,
    handleToggleLockProfile,
    handleToggleViewProfile,
    handleSetCurrentList,
    handleToggleActiveProfile,
} = GuideManagerSlice.actions;

export const addProfile = (state) => state.guideManager.addProfile;
export const updateProfile = (state) => state.guideManager.updateProfile;
export const viewProfile = (state) => state.guideManager.viewProfile;
export const lockProfile = (state) => state.guideManager.lockProfile;
export const activeProfile = (state) => state.guideManager.activeProfile;
export const currentList = (state) => state.guideManager.currentList;
export const profileSelected = (state) => state.guideManager.profileSelected;

export default GuideManagerSlice.reducer;
