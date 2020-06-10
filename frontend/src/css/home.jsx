import styled from "styled-components";

export const TitleHome = styled.h2`
  text-align: center;
  color: #000;
  font-size: 300%;
`;

export const TableHome = styled.table`
  border: 1px solid white;
`;

export const HomeDivTable = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const Tr = styled.tr`
  color: #000;
  font-family: "Roboto" sans-serif;
`;

export const Td = styled.td`
  color: #000;
  font-family: "Roboto" sans-serif;
`;

export const Tbody = styled.tbody`
  color: #666;
  & > td {
    text-align: left;
    padding: 20px;
    vertical-align: top;
    border-top: 0;
    font-size: 50px;
  }
`;

export const ButtonHomeBuscar = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
height: 50px;
background-color: #4CAF50;
border: none;
border-radius: 4px;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
font-family: 'Roboto' sans-serif;
margin: 5px;
&:hover ${ButtonHomeBuscar} {
    background-color: #44DB0A;
`;

export const ButtonHomeIntesity = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
height: 50px;
background-color: #FFFF33;
border: none;
border-radius: 4px;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
font-family: 'Roboto' sans-serif;
margin: 5px;
&:hover ${ButtonHomeIntesity} {
    background-color: #FFFF00;
`;

export const ButtonHomeDelete = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
height: 50px;
background-color: #FF3333;
border: none;
border-radius: 4px;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
font-family: 'Roboto' sans-serif;
margin: 5px;
&:hover ${ButtonHomeDelete} {
    background-color: #FF0000;
`;

export const LabelInputHome = styled.label`
  font-size: 25px;
  color: #000;
  -webkit-text-stroke: 0.5px black;
`;

export const InputProcHome = styled.input`
  height: 50px;
  padding: 0 0 0 25px;
  border-radius: 5px;
  font: 400 13.3333px Arial;
  overflow: visible;
  outline: none;
  border: 1px solid #e6e6e6;
  width: 50%;
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
`;

export const ButtonHomeInpProc = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 50%;
  height: 60px;
  background-color: #39a312;
  font-family: "Roboto" sans-serif;
  font-size: 14px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  transition: all 0.4s;
  border: none;
  overflow: visible;
  border-radius: 5px;
  &:hover ${ButtonHomeInpProc} {
    background-color: #44db0a;
  }
`;
