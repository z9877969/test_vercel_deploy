import React from "react";

const WaterProgressBar = ({ consumed, dailyNorm }) => {
  const progress = (consumed / dailyNorm) * 100;

  return (
    <div>
      <h3>Прогрес споживання</h3>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#76c7c0",
            height: "20px",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <p>
        {consumed} л / {dailyNorm} л
      </p>
    </div>
  );
};

export default WaterProgressBar;
