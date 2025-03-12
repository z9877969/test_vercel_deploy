import { useTranslation } from "react-i18next";
import s from "./LangButton.module.css";

const LangButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={s.langSwitcher}>
      <button className={s.langBtn} onClick={() => changeLanguage("en")}>EN</button>
      <button className={s.langBtn} onClick={() => changeLanguage("uk")}>UA</button>
    </div>
  );
};

export default LangButton;
