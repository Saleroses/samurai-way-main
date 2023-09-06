import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/Redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


    ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
        document.getElementById('root')
    );

