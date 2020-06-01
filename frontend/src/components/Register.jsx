import React from 'react';
import styled from 'styled-components';

const RegisterStyle = styled.div`
    text-align: center;
    background: #FFE5CC;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
    padding: 2em 0 2em 0;
    margin: 2em 0 4em 0;
    width: 500px;
`;

const RegisterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const DivInputContainer = styled.div`
    position: relative;
    width: 99.5%;
    background-color: #FFF7EF;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin: 1em 0 1em 0;

`;

const InputRegister = styled.input`
    height: 50px;
    padding: 0 25px 0 25px;
    border-radius: 5px;
    font: 400 13.3333px Arial;
    overflow: visible;
    background: transparent;
    outline: none;
    border: none;
`;

const FormStyle = styled.form`
    padding: 0 1em 0 1em;
`;

const ButtonLogin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    background-color: #FFB266;
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
const Register = () => (
    <RegisterStyle>
        <div className="Register-container">
            <div className="Register-logo">
                <figure>
                    <img src="/" alt="" />
                </figure>
            </div>
            <div className="Register-titulo">
                <h2>Registro</h2>
            </div>
            <FormStyle>
                <RegisterContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="text" name="name" id="InputName" placeholder="Ingresa tu Nombre" />
                    </DivInputContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="text" name="lastname" id="InputLastName" placeholder="Ingresa tu Apellido" />
                    </DivInputContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="email" name="email" id="InputEmail" placeholder="Ingresa tu Email" />
                    </DivInputContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="password" name="password" id="InputPassword" placeholder="Ingresa tu Contraseña" />
                    </DivInputContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="tel" name="mobile" id="InputMobile" placeholder="Ingresa tu # de telefono" />
                    </DivInputContainer>
                    <DivInputContainer>
                        <label for="cars">Tipo Documento</label>
                        <br/>
                        <select name="type-id" id="type-id">
                            <option value="1">Cedula de ciudadania</option>
                            <option value="2">Cedula de extranjeria</option>
                            <option value="3">Pasaporte</option>
                        </select>
                    </DivInputContainer>
                    <DivInputContainer>
                        <InputRegister onChange="" type="text" name="id" id="InputId" placeholder="Ingresa tu # de identificacion" />
                    </DivInputContainer>
                </RegisterContainer>
                    <div className="Register-input-checkbox">
                        <input onChange="" type="checkbox" name="checkbox-login" id="Inputcheckbox" />
                        <label for="Inputcheckbox">Recuerdame</label>
                    </div>
                    <div className="Register-button">
                        <ButtonLogin type="submit" onClick="">Registrate</ButtonLogin>
                    </div>
            </FormStyle>
            <div className="Register-conditions">
                <p>Al registrarte aceptas nuestras <a href="/"> condiciones</a></p>
            </div>
        </div>
    </RegisterStyle>
);

export default Register;