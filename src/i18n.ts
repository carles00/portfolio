import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from "../public/locales/en/translation.json";
import esJSON from "../public/locales/es/translation.json"

import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // http backend options
      loadPath: 'portfolio/locales/{{lng}}/{{ns}}.json',
    },
  });


export default i18n;