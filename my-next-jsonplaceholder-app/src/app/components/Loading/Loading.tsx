import React from "react";
import styles from "./loading.module.scss"

const Loading = () => {
    return ( 
        <div className="flex justify-center items-center w-full grow">
            <div className={styles.scene}>
                <div className={styles.cube}>
                    <div className={`${styles.face + ' ' + styles.front}`}></div>
                    <div className={`${styles.face + ' ' + styles.right}`}></div>
                    <div className={`${styles.face + ' ' + styles.bottom}`}></div>
                    <div className={`${styles.face + ' ' + styles.top}`}></div>
                    <div className={`${styles.face + ' ' + styles.left}`}></div>
                    <div className={`${styles.face + ' ' + styles.back}`}></div>
                </div>
            </div>
        </div>
     );
}
 
export default Loading;