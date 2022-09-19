import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    viewAdvertisement: false,
    addAdvertisement: false,
    updateAdvertisement: false,
    removeAdvertisement: false,
    activeAdvertisement: false,
    deleteAdvertisement: false,
    typeListAdvertisement: 1,
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
        handleToggleRemoveAdvertisement: (state, action) => {
            state.removeAdvertisement = action.payload;
        },
        handleToggleActiveAdvertisement: (state, action) => {
            state.activeAdvertisement = action.payload;
        },
        handleToggleDeleteAdvertisement: (state, action) => {
            state.deleteAdvertisement = action.payload;
        },
        handleSetListAdvertisement: (state, action) => {
            state.listAdvertisement = action.payload;
        },
        handleSelectAdvertisement: (state, action) => {
            state.advertisementSelected = action.payload;
        },
        handleChangeTypeAdvertisement: (state, action) => {
            state.typeListAdvertisement = action.payload;
        },
    },
});

export const {
    handleToggleViewAdvertisement,
    handleToggleAddAdvertisement,
    handleSetListAdvertisement,
    handleSelectAdvertisement,
    handleToggleUpdateAdvertisement,
    handleToggleRemoveAdvertisement,
    handleToggleActiveAdvertisement,
    handleToggleDeleteAdvertisement,
    handleChangeTypeAdvertisement,
} = AdvertisementSlice.actions;

export const viewAdvertisement = (state) =>
    state.advertisement.viewAdvertisement;

export const addAdvertisement = (state) => state.advertisement.addAdvertisement;

export const updateAdvertisement = (state) =>
    state.advertisement.updateAdvertisement;

export const removeAdvertisement = (state) =>
    state.advertisement.removeAdvertisement;

export const activeAdvertisement = (state) =>
    state.advertisement.activeAdvertisement;

export const deleteAdvertisement = (state) =>
    state.advertisement.deleteAdvertisement;

export const listAdvertisement = (state) =>
    state.advertisement.listAdvertisement;

export const advertisementSelected = (state) =>
    state.advertisement.advertisementSelected;

export const typeListAdvertisement = (state) =>
    state.advertisement.typeListAdvertisement;

export default AdvertisementSlice.reducer;
