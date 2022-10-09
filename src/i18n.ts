import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import userInterfaceEN from "./locales/en/userInterface";
import userInterfaceJP from "./locales/jp/userInterface";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...userInterfaceEN,
      },
    },
    jp: {
      translation: {
        ...userInterfaceJP,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
