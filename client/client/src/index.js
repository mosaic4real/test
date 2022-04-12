import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App.js';
import { Provider } from "react-redux";
import store from "./store/store";
import './Index.css';


ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Provider store= {store}>
  <App/>
  </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);


