import React from "react";
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
import Pool from "../UserPool";

//Return implicito
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const user = Pool.getCurrentUser();
    if (!user) {
      window.location.href = "#/";
    }
  }

  componentWillUnmount() {
    const user = Pool.getCurrentUser();
    if (!user) {
      window.location.href = "#/";
    }
  }

  signOut = (event) => {
    event.preventDefault;
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
    window.location.href = "#/";
  };

  render() {
    return (
      <LoginStyle style={{ width: "1000px", height: "500px" }}>
        <RDivInputStyle>
          <TitleHome>Bienvenid@</TitleHome>
          <button type="button" onClick={this.signOut}>
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
                  <ButtonHomeBuscar className="Buscar">Buscar</ButtonHomeBuscar>
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
    );
  }
}
export default Home;
