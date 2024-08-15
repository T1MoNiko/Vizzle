import { Post } from "@/app/types";
import { notFound } from "next/navigation";
import React from "react";

import styles from "./post.module.scss"
import AddIcon from "@/app/components/AddIcon/AddIcon";

const getPost = async (slug: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if(!res.ok) {throw Error("Couldn't find post")}
    return res.json();
}

const PostPage: React.FC<{params: {id: string}}> = async ({ params }) => {

    const { id } = params;
    console.log(params)
    let post: Post | null = null;

    try {
       post = await getPost(id)
    } catch (error) {
        return notFound();
    }

    return ( 
        <>
            {post ? (
                <div className={styles.container}>
                    <AddIcon data={post}/>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            ) : null}
        </>
     );
}
 
export default PostPage;