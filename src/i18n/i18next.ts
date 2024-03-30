import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';

const resources = {
  en: { translation: en },
} as const;

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  returnObjects: true,
});

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
    returnObjects: true;
  }
}
