import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";
import {
  ButtonLogin,
  DivButtonLogin,
  InputStyle,
  DivInputStyle,
} from "../css/login";
import { FormStyle, LoginStyle, AlignCenter } from "../css/global";

export default () => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };

  const sendCode = (event) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
      inputVerificationCode: (data) => {
        console.log("Input code:", data);
        setStage(2);
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      $("#modal-close").css("display", "flex");
      $("#modal-close p").text("Las contraseñas no coinciden");
      setTimeout(() => {
        $("#modal-close").css("display", "none");
      }, 5000);
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
        window.location.href = "#/login";
      },
      onFailure: (err) => {
        let msg = "";
        if (err.code === "InvalidParameterException") {
          if (err.message.includes("confirmationCode")) {
            msg = "Error con el código de confirmación";
          } else if (err.message.includes("password")) {
            msg =
              "La contraseña debe tener una longitud de 8 o mas caracteres, " +
              "tambien debe contener mayusculas, numeros, y un caracter especial";
          }
        } else if (err.message.includes("CodeMismatchException")) {
          msg = "Código de verificación erronéo";
        } else {
          msg = "Inténtalo más tarde";
        }
        $("#modal-close").css("display", "flex");
        $("#modal-close p").text(msg);
        setTimeout(() => {
          $("#modal-close").css("display", "none");
        }, 5000);
      },
    });
  };

  return (
    <LoginStyle>
      <AlignCenter>Recuperar Contraseña</AlignCenter>
      {stage === 1 && (
        <FormStyle onSubmit={sendCode}>
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
          <DivButtonLogin>
            <ButtonLogin type="submit">Enviar Código</ButtonLogin>
          </DivButtonLogin>
        </FormStyle>
      )}

      {stage === 2 && (
        <FormStyle onSubmit={resetPassword}>
          <DivInputStyle>
            <InputStyle
              value={code}
              onChange={(event) => setCode(event.target.value)}
              type="text"
              name="code"
              id="InputCode"
              placeholder="Ingresa tu codigo"
            />
          </DivInputStyle>
          <DivInputStyle>
            <InputStyle
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </DivInputStyle>
          <DivInputStyle>
            <InputStyle
              value={confirmPassword}
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirma tu contraseña"
            />
          </DivInputStyle>
          <DivButtonLogin>
            <ButtonLogin type="submit">Cambiar contraseña</ButtonLogin>
          </DivButtonLogin>
        </FormStyle>
      )}
    </LoginStyle>
  );
};
