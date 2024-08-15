"use client"

import { useGetPostsQuery } from "@/redux/slices/postsApiSlice";
import React from "react";
import Posts from "../components/Posts/Posts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loading from "../components/Loading/Loading";

const PostsPage = () => {
    const { isLoading, isError, data } = useGetPostsQuery()

    if (isError) {return <h1>Error fetching data...</h1>}
    return ( 
        <>
            {isLoading ? <Loading /> : data ? <Posts data={data}/>: null}
        </>
     );
}
 
export default PostsPage;