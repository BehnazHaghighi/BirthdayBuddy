import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';

// Register the service worker. if available in browser.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch(function (error) {
      console.error('ServiceWorker registration failed: ', error);
    });
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
