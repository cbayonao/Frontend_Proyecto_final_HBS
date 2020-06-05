import React from 'react';
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
  LabelInputHome
} from "../css/styles";

//Return implicito
const Home = () => (
    <div className="Home">
        <div className="Home-container">
          <div className="Title-home">
            <TitleHome>Bienvenid@</TitleHome>
          </div>
          <div>
            <LabelInputHome>Ingresa el numero del proceso (23 digitos):</LabelInputHome>
          </div>
          <div className="Input-proc">
            <InputProcHome
              type="text"
              placeholder="Numero de Proceso"
              required />
              <ButtonHomeInpProc>
                Ingresar
              </ButtonHomeInpProc>
          </div>
          <br/>
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
                      <div>
                        11001310502620140058300
                      </div>
                    </a>
                  </Td>
                  <Td>Demandante: XXXXXX - Demandado: XXXXX</Td>
                  <Td>
                    <ButtonHomeBuscar>Buscar</ButtonHomeBuscar>
                    <ButtonHomeIntesity>Intensidad</ButtonHomeIntesity>
                    <ButtonHomeDelete>Eliminar</ButtonHomeDelete>
                  </Td>
                </Tr>
              </Tbody>
            </TableHome>
          </HomeDivTable>
        </div>
    </div>
);

export default Home;
