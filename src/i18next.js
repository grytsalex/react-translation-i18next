import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)  // добаляет модуль react i18next
  // .use(LanguageDetector)  //модуль который позволяет остследить язык в браузере(например из cookies, localStorage)
    .init({
      fallbackLng: 'en',  // для указания резервного языка
      debug: true,  // покажет отсутствующий ключ перевода в консоли
      lng: 'en', // используемый язык
      resources: {}})


export default i18n;

