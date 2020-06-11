import React, { useState } from "react";
import { ButtonLogin, DivInputStyle, InputStyle } from "../css/login";
import { FormStyle, LoginStyle, AlignCenter } from "../css/global";
import UserPool from "../UserPool";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showError = (text, height = "50px") => {
    $("#modal-close").css("display", "flex");
    $("#modal-close").css("height", height);
    $("#modal-close p").text(text);
    setTimeout(() => {
      $("#modal-close").css("display", "none");
    }, 5000);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err) => {
      if (err.code === "UsernameExistsException") {
        window.location.href = "#/";
        showError("El usuario ya existe");
      }
      let msg = "";
      if (err.code === "InvalidParameterException") {
        if (err.message.includes("password")) {
          msg =
            "La contrase&na debe tener una longitud de 8 o mas caracteres, " +
            "tambien debe contener mayusculas, numeros, y un caracter especial";
        }
        showError(msg, "100px");
      } else {
        window.location.href = "#/verification";
      }
    });
  };

  return (
    <LoginStyle style={{ width: "555px" }}>
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
              name="pwd"
              id="pwd"
              placeholder="Ingresa tu Contrase&ntilde;a"
            />
          </DivInputStyle>

          <div className="Register-button">
            <ButtonLogin
              style={{ width: "80%", margin: "0 auto" }}
              type="submit"
            >
              Registrate
            </ButtonLogin>
          </div>
          <DivInputStyle className="Register-conditions">
            <p style={{ margin: "2.5%" }}>
              Al registrarte aceptas nuestras <a href="/"> condiciones</a>
            </p>
          </DivInputStyle>
        </FormStyle>
      </div>
    </LoginStyle>
  );
};
