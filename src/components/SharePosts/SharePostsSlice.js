import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    typeListPosts: 1,
    baseURLServer: 'http://localhost:5000/static/',
};

export const SharePostsSlice = createSlice({
    name: 'sharePosts',
    initialState,
    reducers: {
        handleChangeTypeListPosts: (state, action) => {
            state.typeListPosts = action.payload;
        },
    },
});

export const { handleChangeTypeListPosts } = SharePostsSlice.actions;

export const typeListPosts = (state) => state.sharePosts.typeListPosts;

export const baseURLServer = (state) => state.sharePosts.baseURLServer;

export default SharePostsSlice.reducer;
