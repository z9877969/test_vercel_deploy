import Calendar from "../Calendar/Calendar";
import css from "./MonthInfo.module.css";

const MonthInfo = () => {
  return (
    <div>
      <h2 className={css.header}>Month</h2>
      <Calendar />
    </div>
  );
};

export default MonthInfo;
