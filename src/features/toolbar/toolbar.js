import React from "react";
import { Link } from "react-router-dom";
import styles from "./Toolbar.module.css";

export function Toolbar() {
  return (
    <div>
      <div className={styles.row}>
        <Link to="/home" className={styles.button}>
          Home
        </Link>
        <Link to="/color" className={styles.button}>
          Color
        </Link>
      </div>
    </div>
  );
}
