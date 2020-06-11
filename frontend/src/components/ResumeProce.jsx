import React, { useState, useContext } from "react";
import { Process, Buttons, Button } from "../css/process";
import { Responsive } from "../css/process";
import { AccountContext } from "./Accounts";

export function PaintProcess(props) {
  if (props.render) {
    return props.processes.map((process) => {
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
