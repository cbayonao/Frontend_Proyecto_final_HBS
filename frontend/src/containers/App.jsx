import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import Verification from '../components/Verification';
import ErrorLogin from '../components/ErrorLogin';
import SearchParams from '../components/SearchParams';
import Home from '../components/Home';
import getApi from '../hooks/getApi';
import {
  GlobalStyle, ImgDiv, OpacityDiv
} from "../css/styles";


function App() {
  const data = getApi();
  console.log(data);
  return (
    <HashRouter>
      <ErrorLogin />
      <GlobalStyle>
        <ImgDiv>
          <OpacityDiv>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/verification" component={Verification} />
              <Route exact path="/search" component={SearchParams} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </OpacityDiv>
        </ImgDiv>
      </GlobalStyle>
    </HashRouter>
  );
}

export default App;
