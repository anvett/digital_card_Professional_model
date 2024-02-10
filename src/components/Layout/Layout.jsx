import React from "react";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import CustomNavbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      
      <main className={styles.layout}>{children} </main>
      
    </div>
  );
}
