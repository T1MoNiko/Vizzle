"use client"
import { countPosts, getPosts } from "@/redux/selectors/postsSelectors";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import SavedPosts from "../components/SavedPost/SavedPost";

const SavedPage = () => {
    // const countOfPosts = useSelector((state: RootState) => countPosts(state))
    const posts = useSelector((state: RootState) => getPosts(state))

    return ( 
       <>
        {
            posts ? <SavedPosts data={posts} /> : <h1>Nothing</h1>
        }
       </>
     );
}
 
export default SavedPage;