import React, { useState } from 'react';
import { LoginStyle, FormStyle, AlignCenter } from "../css/global";
import { VButton, RButton } from "../css/verification";
import { ButtonLogin, DivInputStyle, InputStyle } from "../css/login";
import { RDivInputStyle } from "../css/register";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

//Return implicito
export default () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        user.confirmRegistration(code, true, (err, result) => {
            if (!err) {
                console.log(result);
                window.location.href = '/#/home'
            }
            else {
                console.log(err);
            }
        });

    }

    const resendCode = event => {
        if ($("#InputEmail").val() == "") {
            $("#InputEmail").focus();
            return;
        }
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        user.resendConfirmationCode((err, result) => {
            if (!err) {
                console.log(result);
            }
            else {
                console.log(err);
            }
        }, { 'email': email });
    }

    return (
        <LoginStyle>
            <div className="Verification-container">
                <div className="Verification-titulo">
                    <AlignCenter>Verificacion de correo electronico</AlignCenter>
                </div>
                <FormStyle onSubmit={onSubmit}>
                    <DivInputStyle>
                        <InputStyle value={email} onChange={event => setEmail(event.target.value)} type="email" name="email" id="InputEmail" placeholder="Correo electronico" />
                    </DivInputStyle>
                    <DivInputStyle>
                        <InputStyle value={code} onChange={event => setCode(event.target.value)} type="VerificationCode" name="VerificationCode" id="VerificationCode" placeholder="Codigo de verificacion" />
                    </DivInputStyle>
                    <RDivInputStyle>
                        <VButton type="submit">Verificar</VButton>
                        <RButton type="button" onClick={resendCode}>Reenviar Codigo</RButton>
                    </RDivInputStyle>
                </FormStyle>
            </div >
        </LoginStyle >
    );
}