import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "remixicon/fonts/remixicon.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();