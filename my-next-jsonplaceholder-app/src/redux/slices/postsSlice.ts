import { Post } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {posts: Post[]} = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost (state, action) {
            state.posts.push(action.payload)
        }
    }
})

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer