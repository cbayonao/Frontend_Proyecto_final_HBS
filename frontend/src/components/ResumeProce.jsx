import React, { useState, useContext } from "react";
import { Process, Buttons, Button } from "../css/process";
import { Responsive } from "../css/process";
import { getProcesses } from "../hooks/getApi";
import { AccountContext } from "./Accounts";

export function PaintProcess(props) {
  const [processes, setProcesses] = useState([]);
  const { getSession } = useContext(AccountContext);

  if (props.render) {
    getSession().then((session) => {
      getProcesses(session).then((response) => {
        const proc = Object.keys(response).map((process) => {
          let date = new Date(response[process]["updated_at"]);
          date =
            date.getFullYear() +
            "- 0" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate();
          return [
            process,
            Object.values(response[process]["parties"])[0].join(", "),
            Object.values(response[process]["parties"])[1].join(", "),
            response[process]["radicated_at"],
            response[process]["type_proc"],
            date,
          ];
        });
        setProcesses(proc);
      });
    });
    return processes.map((process) => {
      return (
        <Process key={process} className={process[0]}>
          <Responsive />
          <table>
            <thead>
              <tr>
                <th>Numero de Proceso</th>
                <th>Demandante</th>
                <th>Demandado</th>
                <th>Fecha de Radicacion</th>
                <th>Tipo de Proceso</th>
                <th>Actualizado en:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{process[0]}</td>
                <td>{process[1]}</td>
                <td>{process[2]}</td>
                <td>{process[3]}</td>
                <td>{process[4]}</td>
                <td>{process[5]}</td>
              </tr>
            </tbody>
          </table>
          <Buttons className="buttons">
            <Button onClick={(props.setProcess(process[0]), props.view)}>
              Ver
            </Button>
            <Button onClick={(props.setProcess(process[0]), props.change)}>
              Intensidad de Proceso
            </Button>
            <Button onClick={(props.setProcess(process[0]), props.delete)}>
              Eliminar
            </Button>
          </Buttons>
        </Process>
      );
    });
  } else {
    return null;
  }
}
