import React from "react";
import UserPanel from "../UserPanel/UserPanel";
import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";

import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <section className={css.sectionWrapper}>
      <div className={"container"}>
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
