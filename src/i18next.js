import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locale/en.json';
import translationRU from './locale/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
});

export default i18n;
