import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import FRegister from "../components/FRegister";
import WaitImg from "../components/Waiting";
import Verification from "../components/Verification";
import ErrorLogin from "../components/ErrorLogin";
import Home from "../components/Home";
import Landing from "../components/Landing";
import { GlobalStyle, ImgDiv } from "../css/global";
import { Account } from "../components/Accounts";
import {
  ProcessDetail,
  ProcessDetailDelete,
} from "../components/ProcessDetail";
import ForgotPassword from "../components/ForgotPassword";

function App() {
  return (
    <Account>
      <HashRouter>
        <GlobalStyle />
        <ImgDiv
          className="container"
          style={{ backgroundImage: "url('https://source.unsplash.com/collection/10732248/1600x900')" }}
        >
          <ErrorLogin />
          <WaitImg />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/fregister" component={FRegister} />
            <Route exact path="/verification" component={Verification} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route
              exact
              path="/processDetail/:processId"
              component={ProcessDetail}
            />
            <Route
              exact
              path="/processDetail/delete/:processId"
              component={ProcessDetailDelete}
            />
          </Switch>
        </ImgDiv>
      </HashRouter>
    </Account>
  );
}

export default App;
