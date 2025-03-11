import { useState, useEffect } from "react";
import css from "./Calendar.module.css";

const Calendar = ({ waterData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    setDays(Array.from({ length: lastDay }, (_, i) => i + 1));
  };

  //   const handleDateClick = async (day) => {
  //     const dateString = `${currentDate.getFullYear()}-${String(
  //       currentDate.getMonth() + 1
  //     ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  //     console.log("Вибрана дата:", dateString);

  //     try {
  //       const response = await fetch(`/api/water-tracker?date=${dateString}`);
  //       const data = await response.json();
  //       console.log("Дані з бекенду:", data);
  //     } catch (error) {
  //       console.error("Помилка отримання даних", error);
  //     }
  //   };

  return (
    <div className={css.container}>
      <h2>
        {currentDate.toLocaleString("uk-UA", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <div className={css.grid}>
        {days.map((day) => {
          const dateKey = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          //   const waterPercent = waterData[dateKey] || 0;
          return (
            <div
              key={day}
              className={css.day}
              //   className={`calendar-day ${
              //     waterPercent === 100 ? "full" : "partial"
              //   }`}
              //   onClick={() => handleDateClick(day)}
            >
              {day}
              {/* <div className="water-percent">{waterPercent}%</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
