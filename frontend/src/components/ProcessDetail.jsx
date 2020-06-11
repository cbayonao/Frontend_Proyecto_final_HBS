import React from "react";
import {
  ProDetail,
  ContainerProDetail,
  ContainerDataPro,
  ContainerFlexDataGen,
  H1ProD,
  H3ProD,
  ContainerProDetail2,
  ContainerActuacion,
  Span,
  Label,
  P,
} from "../css/styles";

//Return implicito
const ProccesDetail = () => (
  <ProDetail>
    <div className="TitleProDetail">
      <H1ProD>INFORMACION DEL PROCESO: </H1ProD>
    </div>
    <ContainerProDetail>
      <div className="ContainerTitleDataPro">
        <H3ProD>DATOS DEL PROCESO</H3ProD>
      </div>
      <ContainerFlexDataGen>
        <ContainerDataPro>
          <Label>Fecha de Radicacion: </Label>
          <Span> 2014-09-09</Span>
        </ContainerDataPro>
        <ContainerDataPro>
          <Label>Despacho: </Label>
          <Span> JUZGADO 026 LABORAL DE BOGOTÁ</Span>
        </ContainerDataPro>
        <ContainerDataPro>
          <Label>Ubicacion del expediente: </Label>
          <Span>Secretaria - Letra</Span>
        </ContainerDataPro>
        <ContainerDataPro>
          <Label>Tipo de Proceso: </Label>
          <Span>Declarativo</Span>
        </ContainerDataPro>
      </ContainerFlexDataGen>
      <div className="TitlePartesPro">
        <H3ProD>PARTES DEL PROCESO</H3ProD>
      </div>
      <ContainerFlexDataGen>
        <ContainerDataPro>
          <Label>Parte Activa - Demandante: </Label>
          <Span>Luis Alberto V﻿anegas y otros</Span>
        </ContainerDataPro>
        <ContainerDataPro>
          <Label>Parte Pasiva - Demandado: </Label>
          <Span>Omar Eduardo Avila y otros</Span>
        </ContainerDataPro>
      </ContainerFlexDataGen>
    </ContainerProDetail>
    <ContainerProDetail2>
      <div className="TitlePartesPro">
        <H3ProD>ACTUACIONES</H3ProD>
      </div>
      <div className="ContainerActuaciones">
        <ContainerActuacion>
          <div className="ContFechaTipoAct">
            <ContainerDataPro>
              <Label>Fecha de actuacion: </Label>
              <P>2019-07-31</P>
            </ContainerDataPro>
            <ContainerDataPro>
              <Label>Tipo: </Label>
              <P>Auto que decide sobre el Recurso</P>
            </ContainerDataPro>
            <ContainerDataPro>
              <Label>Fecha inicia termino: </Label>
              <P>2019-07-18</P>
            </ContainerDataPro>
            <ContainerDataPro>
              <Label>Fecha de registro: </Label>
              <P>2019-07-17</P>
            </ContainerDataPro>
          </div>
          <ContainerDataPro>
            <Label>Detalle de actuacion: </Label>
            <Span>
              24 de julio de 2019. Revoca decision. Se remiten al Juzgado con el
              proceso original que va del folio 1.223 al folio 2.042, el
              cuaderno N° 1 que va del folio 1 al folio 711, y el cuaderno N° 2
              que va del folio 712 al folio 1.222 (Patricia E).﻿
            </Span>
            <a href="#">Mas ...</a>
          </ContainerDataPro>
        </ContainerActuacion>
      </div>
    </ContainerProDetail2>
  </ProDetail>
);

export default ProccesDetail;
