import React, { useState } from "react";
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

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (!err) {
        window.location.href = "/#/";
      } else {
        $("#modal-close").css("display", "flex");
        $("#modal-close p").text(
          "Codigo Erroneo, por favor vuelve a intentarlo"
        );
        setTimeout(() => {
          $("#modal-close").css("display", "none");
        }, 5000);
      }
    });
  };

  const resendCode = (event) => {
    if ($("#InputEmail").val() == "") {
      $("#modal-close").css("display", "flex");
      $("#modal-close p").text("Debes ingresar un correo");
      setTimeout(() => {
        $("#modal-close").css("display", "none");
      }, 5000);
      $("#InputEmail").focus();
      return;
    }
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    user.resendConfirmationCode(
      (err) => {
        if (!err) {
          $("#modal-close").css("display", "flex");
          $("#modal-close p").text(
            "El codigo fue enviado, probablemente lo encuentre en la seccion de correo no deseado"
          );
          setTimeout(() => {
            $("#modal-close").css("display", "none");
          }, 5000);
        } else {
          console.log(err);
        }
      },
      { email: email }
    );
  };

  return (
    <LoginStyle>
      <div className="Verification-container">
        <div className="Verification-titulo">
          <AlignCenter>Verificacion de correo electronico</AlignCenter>
        </div>
        <FormStyle onSubmit={onSubmit}>
          <DivInputStyle>
            <InputStyle
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id="InputEmail"
              placeholder="Correo electronico"
            />
          </DivInputStyle>
          <DivInputStyle>
            <InputStyle
              value={code}
              onChange={(event) => setCode(event.target.value)}
              type="VerificationCode"
              name="VerificationCode"
              id="VerificationCode"
              placeholder="Codigo de verificacion"
            />
          </DivInputStyle>
          <RDivInputStyle>
            <VButton type="submit">Verificar</VButton>
            <RButton type="button" onClick={resendCode}>
              Reenviar Codigo
            </RButton>
          </RDivInputStyle>
        </FormStyle>
      </div>
    </LoginStyle>
  );
};
