import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './routers';
import { Provider } from 'react-redux';
import store from "./store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
