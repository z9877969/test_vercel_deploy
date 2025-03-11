import React from "react";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import s from "./TrackerPage.module.css";
import UserSettingsModal from "../../components/UserSettingsModal/UserSettingsModal.jsx";

const TrackerPage = () => {
  return (
    <div className={s.trackerPageWrapper}>
      <UserSettingsModal />
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
