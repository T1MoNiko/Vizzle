import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createSelector } from "reselect";


export const getPosts = ((state: RootState)=> state.posts.posts)


export const countPosts = createSelector(
    [getPosts],
    (items) => items.reduce((acc, next) => acc + next.body.length, 0)
)