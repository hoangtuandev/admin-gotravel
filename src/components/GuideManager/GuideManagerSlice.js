import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProfile: true,
};

export const GuideManagerSlice = createSlice({
    name: 'guideManager',
    initialState,
    reducers: {
        handleToggleAddProfile: (state, action) => {
            state.addProfile = action.payload;
        },
    },
});

export const { handleToggleAddProfile } = GuideManagerSlice.actions;

export const addProfile = (state) => state.guideManager.addProfile;

export default GuideManagerSlice.reducer;
