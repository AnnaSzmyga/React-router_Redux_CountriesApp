import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import store from './store/index';
import DevTools from './devTools';
import {getCountries} from './actions/actions.js';


ReactDOM.render(
    <Provider store={store}>
        <>
            <Router history={hashHistory} routes={routes} />
            <DevTools />
        </>
    </Provider>, 
    document.getElementById('root')
);

store.dispatch(getCountries());



