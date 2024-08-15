"use client"

import React from "react";
import styles from "./addIcon.module.scss"

import { addPost } from "@/redux/slices/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Post } from "@/app/types";

const AddIcon = ({data} : {data: Post}) => {
    const dispatch: AppDispatch = useDispatch()

    return ( 
        <>
            <svg onClick={(e) => {dispatch(addPost(data))}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className={`bi bi-plus-circle ${styles.addIcon}`} viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
        </>
     );
}
 
export default AddIcon;