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
import {
  searchProcess,
  getProcesses,
  setRegister,
  getUser,
} from "../hooks/getApi";
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
      getSession().then((session) => {
        getUser(session).then((response) => {
          if (response.status === 400) {
            setRegister(
              session.idToken.payload.sub,
              session.idToken.jwtToken,
              session.idToken.payload.email
            ).then((response) => {
              response;
            });
          } else {
            PaintProcesses();
          }
        });
      });
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
        if (!response) return;
        const proc = Object.keys(response).map((process) => {
          let demandante;
          let demandado;
          Object.keys(response[process]["parties"]).map((field) => {
            if (field.includes("Demandado")) {
              demandado = response[process]["parties"][field];
            }
            if (field.includes("Demandante")) {
              demandante = response[process]["parties"][field];
            }
          });
          let date = new Date(response[process]["updated_at"]);
          console.log(date);
          date = date.getFullYear();
          if (date.getMonth() + 1 < 10) {
            date += "-0" + (date.getMonth() + 1);
          } else {
            date += "-" + (date.getMonth() + 1);
          }
          if (date.getDate() < 10) {
            date += "-0" + date.getDate() + " ";
          } else {
            date += "-" + date.getDate() + " ";
          }
          if (date.getHours() < 10) {
            date += "0" + date.getHours() + ":";
          } else {
            date += "-" + date.getHours() + ":";
          }
          if (date.getMinutes() < 10) {
            date += "0" + date.getMinutes() + ":";
          } else {
            date += date.getMinutes() + ":";
          }
          if (date.getSeconds() < 10) {
            date += "0" + date.getSeconds() + ":";
          } else {
            date += date.getSeconds() + ":";
          }
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
