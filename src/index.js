import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {persistor, store} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

