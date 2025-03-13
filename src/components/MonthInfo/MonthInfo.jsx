import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
// import css from "./MonthInfo.module.css";

const MonthInfo = (waterData) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div>
      <CalendarPagination
        currentDate={currentDate}
        onChangeMonth={setCurrentDate}
      />
      <Calendar currentDate={currentDate} waterData={waterData} />
    </div>
  );
};

export default MonthInfo;
