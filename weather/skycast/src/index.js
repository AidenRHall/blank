import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import App from './components/App';

const preloadedState = {};
const store = configureStore(preloadedState);

const rootEl = document.getElementById('root');
render(
    <Provider store={ store }>
        <App/>
    </Provider>
    , rootEl);