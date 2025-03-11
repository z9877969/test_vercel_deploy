import DailyInfo from "../DailyInfo/DailyInfo.jsx";
import css from "../WaterDetailedInfo/WaterDetailedInfo.module.css";

export default function WaterDetailedInfo() {
  // антону:
  // в цьому компоненті я так розумію потрібнно пов'язати дейлі інфо і календар. потрібно реалізувати логіку вибору дати
  // і передавати її у обидва компоненти. Я поки передаю поточний день
  return (
    <section className={css.container}>
      <DailyInfo pickTheDay={new Date()} />
    </section>
  );
}
