import React, { useState, useContext } from "react";
import { Process, Buttons, Button } from "../css/process";
import { Responsive } from "../css/process";
import { getProcesses } from "../hooks/getApi";
import { AccountContext } from "./Accounts";

export default () => {
  const [processes, setProcesses] = useState([]);
  const { getSession } = useContext(AccountContext);
  const [processId, setProcessId] = useState("");
  useState(async () => {
    getSession().then((session) => {
      getProcesses(session).then((response) => {
        const proc = Object.keys(response).map((process) => {
          console.log(response[process]);
          return [
            process,
            response[process]["parties"]["Demandante"],
            response[process]["parties"]["Demandado"],
            response[process]["radicated_at"],
            response[process]["type_proc"],
          ];
        });
        setProcesses(proc);
      });
    });
  });

  const see = (event) => {
    event.preventDefault;
    console.log(processId);
  };
  const change = (event) => {
    event.preventDefault;
    console.log(processId);
  };
  const del = (event) => {
    event.preventDefault;
    console.log(processId);
  };
  return processes.map((process) => {
    return (
      <Process key={process}>
        <Responsive />
        <table>
          <thead>
            <tr>
              <th>Numero de Proceso</th>
              <th>Demandante</th>
              <th>Demandado</th>
              <th>Fecha de Radicacion</th>
              <th>Tipo de Proceso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{process[0]}</td>
              <td>{process[1]}</td>
              <td>{process[2]}</td>
              <td>{process[3]}</td>
              <td>{process[4]}</td>
            </tr>
          </tbody>
        </table>
        <Buttons className="buttons">
          <Button onClick={(event) => setProcessId(process[0])}>Ver</Button>
          <Button onClick={(event) => setProcessId(process[0])}>
            Intensidad de Proceso
          </Button>
          <Button onClick={(event) => setProcessId(process[0])}>
            Eliminar
          </Button>
        </Buttons>
      </Process>
    );
  });
};
