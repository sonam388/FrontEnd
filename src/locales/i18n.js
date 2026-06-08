import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import hi from "./hi.json";

const savedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem("gousala-language")
    : null;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },

    hi: {
      translation: hi,
    },
  },

  lng: savedLanguage || "en",

  supportedLngs: ["en", "hi"],

  nonExplicitSupportedLngs: true,

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;