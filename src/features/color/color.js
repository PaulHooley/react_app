import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorChange, reset } from "./colorSlice";
import { update } from "./textSlice";
import styles from "./Counter.module.css";

export function Color() {
  const dispatch = useDispatch();
  const isColorful = useSelector((state) => state.color.colorful);
  const textLength = useSelector((state) => state.text.textLength);
  const textString = useSelector((state) => state.text.text);
  const reverseString = useSelector((state) => state.text.reverseText);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Change Color"
          onClick={() => dispatch(colorChange())}
        >
          Change Color
        </button>
        <button
          className={styles.button}
          aria-label="Reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <div className={isColorful ? styles.square1 : styles.square} />
        <div className={isColorful ? styles.square2 : styles.square} />
      </div>
      <div className={styles.row}>
        <textarea
          id="text"
          className={styles.textbox}
          defaultValue={textString}
          onChange={(t) => dispatch(update(t.target.value))}
        />
        <textarea
          readOnly
          id="text"
          value={reverseString}
          className={styles.textbox}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{textLength}</span>
      </div>
    </div>
  );
}
