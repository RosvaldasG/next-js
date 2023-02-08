import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <Link className={styles.links} href="/posts/signup/">
        SIGN UP
      </Link>
      <div className={styles.title}>BOARDER GAMES</div>
      <Link className={styles.links} href="">
        LOGIN
      </Link>
      <Link href="/posts/first-post">posts</Link>
    </div>
  );
};

export default Navbar;
