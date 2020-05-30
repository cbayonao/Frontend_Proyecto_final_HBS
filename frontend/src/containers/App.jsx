import React from 'react';
import Main from '../components/Main';
import Login from '../components/Login';
import Home from '../components/Home';


const App = () => {
    return (
        <Main>
            <Login />
            <Home />
        </Main>
    );
}

export default App;