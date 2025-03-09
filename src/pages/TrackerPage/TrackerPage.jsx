import React from "react";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
// import WaterDetailedInfo from "../../components/WaterDetailedInfo";
import s from "./TrackerPage.module.css";

const TrackerPage = () => {
  return (
    <div className={s.wrapperPage}>
      <WaterMainInfo />
      {/* <WaterDetailedInfo /> */}
    </div>
  );
};

export default TrackerPage;
