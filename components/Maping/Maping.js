import React from "react";
import styles from "./styles.module.css";

const Maping = ({ names }) => {
  return (
    <div className={styles.main}>
      {names.map((n) => {
        return (
          <div className={styles.box}>
            <div>{`${n.description} ${n.title} ${n.brand}`}</div>
            <div className={styles.imgBox}>
              <img src={n.images[2]} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Maping;
