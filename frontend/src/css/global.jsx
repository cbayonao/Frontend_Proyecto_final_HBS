import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #app {
    width: 100%;
    margin: 0 auto;
  }
  .Login-Register {
    text-align: center;
  }

  .Login-Register a{
    text-decoration: none;
  }
  .container::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  .home {
    position: relative;
  }

  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
  }

  body,
  html {
      height: 100%;
      font-family: Ubuntu-Regular, sans-serif;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
`;

export const FormStyle = styled.form`
  padding: 0 1em 0 1em;
`;

export const LoginStyle = styled.div`
  overflow: hidden;
  background: white;
  padding: 5%;
  box-shadow: 0 0 40px #000;
`;

export const AlignCenter = styled.h1`
  text-align: center;
`;

export const ErrDiv = styled.div`
    display: none;
    width: 300px;
    position: absolute;
    background-color: white;
    z-index: 1;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    padding: 20px;
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
    border: 1px solid tan;
    top: 15px;
    }
    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
`;

export const Closed = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &: hover ${Closed} {
    cursor: pointer;
  }
`;

export const WaitImg = styled.div`
  background: url("./assets/cargando.gif") no-repeat;
  background-size: cover;
  width: 100px;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 0;
  margin-top: 10px;
`;

export const DivWaiting = styled.div`
  background: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
  padding: 2em;
  width: 200px;
  display: none;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
`;
