import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uk from "./uk.json";
import en from "./en.json";

const resources = {
  en: { translation: en },
  uk: { translation: uk },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"], 
    },
    interpolation: { escapeValue: false },
  });


export default i18n;
