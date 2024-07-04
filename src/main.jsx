import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/redux.js';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
         <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>
);