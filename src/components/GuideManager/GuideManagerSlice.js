import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProfile: false,
    updateProfile: false,
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
        handleSelectProfile: (state, action) => {
            state.profileSelected = action.payload;
        },
    },
});

export const {
    handleToggleAddProfile,
    handleToggleUpdateProfile,
    handleSelectProfile,
} = GuideManagerSlice.actions;

export const addProfile = (state) => state.guideManager.addProfile;
export const updateProfile = (state) => state.guideManager.updateProfile;
export const profileSelected = (state) => state.guideManager.profileSelected;

export default GuideManagerSlice.reducer;
