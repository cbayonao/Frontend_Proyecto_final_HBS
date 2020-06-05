import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
  display: grid;
  justify-content: center;
  padding: 1em;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const Main = ({ children }) => (
  <MainStyled>
    <div className="Main-container">{children}</div>
  </MainStyled>
);

export default Main;
