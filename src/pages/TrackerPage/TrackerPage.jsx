import React from "react";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import s from "./TrackerPage.module.css";

const TrackerPage = () => {
  return (
    <div className={s.trackerPageWrapper}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
