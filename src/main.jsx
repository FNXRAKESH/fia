import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactGA from "react-ga4";
import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactGA.initialize("G-PXCY38EP6D");
const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics);