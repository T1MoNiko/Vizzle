import React from "react";
import styles from "./savedPost.module.scss"
import { Post } from "@/app/types";

const SavedPost = (props: Omit<Post, 'userId' | 'id'>) => {
    return (
        <div className={styles.savedPost}>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
}

const SavedPosts = ({data} : {data: Omit<Post, 'userId'>[]} ) => {
    return ( 
        <div className={styles.wrapper}>
            {
                data.length ? data.map(item => (
                    <SavedPost key={item.id} title={item.title} body={item.body} />
                )
            ) : null
            }
        </div>
     );
}
 
export default SavedPosts;