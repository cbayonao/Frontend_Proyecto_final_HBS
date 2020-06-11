import React, { useEffect, useState, useContext } from "react";
import { LoginStyle } from "../css/global";
import { RDivInputStyle } from "../css/register";
import {
  ButtonHomeInpProc,
  TitleHome,
  HomeDivTable,
  InputProcHome,
  LabelInputHome,
} from "../css/home";
import { AccountContext } from "./Accounts";
import { PaintProcess } from "../components/ResumeProce";
import { DivProfileImg } from "../css/logout";
import ProfileImg from "../components/Logout";
import { searchProcess, deleteProcess, getProcess } from "../hooks/getApi";
import UserPool from "../UserPool";

//Return implicito
export default () => {
  const [status, setStatus] = useState(false);
  const [numeroProceso, setNumero] = useState("");
  const [processId, setProcessId] = useState("");

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    }
    setStatus(true);
  }, []);

  const addProcess = (event) => {
    event.preventDefault;
    if (!numeroProceso) {
      $("#numero").focus();
      return;
    }
    getSession().then((session) => {
      searchProcess(
        numeroProceso,
        session.idToken.payload.sub,
        session.idToken.jwtToken
      ).then((response) => {
        response;
        setStatus(true);
      });
    });
  };

  const viewProc = () => {
    getSession().then((session) => {
      getProcess(processId, session).then((response) => {
        response;
        setStatus(true);
      });
    });
  };

  const deleteProc = () => {
    getSession().then((session) => {
      deleteProcess(processId, session).then((response) => {
        response;
      });
    });
  };
  const chProc = () => {};

  return (
    <div>
      {
        <LoginStyle className="home">
          <RDivInputStyle className="bar">
            <TitleHome>Bienvenid@</TitleHome>
            <DivProfileImg>
              <ProfileImg></ProfileImg>
            </DivProfileImg>
          </RDivInputStyle>
          <LabelInputHome>
            Ingresa el numero del proceso (23 digitos):
          </LabelInputHome>
          <InputProcHome
            value={numeroProceso}
            id="numero"
            name="numero"
            onChange={(event) => setNumero(event.target.value)}
            type="text"
            placeholder="Numero de Proceso"
            required
          />
          <ButtonHomeInpProc onClick={addProcess}>Ingresar</ButtonHomeInpProc>
          <HomeDivTable className="processlist">
            {
              <PaintProcess
                view={viewProc}
                change={chProc}
                delete={deleteProc}
                setProcess={setProcessId}
                render={status}
              />
            }
          </HomeDivTable>
        </LoginStyle>
      }
    </div>
  );
};
