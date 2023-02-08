import React from "react";
import styles from "./input.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={styles.main}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Input;
