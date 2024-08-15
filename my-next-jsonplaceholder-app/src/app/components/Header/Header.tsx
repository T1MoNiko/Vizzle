import React from "react";
import styles from "./header.module.css"
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    const navTitles = [
        {title: "Home", link: "/"},
        {title: "Posts", link: "/posts"}, 
        {title: "Saved", link: "/saved"}
    ]

    return ( 
        <header className={styles.header}>
            <div className={styles.logo__box}>
                <Image width={60} height={60} src="/img/logo.png" className={styles.logo} loading="lazy" alt="" />
            </div>
            <nav className="w-full flex justify-center m-auto">
                <ul className="flex justify-between h-full w-1/2 items-center">
                    {navTitles.map(item => 
                        (<Link key={item.title} href={item.link}><li>{item.title}</li></Link>)
                    )}
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;