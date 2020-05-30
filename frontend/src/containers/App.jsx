import React from 'react';
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
import Verification from '../components/Verification';


const App = () => {
    return (
        <Main>
            <Login />
            <Register />
            <Verification />
        </Main>
    );
}

export default App;