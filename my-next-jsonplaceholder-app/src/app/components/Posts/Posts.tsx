import { Post } from "@/app/types";
import React from "react";

import styles from "./post.module.scss"
import Link from "next/link";
import AddIcon from "../AddIcon/AddIcon";

const PostElem = (props: Omit<Post, 'userId'>) => {
    return ( 
        <Link href={`/posts/${props.id}`} className={styles.postBox}>
            <p className="text-sm text-center mb-5">{props.title}</p>
            <p className="text-xs">{props.body}</p>
        </Link>
     );
}

const Posts = ({ data }: {data: Post[]}) => {
    return (
        <section className={styles.wrapper}>
            {data.length ? data.map(post => (
                <PostElem key={post.id} id={post.id} title={post.title} body={post.body}/>
            )) : null}
        </section>
    )
}
 
export default Posts;