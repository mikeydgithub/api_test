import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// getting root from public/index.html
// all of the logic goes inside the root component
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// load components
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
