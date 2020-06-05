import React from 'react';
import { ButtonHomeInpProc, TitleHome, Tr, Td, Tbody, HomeDivTable, TableHome, ButtonHomeBuscar, ButtonHomeIntesity, ButtonHomeDelete } from "../css/styles";

//Return implicito
const Home = () => (
    <div className="Home">
        <div className="Home-container">
          <div className="Title-home">
            <TitleHome>Bienvenid@</TitleHome>
          </div>
          <div>
            <label>Ingresa el numero del proceso (23 digitos):</label>
          </div>
          <div className="Input-proc">
            <input type="text" placeholder="Numero de Proceso" required />
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
                    <a href="http://example.com">
                      <div>
                        11001310502620140058300
                      </div>
                    </a>
                  </Td>
                  <Td>Demandante: XXXXXX - Demandado: XXXXX</Td>
                  <Td>
                    <ButtonHomeBuscar className="Buscar" >Buscar</ButtonHomeBuscar>
                    <ButtonHomeIntesity className="Intensidad">Intensidad</ButtonHomeIntesity>
                    <ButtonHomeDelete className="Eliminar">Eliminar</ButtonHomeDelete>
                  </Td>
                </Tr>
              </Tbody>
            </TableHome>
          </HomeDivTable>
        </div>
    </div>
);

export default Home;
