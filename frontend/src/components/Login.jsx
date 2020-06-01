import React from 'react';
import styled from 'styled-components';

const LoginStyle = styled.div`
    text-align: center;
    background: #FFFFCC;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
    padding: 2em 0 2em 0;
    margin: 2em 0 4em 0;
    width: 500px;

`;

const FormStyle = styled.form`
    padding: 0 1em 0 1em;
`;

const SpanStyle = styled.span`
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 26px;
`;

const DivInputStyle = styled.div`
    position: relative;
    width: 99.5%;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin: 1em 0 1em 0;
`;

const InputStyle = styled.input`
    height: 50px;
    padding: 0 25px 0 25px;
    border-radius: 5px;
    font: 400 13.3333px Arial;
    overflow: visible;
    background: transparent;
    outline: none;
    border: none;
`;

const DivCheckbox = styled.div`
    text-align: center;
    padding: 0 0 2em 0;
`;

const InputCheckbox = styled.input`
    width: 20px;
    height: 20px;
`
const LabelCheckBox = styled.label`
    ${'' /* pendiente */}
`;

const DivButtonLogin = styled.div`
    text-align: center;
    padding: 0 0 2em 0;
`;

const ButtonLogin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    background-color: #CCCC00;
    font-family: 'Roboto' sans-serif;
    font-size: 14px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    transition: all 0.4s;
    border: none;
    overflow: visible;
    border-radius: 5px;
`;



//Return implicito
const Login = () => (
    <LoginStyle>
        <div className="Login-container">
            <div className="Login-logo">
                <figure>
                    <img src="/" alt="" />
                </figure>
            </div>
            <FormStyle>
                <div className="Login-titulo">
                    <SpanStyle>Bienvenido</SpanStyle>
                </div>
                <DivInputStyle>
                    <InputStyle onChange="" type="email" name="email" id="InputEmail" placeholder="Ingresa tu Email" />
                </DivInputStyle>
                <DivInputStyle>
                    <InputStyle onChange="" type="password" name="password" id="InputPassword" placeholder="Ingresa tu Contraseña" />
                </DivInputStyle>
                <DivCheckbox>
                    <InputCheckbox onChange="" type="checkbox" name="checkbox-login" id="Inputcheckbox" />
                    <LabelCheckBox for="Inputcheckbox">Recuerdame</LabelCheckBox>
                </DivCheckbox>
                <DivButtonLogin>
                    <ButtonLogin type="submit" onClick="">Ingresa</ButtonLogin>
                </DivButtonLogin>
            </FormStyle>
            <div className="Login-Register">
                <p>No estas registrado? <a href="/"> crea tu cuenta</a></p>
            </div>
        </div>
    </LoginStyle>
);

export default Login;