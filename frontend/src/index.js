import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/App';
// momentaneo para verificar cada vista
import Login from './components/Login';
import Register from './components/Register';
import Verification from './components/Verification';
// Cambiar la vista a renderizar par ver cada vista
ReactDOM.render(<Login />, document.getElementById('app'));