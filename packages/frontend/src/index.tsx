import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import AppContainer from './modules/app';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
