// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr.json';
import translationNL from './locales/nl.json';

const resources = {
  fr: {
    translation: translationFR
  },
  nl: {
    translation: translationNL
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr', // langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
