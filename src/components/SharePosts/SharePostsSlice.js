import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    typeListPosts: 1,
    baseURLServer: 'http://localhost:5000/static/',
    openView: false,
    postsSelected: null,
};

export const SharePostsSlice = createSlice({
    name: 'sharePosts',
    initialState,
    reducers: {
        handleChangeTypeListPosts: (state, action) => {
            state.typeListPosts = action.payload;
        },
        handleSelectPosts: (state, action) => {
            state.postsSelected = action.payload;
        },
        handleToggleViewPosts: (state, action) => {
            state.openView = action.payload;
        },
    },
});

export const {
    handleChangeTypeListPosts,
    handleSelectPosts,
    handleToggleViewPosts,
} = SharePostsSlice.actions;

export const typeListPosts = (state) => state.sharePosts.typeListPosts;

export const openView = (state) => state.sharePosts.openView;

export const postsSelected = (state) => state.sharePosts.postsSelected;

export const baseURLServer = (state) => state.sharePosts.baseURLServer;

export default SharePostsSlice.reducer;
