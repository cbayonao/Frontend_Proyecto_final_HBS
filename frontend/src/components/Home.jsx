import React, { useEffect, useState, useContext } from "react";
import { LoginStyle, WaitImg } from "../css/global";
import { RDivInputStyle } from "../css/register";
import {
  ButtonHomeInpProc,
  TitleHome,
  HomeDivTable,
  InputProcHome,
  LabelInputHome,
} from "../css/home";
import { AccountContext } from "./Accounts";
import ResumeProce from "../components/ResumeProce";
import { getUser, searchProcess } from "../hooks/getApi";
import UserPool from "../UserPool";

//Return implicito
export default () => {
  const [status, setStatus] = useState(false);
  const [numeroProceso, setNumero] = useState("");

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    }
    getSession().then((session) => {
      getUser(session).then((response) => {
        console.log(session.idToken.jwtToken);
        console.log(session.idToken.payload.sub);
        if (response.status == 400) {
          window.location.href = "#/fregister";
        }
      });
      setStatus(true);
    });
  }, []);

  const signOut = (event) => {
    event.preventDefault;
    setStatus(false);
    logout();
    window.location.href = "#/";
  };

  const addProcess = (event) => {
    event.preventDefault;
    getSession().then((session) => {
      searchProcess(
        numeroProceso,
        session.idToken.payload.sub,
        session.idToken.jwtToken
      );
    });
  };

  return (
    <div>
      {status ? (
        <LoginStyle className="home" style={{ width: "100%" }}>
          <RDivInputStyle>
            <TitleHome>Bienvenid@</TitleHome>
            <button type="button" onClick={signOut}>
              Salir
            </button>
          </RDivInputStyle>
          <LabelInputHome>
            Ingresa el numero del proceso (23 digitos):
          </LabelInputHome>
          <InputProcHome
            value={numeroProceso}
            onChange={(event) => setNumero(event.target.value)}
            type="text"
            placeholder="Numero de Proceso"
            required
          />
          <ButtonHomeInpProc onClick={addProcess}>Ingresar</ButtonHomeInpProc>
          <HomeDivTable>
            <ResumeProce />
            <ResumeProce />
            <ResumeProce />
            <ResumeProce />
          </HomeDivTable>
        </LoginStyle>
      ) : (
        ""
      )}
    </div>
  );
};
