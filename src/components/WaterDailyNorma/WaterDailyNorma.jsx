import React from "react";
import style from "./WaterDailyNorma.module.css";

const WaterDailyNorma = ({ dailyNorm }) => {
  return (
    <div className={style.normContainer}>
      <h3 className={style.textH3}>{dailyNorm} L </h3>
      <p className={style.textDailyNorm}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
