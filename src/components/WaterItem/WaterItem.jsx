import React, { useState } from "react";
import WaterModal from "../WaterModal/WaterModal";
// import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import styles from "./WaterItem.module.css";

const WaterItem = ({ data }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className={styles.waterItem}>
      <div className={styles.icon}>🥤</div>
      <p className={styles.amount}>{data.amount} ml</p>
      <p className={styles.time}>{data.time}</p>
      <div className={styles.actions}>
        <button onClick={() => setIsEditOpen(true)}>✏️</button>
        <button onClick={() => setIsDeleteOpen(true)}>🗑️</button>
      </div>
      {isEditOpen && <WaterModal onClose={() => setIsEditOpen(false)} />}
      {isDeleteOpen && (
        <DeleteWaterModal onClose={() => setIsDeleteOpen(false)} />
      )}
    </div>
  );
};

export default WaterItem;
