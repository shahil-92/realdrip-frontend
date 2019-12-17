import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store/configureStore';
import 'react-toastify/dist/ReactToastify.min.css'; 
// import configureStore from './configureStore';
import './assets/styles.css';
// const store = configureStore();

render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
