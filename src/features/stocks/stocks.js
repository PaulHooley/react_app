import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Stocks.module.css";
import { getStock } from "./stockSlice.js";

export function Stock() {
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.stock);
  const shareOutstanding = useSelector((state) => state.stock.shareOutstanding);

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.value}>Stock Symbol: </div>
        <input
          className={styles.textbox}
          type="text"
          name="text"
          id="text"
          defaultValue="APPL"
        />
        <button
          className={styles.button}
          aria-label="Submit"
          onClick={() =>
            dispatch(getStock(document.getElementById("text").value))
          }
        >
          Submit
        </button>
      </div>
      <div className={styles.row}>
        <div className={styles.value}>{stock}</div>
        <div className={styles.value}>{shareOutstanding}</div>
      </div>
    </div>
  );
}
