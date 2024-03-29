import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Keycloak from './services/KeycloakClient';
import HttpService from './services/HttpService';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

// Keycloak.initKeycloak(renderApp);
// HttpService.configure();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();