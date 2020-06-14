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
    /* event.preventDefault; */
    if (
      $("#numero").val() === "" ||
      $("#numero").val().length < 23 ||
      $("#numero").val().length > 23 ||
      isNaN($("#numero").val())
    ) {
      $("#modal-close p").text("Digite un número válido");
      $("#modal-close").css("display", "flex");
      setTimeout(() => {
        $("#modal-close").css("display", "none");
      }, 5000);
      $("#numero").focus();
      return;
    }
    getSession().then((session) => {
      searchProcess(
        $("#numero").val(),
        session.idToken.payload.sub,
        session.idToken.jwtToken
      ).then((response) => {
        response;
        PaintProcesses();
        $("#numero").val("");
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
          let new_date = new Date(response[process]["updated_at"]);
          const year = new_date.getFullYear();
          const month =
            new_date.getMonth() + 1 < 10
              ? "0" + (new_date.getMonth() + 1)
              : new_date.getMonth() + 1;
          const day =
            new_date.getDate() < 10
              ? "0" + new_date.getDate()
              : new_date.getDate();
          const hours =
            new_date.getHours() < 10
              ? "0" + new_date.getHours()
              : new_date.getHours();
          const minutes =
            new_date.getMinutes() < 10
              ? "0" + new_date.getMinutes()
              : new_date.getMinutes();
          const seconds =
            new_date.getSeconds() < 10
              ? "0" + new_date.getSeconds()
              : new_date.getSeconds();
          return [
            process,
            demandante,
            demandado,
            response[process]["radicated_at"],
            response[process]["type_proc"],
            year +
              "-" +
              month +
              "-" +
              day +
              " " +
              hours +
              ":" +
              minutes +
              ":" +
              seconds,
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
              id="numero"
              name="numero"
              type="text"
              placeholder="Numero de Proceso"
            />
            <ButtonHomeInpProc onClick={addProcess}>Ingresar</ButtonHomeInpProc>
            <HomeDivTable className="processlist">
              {
                <PaintProcess
                  processes={processes}
                  render={status}
                  update={addProcess}
                />
              }
            </HomeDivTable>
          </div>
        </LoginStyle>
      }
    </div>
  );
};
