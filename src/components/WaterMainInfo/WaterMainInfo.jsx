import React, { useState } from "react";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterModal from "../WaterModal/WaterModal";

const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dailyNorm = 2.5;
  const consumed = 1.2;

  const handleAddWaterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <WaterDailyNorma dailyNorm={dailyNorm} />
      <WaterProgressBar consumed={consumed} dailyNorm={dailyNorm} />
      <AddWaterBtn onClick={handleAddWaterClick} />
      {isModalOpen && <WaterModal onClose={handleCloseModal} />}
    </div>
  );
};

export default WaterMainInfo;
