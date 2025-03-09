import React from "react";
import ChooseDate from "../ChooseDate/ChooseDate";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterList from "../WaterList/WaterList";
import styles from "./DailyInfo.module.css";

const DailyInfo = () => {
  return (
    <section className={styles.dailyInfo}>
      <div className={styles.header}>
        <h2>
          Hello, <span className={styles.bold}>Nadia!</span>
        </h2>
        <div className={styles.profile}>
          <span>Nadia</span>
          <img src="/path-to-profile-image.jpg" alt="Profile" />
        </div>
      </div>
      <div className={styles.todaySection}>
        <h3>Today</h3>
        <WaterList />
        <AddWaterBtn />
      </div>
      <ChooseDate />
    </section>
  );
};

export default DailyInfo;
