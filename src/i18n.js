import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Local translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Shake'n Sip",
      favorites: "Favorites",
      allCocktails: "All Cocktails",
      filter: "Filter",
    },
  },
  tr: {
    translation: {
      welcome: "Shake'n Sip'e Hoşgeldin",
      favorites: "Favoriler",
      allCocktails: "Tüm Kokteyller",
      filter: "Filtrele",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // localStorage’dan oku
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;