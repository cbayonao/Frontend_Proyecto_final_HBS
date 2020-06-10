import styled from "styled-components";

export const GlobalStyle = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ImgDiv = styled.div`
  background: url("!!file!../../public/icons/main.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 0;
`;

export const OpacityDiv = styled.div`
  background: rgba(0, 0, 0, 0.57);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.form`
  padding: 0 1em 0 1em;
`;

export const LoginStyle = styled.div`
  margin: 0 auto;
  background: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
  padding: 2em;
  width: 390px;
  position: relative;
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
  background: url("!!file!../../public/icons/cargando.gif") no-repeat;
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
