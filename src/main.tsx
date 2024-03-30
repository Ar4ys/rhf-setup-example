import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './modules/app/app-screen';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
