import React from 'react';
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
import Verification from '../components/Verification';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #E9E9E9;
        font-family: 'Lato', sans-serif;
    }
`;


const App = () => {
    return (
        <Main>
        <GlobalStyle />
            <Login />
            <Register />
            <Verification />
        </Main>
    );
}

export default App;