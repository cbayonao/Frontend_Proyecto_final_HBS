import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import FRegister from "../components/FRegister";
import Verification from "../components/Verification";
import ErrorLogin from "../components/ErrorLogin";
import Home from "../components/Home";
import { GlobalStyle, ImgDiv, OpacityDiv } from "../css/global";
import { Account } from "../components/Accounts";

function App() {
  return (
    <Account>
      <HashRouter>
        <ErrorLogin />
        <GlobalStyle>
          <ImgDiv>
            <OpacityDiv>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/fregister" component={FRegister} />
                <Route exact path="/verification" component={Verification} />
                <Route exact path="/home" component={Home} />
              </Switch>
            </OpacityDiv>
          </ImgDiv>
        </GlobalStyle>
      </HashRouter>
    </Account>
  );
}

export default App;
