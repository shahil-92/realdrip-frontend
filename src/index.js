import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store/configureStore';
import 'react-toastify/dist/ReactToastify.min.css'; 
// import configureStore from './configureStore';
// const store = configureStore();
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
