import React, { useState, useContext, useEffect } from "react";
import {
  RDivInputStyle,
  RInputStyle,
  RSelect,
  RDivResponsive,
} from "../css/register";
import { ButtonLogin } from "../css/login";
import { FormStyle, LoginStyle, AlignCenter } from "../css/global";
import { AccountContext } from "./Accounts";
import { setRegister } from "../hooks/getApi";
import UserPool from "../UserPool";

export default () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [id_type, setIdType] = useState("");
  const [id, setId] = useState("");
  const { getSession } = useContext(AccountContext);
  const [cel, setCel] = useState("");

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    }
    getSession().then((session) => {
      if (!session) {
        window.location.href = "#/";
      }
    });
  });
  const showError = (text, height = "50px") => {
    $("#modal-close").css("display", "flex");
    $("#modal-close").css("height", height);
    $("#modal-close p").text(text);
    setTimeout(() => {
      $("#modal-close").css("display", "none");
    }, 5000);
  };

  const validation = () => {
    let msg = "";
    if (!nombre) {
      $("#nombre").focus();
      msg = "Ingresa tu nombre";
    }
    if (!apellido) {
      $("#apellido").focus();
      msg = "Ingresa tu apellido";
    }
    if (!id_type) {
      $("#id_type").focus();
      msg = "Ingresa tu id_type";
    }
    if (!id) {
      $("#id").focus();
      msg = "Ingresa tu id";
    }
    if (!cel || cel.length < 10) {
      $("#cel").focus();
      msg = "Ingresa un numero valido";
    }
    if (msg) {
      showError(msg);
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let register = {
      first_name: "",
      last_name: "",
      person_id_type: "",
      person_id: "",
      e_mail: "",
      cel: "",
    };
    if (validation()) {
      getSession().then((session) => {
        register["first_name"] = nombre;
        register["last_name"] = apellido;
        register["person_id_type"] = id_type;
        register["person_id"] = id;
        register["e_mail"] = session.idToken.payload.email;
        register["cel"] = cel;
        setRegister(
          register,
          session.idToken.payload.sub,
          session.idToken.jwtToken
        );
      });
    }
  };

  return (
    <LoginStyle style={{ width: "555px" }}>
      <RDivResponsive />
      <div className="Register-container">
        <div className="Register-logo">
          <figure>
            <img src="/" alt="" />
          </figure>
        </div>
        <div className="Register-titulo">
          <AlignCenter>Termina tu registro</AlignCenter>
        </div>
        <FormStyle onSubmit={onSubmit}>
          <RDivInputStyle className="flex">
            <RInputStyle
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingresa tu Nombre"
            />
            <RInputStyle
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Ingresa tu Apellido"
            />
          </RDivInputStyle>
          <RDivInputStyle className="flex">
            <RSelect
              onChange={(event) => setIdType(event.target.value)}
              defaultValue="#"
              id="id_type"
              name="id_type"
            >
              <option value="#" disabled>
                Selecciona
              </option>
              <option value="CC">Cedula de Ciudadania</option>
              <option value="CE">Cedula de Extranjeria</option>
              <option value="P">Pasaporte</option>
            </RSelect>
            <RInputStyle
              value={id}
              onChange={(event) => setId(event.target.value)}
              type="text"
              name="id"
              id="id"
              placeholder="Ingresa # de Identificacion"
            />
          </RDivInputStyle>
          <RDivInputStyle className="flex">
            <RInputStyle
              value={cel}
              onChange={(event) => setCel(event.target.value)}
              type="text"
              name="cel"
              id="cel"
              placeholder="Ingresa tu # Celular"
            />
          </RDivInputStyle>

          <div className="Register-button">
            <ButtonLogin
              style={{ width: "80%", margin: "0 auto" }}
              type="submit"
            >
              Registrate
            </ButtonLogin>
          </div>
          <RDivInputStyle className="Register-conditions">
            <p style={{ margin: "0 auto", textAlign: "center" }}>
              Al registrarte aceptas nuestras <a href="#"> condiciones</a>
            </p>
          </RDivInputStyle>
        </FormStyle>
      </div>
    </LoginStyle>
  );
};
