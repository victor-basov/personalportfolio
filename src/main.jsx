import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// SASS styles are imported in App.jsx

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

