import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = "https://pi-coutries-production.up.railway.app"|| "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
