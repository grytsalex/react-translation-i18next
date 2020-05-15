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
      resources: {
        en: {
          translation: {
              page:{
              "teamPage": "This is a Team page",
              "homePage": "This is a Home page",
              "aboutPage": "This is a About page"
              },
            button: {
              "englishBtn": "English",
              "russianBtn": "Russian"
            },
            navMenu: {
              "navHome": "Home",
              "navTeam": "Team",
              "navAbout": "About"
            }
          }
        },
        ru: {
          translation: {
            page: {
            "teamPage": "Это страница команды",
            "homePage": "Это домашняя страница",
            "aboutPage": "Это страница для справки"
            },
            button: {
              "englishBtn": "Английский",
              "russianBtn": "Русский"
            },
            navMenu: {
              "navHome": "Домой",
              "navTeam": "Команда",
              "navAbout": "Справка"
            }
          }
        }
      }
    })

export default i18n;

