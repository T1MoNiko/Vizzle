import React from "react";
import styles from "./page.module.scss"

export default function Home() {
  return ( 
      <article className={styles.article}>
        <div>
          <h1>Mini-project!</h1>
          <p>Stack: NextJS, RTK Query, Redux, Reselect, Tailwild. Data from jsonplaceholder.</p>
        </div>   
      </article>
   );
}
