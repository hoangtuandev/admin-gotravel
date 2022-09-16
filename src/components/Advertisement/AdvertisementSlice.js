import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    viewAdvertisement: false,
    addAdvertisement: false,
    updateAdvertisement: false,
    listAdvertisement: [],
    advertisementSelected: {},
};

export const AdvertisementSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {
        handleToggleViewAdvertisement: (state, action) => {
            state.viewAdvertisement = action.payload;
        },
        handleToggleAddAdvertisement: (state, action) => {
            state.addAdvertisement = action.payload;
        },
        handleToggleUpdateAdvertisement: (state, action) => {
            state.updateAdvertisement = action.payload;
        },
        handleSetListAdvertisement: (state, action) => {
            state.listAdvertisement = action.payload;
        },
        handleSelectAdvertisement: (state, action) => {
            state.advertisementSelected = action.payload;
        },
    },
});

export const {
    handleToggleViewAdvertisement,
    handleToggleAddAdvertisement,
    handleSetListAdvertisement,
    handleSelectAdvertisement,
    handleToggleUpdateAdvertisement,
} = AdvertisementSlice.actions;

export const viewAdvertisement = (state) =>
    state.advertisement.viewAdvertisement;

export const addAdvertisement = (state) => state.advertisement.addAdvertisement;

export const updateAdvertisement = (state) =>
    state.advertisement.updateAdvertisement;

export const listAdvertisement = (state) =>
    state.advertisement.listAdvertisement;

export const advertisementSelected = (state) =>
    state.advertisement.advertisementSelected;

export default AdvertisementSlice.reducer;
