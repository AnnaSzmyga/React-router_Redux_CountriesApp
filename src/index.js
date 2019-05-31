import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store/index';
import DevTools from './devTools';
import {getCountries} from './actions/actions.js';

ReactDOM.render(
    <Provider store={store}>
        <>
            <App />
            <DevTools />
        </>
    </Provider>, 
    document.getElementById('root')
);

store.dispatch(getCountries());


