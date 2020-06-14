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
import { searchProcess, getProcesses } from "../hooks/getApi";
import UserPool from "../UserPool";

//Return implicito
export default () => {
  const [status, setStatus] = useState(false);
  const [processes, setProcesses] = useState(false);
  const [numeroProceso, setNumero] = useState("");

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    } else {
      PaintProcesses();
    }
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
        PaintProcesses();
      });
    });
  };

  const PaintProcesses = () => {
    getSession().then((session) => {
      getProcesses(session).then((response) => {
        console.log(response);
        const proc = Object.keys(response).map((process) => {
          let demandante;
          let demandado;
          if (Object.values(response[process]["parties"])[0].length > 1) {
            demandante = Object.values(response[process]["parties"])[0].join(
              ", "
            );
          } else {
            demandante = Object.values(response[process]["parties"])[0];
          }
          if (Object.values(response[process]["parties"])[1].length > 1) {
            demandado = Object.values(response[process]["parties"])[1].join(
              ", "
            );
          } else {
            demandado = Object.values(response[process]["parties"])[1];
          }
          let date = new Date(response[process]["updated_at"]);
          date =
            date.getFullYear() +
            "- 0" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate();
          return [
            process,
            demandante,
            demandado,
            response[process]["radicated_at"],
            response[process]["type_proc"],
            date,
          ];
        });
        setProcesses(proc);
        setStatus(true);
      });
    });
  };

  return (
    <div>
      {
        <LoginStyle className="home">
          <div>
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
              {<PaintProcess processes={processes} render={status} />}
            </HomeDivTable>
          </div>
        </LoginStyle>
      }
    </div>
  );
};
