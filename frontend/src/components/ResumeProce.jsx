import React from "react";
import { Process, Buttons, Button } from "../css/process";
import { Responsive } from "../css/process";

//Return implicito
export default () => {
  return (
    <Process>
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
            <td>215216141242</td>
            <td>Juan Lopez</td>
            <td>Sergio Garcias</td>
            <td>25-01-2020</td>
            <td>Declarativo</td>
          </tr>
        </tbody>
      </table>
      <Buttons className="buttons">
        <Button>Ver</Button>
        <Button>Intensidad de Proceso</Button>
        <Button>Eliminar</Button>
      </Buttons>
    </Process>
  );
};
