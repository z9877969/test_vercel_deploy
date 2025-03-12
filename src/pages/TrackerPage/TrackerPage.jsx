import React from "react";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import UserPanel from "../../components/UserPanel/UserPanel.jsx";

const TrackerPage = () => {
  return (
    <div>
      <h1>Трекер води</h1>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <UserPanel />
    </div>
  );
};

export default TrackerPage;
