import styled, { createGlobalStyle } from "styled-components";

export const RInputStyle = styled.input`
  height: 50px;
  padding: 0 25px 0 25px;
  border-radius: 5px;
  font: 400 13.3333px Arial;
  overflow: visible;
  background: transparent;
  outline: none;
  border: 1px solid #e6e6e6;
  width: 100%;
  margin: 2%;
`;

export const RDivResponsive = createGlobalStyle`
    @media (max-width: 500px) {
        .flex {
            flex-flow: row wrap;
        }
    }
`;

export const RDivInputStyle = styled.div`
  display: flex;
  position: relative;
  width: 99.5%;
  background-color: #fff;
  border-radius: 5px;
  margin: 1em 0 1em 0;
  flex-flow: column-reverse nowrap;
`;
export const RSelect = styled.select`
  height: 50px;
  padding: 0 25px 0 20px;
  border-radius: 5px;
  font: 400 13.3333px Arial;
  overflow: visible;
  background: transparent;
  outline: none;
  border: 1px solid #e6e6e6;
  width: 100%;
  margin: 2%;
  color: #767676;
`;
