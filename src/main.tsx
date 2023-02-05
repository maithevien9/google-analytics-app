import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';

ReactGA.initialize('UA-XXXX');
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
