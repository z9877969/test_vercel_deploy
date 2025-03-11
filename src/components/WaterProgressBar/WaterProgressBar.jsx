import React from "react";
import style from "./WaterProgressBar.module.css";

const WaterProgressBar = ({ consumed, dailyNorm }) => {
  const progress = (consumed / dailyNorm) * 100;

  return (
    <div className={style.container}>
      <h3 className={style.textH3}>Today</h3>
      <div className={style.scaleContainer}>
        <div className={style.emptyScale}>
          <div
            className={style.progressScale}
            style={{
              width: `${progress}%`,
            }}
          ></div>
          <div
            className={style.scaleCircle}
            style={{
              left: `${progress}%`,
            }}
          ></div>

          <div
            className={style.scaleText}
            style={{
              left: `${progress}%`,
              transform: "translateX(-50%)",
            }}
          >
            {Math.round(progress)}%
          </div>
          {progress >= 10 && (
            <div
              className={style.scaleText}
              style={{
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
