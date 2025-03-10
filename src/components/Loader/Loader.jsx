import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <FontAwesomeIcon icon={faBottleWater} className={styles.icon} size="3x" />
    </div>
  );
};

export default Loader;
