import React, { useState } from 'react';
import { ButtonLogin } from '../css/login';
import {
    RDivInputStyle, RSelect, RInputStyle
} from "../css/register";
import { FormStyle, LoginStyle, AlignCenter } from "../css/global";
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const poolData = {
        UserPoolId: 'us-east-2_B6iWRQ83v',
        ClientId: '7c6oic7nsjeijr1ck9dsgdak65'
    };

    const UserPool = new CognitoUserPool(poolData);

    const onSubmit = event => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err.code === "UsernameExistsException") { window.location.href = "#/"; }
            else { window.location.href = "#/verification"; }

        });
    };

    return (
        <LoginStyle style={{ width: '555px' }}>
            <div className="Register-container">
                <div className="Register-logo">
                    <figure>
                        <img src="/" alt="" />
                    </figure>
                </div>
                <div className="Register-titulo">
                    <AlignCenter>Registro</AlignCenter>
                </div>
                <FormStyle onSubmit={onSubmit}>
                    {/*  <RDivInputStyle>
                        <RInputStyle type="text" name="name" id="InputName" placeholder="Ingresa tu Nombre" />
                        <RInputStyle type="text" name="lastname" id="InputLastName" placeholder="Ingresa tu Apellido" />
                    </RDivInputStyle> */}
                    <RDivInputStyle>
                        {/* <RInputStyle type="tel" name="mobile" id="InputMobile" placeholder="Ingresa tu # de telefono" /> */}
                        <RInputStyle value={email} onChange={event => setEmail(event.target.value)} type="email" name="email" id="InputEmail" placeholder="Ingresa tu Email" />
                        {/* </RDivInputStyle> */}
                        {/* <RDivInputStyle> */}
                        <RInputStyle value={password} onChange={event => setPassword(event.target.value)} type="password" name="pwd" id="pwd" placeholder="Ingresa tu Contraseña" />
                        {/*     <RInputStyle type="password" name="cpwd" id="cpwd" placeholder="Verifica tu Contraseña" />
                    </RDivInputStyle>
                    <RDivInputStyle>
                        <RSelect name="type_id" id="type_id" defaultValue={"#"}>
                            <option value="#" disabled>Tipo Documento</option>
                            <option value="CC">Cedula de ciudadania</option>
                            <option value="CE">Cedula de extranjeria</option>
                            <option value="P">Pasaporte</option>
                        </RSelect>
                        <RInputStyle type="text" name="id" id="InputId" placeholder="Ingresa tu # de identificacion" />
                        */}
                    </RDivInputStyle>

                    <div className="Register-button">
                        <ButtonLogin style={{ width: '80%', margin: '0 auto' }} type="submit">Registrate</ButtonLogin>
                    </div>

                    <RDivInputStyle className="Register-conditions">
                        <p style={{ margin: '2.5%' }}>Al registrarte aceptas nuestras <a href="/"> condiciones</a></p>
                    </RDivInputStyle>
                </FormStyle>
            </div>
        </LoginStyle>
    );
}