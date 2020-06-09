import React, { useState } from "react";

import {
  ButtonLogin,
  DivButtonLogin,
  LabelCheckBox,
  InputStyle,
  InputCheckbox,
  DivInputStyle,
  DivCheckbox,
} from "../css/login";
import { FormStyle, LoginStyle, AlignCenter } from "../css/global";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        data;
        window.location.href = "/#/home";
      },

      onFailure: (err) => {
        if (err.code === "UserNotConfirmedException") {
          window.location.href = "/#/verification";
        } else {
          $("#modal-close").css("display", "flex");
          $("#modal-close p").text("Usuario o contraseña incorrecto");
          setTimeout(() => {
            $("#modal-close").css("display", "none");
          }, 5000);
        }
      },

      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };

  return (
    <LoginStyle>
      <div className="Login-container">
        <div className="Login-logo">
          <figure>
            <img src="/" alt="" />
          </figure>
        </div>
        <FormStyle onSubmit={onSubmit}>
          <div className="Login-titulo">
            <AlignCenter>Bienvenido</AlignCenter>
          </div>
          <DivInputStyle>
            <InputStyle
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id="InputEmail"
              placeholder="Ingresa tu Email"
            />
          </DivInputStyle>
          <DivInputStyle>
            <InputStyle
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              id="InputPassword"
              placeholder="Ingresa tu Contraseña"
            />
          </DivInputStyle>
          <DivCheckbox>
            <InputCheckbox
              type="checkbox"
              name="checkbox-login"
              id="Inputcheckbox"
            />
            <LabelCheckBox htmlFor="Inputcheckbox">Recuerdame</LabelCheckBox>
          </DivCheckbox>
          <DivButtonLogin>
            <ButtonLogin type="submit">Ingresa</ButtonLogin>
          </DivButtonLogin>
        </FormStyle>
        <div className="Login-Register" style={{ margin: "5%" }}>
          <p>
            No estas registrado? <a href="/#/register"> crea tu cuenta</a>
          </p>
        </div>
      </div>
    </LoginStyle>
  );
};
