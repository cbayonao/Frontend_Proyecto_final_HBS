import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
import Verification from '../components/Verification';
import { createGlobalStyle } from 'styled-components';
import getApi from '../hooks/getApi';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #E9E9E9;
        font-family: 'Lato', sans-serif;
    }
`;


function App() {
  const data = getApi();
    console.log(data);
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Main>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/verification" component={Verification}/>
        </Main>
      </Switch>
    </HashRouter>
  );
}

export default App;
