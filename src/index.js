import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import { lang } from './lang/lang.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

i18n
  .use(initReactI18next)
  .init({
    resources: lang,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);

