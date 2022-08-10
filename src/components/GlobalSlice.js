import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    labelOption: '',
    isOpenBackdrop: false,
};

export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLabelOption: (state, action) => {
            state.labelOption = action.payload;
        },
        handleCloseBackdrop: (state) => {
            state.isOpenBackdrop = false;
        },
        handleOpenBackdrop: (state) => {
            state.isOpenBackdrop = true;
        },
        // handleToggleBackdrop: (state) => {
        //     state.isOpenBackdrop = !state.isOpenBackdrop;
        // },
    },
});

export const { setLabelOption, handleCloseBackdrop, handleOpenBackdrop } =
    GlobalSlice.actions;

export const selectLabelOption = (state) => state.global.labelOption;

export const isOpenBackdrop = (state) => state.global.isOpenBackdrop;

export default GlobalSlice.reducer;
