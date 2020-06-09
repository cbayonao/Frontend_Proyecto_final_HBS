import React, { useEffect, useState, useContext } from "react";
import { LoginStyle } from "../css/global";
import { RDivInputStyle } from "../css/register";
import {
  ButtonHomeInpProc,
  TitleHome,
  Tr,
  Td,
  Tbody,
  HomeDivTable,
  TableHome,
  ButtonHomeBuscar,
  ButtonHomeIntesity,
  ButtonHomeDelete,
  InputProcHome,
  LabelInputHome,
} from "../css/home";
import { AccountContext } from "./Accounts";
import UserPool from "../UserPool";
import { getUser } from "../hooks/getApi";

//Return implicito
export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    const user = UserPool.getCurrentUser();
    if (!user) {
      window.location.href = "#/";
    }
    getSession().then((session) => {
      getUser(session).then((response) => {
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

  return (
    <div>
      {status ? (
        <LoginStyle style={{ width: "1000px", height: "500px" }}>
          <RDivInputStyle>
            <TitleHome>Bienvenid@</TitleHome>
            <button type="button" onClick={signOut}>
              Salir
            </button>
          </RDivInputStyle>
          <LabelInputHome>
            Ingresa el numero del proceso (23 digitos):
          </LabelInputHome>
          <InputProcHome type="text" placeholder="Numero de Proceso" required />
          <ButtonHomeInpProc>Ingresar</ButtonHomeInpProc>
          <HomeDivTable>
            <TableHome>
              <thead>
                <Tr>
                  <th>Numero del proceso</th>
                  <th>Partes del Proceso</th>
                  <th>Opciones</th>
                </Tr>
              </thead>
              <Tbody>
                <Tr>
                  <Td>
                    <a href="/#/processdetail">
                      <div>11001310502620140058300</div>
                    </a>
                  </Td>
                  <Td>Demandante: XXXXXX - Demandado: XXXXX</Td>
                  <Td>
                    <ButtonHomeBuscar className="Buscar">
                      Buscar
                    </ButtonHomeBuscar>
                    <ButtonHomeIntesity className="Intensidad">
                      Intensidad
                    </ButtonHomeIntesity>
                    <ButtonHomeDelete className="Eliminar">
                      Eliminar
                    </ButtonHomeDelete>
                  </Td>
                </Tr>
              </Tbody>
            </TableHome>
          </HomeDivTable>
        </LoginStyle>
      ) : (
        "No hay nada"
      )}
    </div>
  );
};
