import styled  from 'styled-components';
import keyframes  from 'styled-components';

export const GlobalStyle = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const ImgDiv = styled.div`
    background: url('../../public/images/main.jpg') no-repeat;
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

export const LoginStyle = styled.div`
    margin: 0 auto;
    background: #ffffff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
    padding: 2em;
    width: 390px;
`;

export const FormStyle = styled.form`
    padding: 0 1em 0 1em;
`;

export const DivInputStyle = styled.div`
position: relative;
width: 99.5%;
background-color: #fff;
border: 1px solid #e6e6e6;
border-radius: 5px;
margin: 1em 0 1em 0;
`;

export const InputStyle = styled.input`
height: 50px;
padding: 0 25px 0 25px;
border-radius: 5px;
font: 400 13.3333px Arial;
overflow: visible;
background: transparent;
outline: none;
border: none;
width: 100%;
`;

export const DivCheckbox = styled.div`
padding: 0 0 2em 0;
`;

export const InputCheckbox = styled.input`
width: 10px;
height: 10px;
margin-right: 5px;
`
export const LabelCheckBox = styled.label`
${'' /* pendiente */}
`;

export const DivButtonLogin = styled.div`
text-align: center;
padding: 0 0 2em 0;
`;

export const ButtonLogin = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
width: 100%;
height: 60px;
background-color: #39A312;
font-family: 'Roboto' sans-serif;
font-size: 14px;
color: #fff;
line-height: 1.2;
text-transform: uppercase;
transition: all 0.4s;
border: none;
overflow: visible;
border-radius: 5px;
&:hover ${ButtonLogin} {
    background-color: #44DB0A;
}
`;

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

export const RDivInputStyle = styled.div`
display: flex;
position: relative;
width: 99.5%;
background-color: #fff;
border-radius: 5px;
margin: 1em 0 1em 0;
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

export const AlignCenter = styled.h1`
text-align: center;
`;