import React from 'react';
import styled from 'styled-components';

const VerificationStyle = styled.div`
    text-align: center;
    background: #CCCCFF;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.3);
    padding: 2em 0 2em 0;
    margin: 2em 0 4em 0;
    width: 500px;
`;

const DivVeriStyle = styled.div`
    position: relative;
    width: 99.5%;
    background-color: #EEEEFF;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin: 1em 0 1em 0;
`;

const InputVeriStyle = styled.input`
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
    background-color: #6666FF;
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
const Verification = () => (
    <VerificationStyle>
        <div className="Verification-container">
            <div className="Verification-titulo">
                <h2>Verificacion de correo electronico</h2>
            </div>
            <FormStyle>
                <DivVeriStyle>
                    <InputVeriStyle onChange="" type="email" name="email" id="InputEmail" placeholder="Correo electronico" />
                </DivVeriStyle>
                <DivVeriStyle>
                    <InputVeriStyle onChange="" type="VerificationCode" name="VerificationCode" id="VerificationCode" placeholder="Codigo de verificacion" />
                </DivVeriStyle>
            <div className="Verification-button">
                <ButtonLogin type="submit" onClick="">Verificar</ButtonLogin>
            </div>
            </FormStyle>
        </div>
    </VerificationStyle>
);

export default Verification;