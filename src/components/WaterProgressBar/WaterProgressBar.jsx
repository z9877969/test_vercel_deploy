import React from "react";
import style from "./WaterProgressBar.module.css";

const WaterProgressBar = ({ consumed, dailyNorm }) => {
  const progress = (consumed / dailyNorm) * 100;

  return (
    <div className={style.container}>
      <h3 className={style.textH3}>Today</h3>
      <div className={style.scaleContainer}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#F0EFF4",
            borderRadius: "3px",
            position: "relative",
            height: "6px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#9BE1A0",
              height: "6px",
              borderRadius: "3px",
            }}
          ></div>
          <div
            style={{
              width: "12px",
              backgroundColor: "white",
              height: "12px",
              borderRadius: "50%",
              border: "1px solid #9BE1A0",
              position: "absolute",
              top: "50%",
              left: `${progress}%`,
              transform: "translate(-50%, -50%)",
              transition: "left 0.3s ease",
            }}
          ></div>

          <div
            className={style.scaleText}
            style={{
              position: "absolute",
              top: "16px", // Відстань від бігунка до тексту
              left: `${progress}%`,
              transform: "translateX(-50%)", // Центруємо текст під бігунком
            }}
          >
            {Math.round(progress)}%
          </div>
          {progress >= 10 && (
            <div
              className={style.scaleText}
              style={{
                position: "absolute",
                top: "16px",
                left: "0",
              }}
            >
              0%
            </div>
          )}
          {progress <= 90 && (
            <div
              className={style.scaleText}
              style={{
                position: "absolute",
                top: "16px",
                right: "0",
              }}
            >
              100%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
