import React from "react";
import WaterItem from "../WaterItem/WaterItem";
import styles from "./WaterList.module.css";

const waterData = [
  { id: 1, amount: 250, time: "07:00" },
  { id: 2, amount: 250, time: "11:00" },
  { id: 3, amount: 250, time: "14:00" },
];

const WaterList = () => {
  return (
    <div className={styles.waterList}>
      {waterData.map((item) => (
        <WaterItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default WaterList;
