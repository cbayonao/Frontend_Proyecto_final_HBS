import React from "react";
import { Process, Buttons, Button } from "../css/process";
import { Responsive } from "../css/process";
import { Link } from "react-router-dom";

export function PaintProcess(props) {
  const handleUpdate = (event) => {
    $("#numero").val(event.target.id);
    props.update();
  };
  if (props.render) {
    return props.processes.map((process) => {
      return (
        <Process key={process} className={process[0]}>
          <Responsive />
          <table>
            <thead>
              <tr>
                <th>Número de Proceso</th>
                <th>Demandante</th>
                <th>Demandado</th>
                <th>Fecha de radicación</th>
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
          <Buttons className="buttons" key={process}>
            <Link className="childs" to={`/processDetail/${process[0]}`}>
              <Button className="see">Ver</Button>
            </Link>
            <Button className="change" id={process[0]} onClick={handleUpdate}>
              Actualizar
            </Button>
            <Link className="childs" to={`/processDetail/delete/${process[0]}`}>
              <Button className="delete">Eliminar</Button>
            </Link>
          </Buttons>
        </Process>
      );
    });
  } else {
    return null;
  }
}
