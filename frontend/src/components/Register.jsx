import React from 'react';

//Return implicito
const Register = () => (
    <div className="Register">
        <div className="Register-container">
            <div className="Register-logo">
                <figure>
                    <img src="/" alt="" />
                </figure>
            </div>
            <div className="Register-titulo">
                <h2>Este es el register</h2>
            </div>
            <div className="Register-input-name">
                <input onChange="" type="text" name="name" id="InputName" placeholder="Ingresa tu Nombre" />
            </div>
            <div className="Register-input-lastname">
                <input onChange="" type="text" name="lastname" id="InputLastName" placeholder="Ingresa tu Apellido" />
            </div>
            <div className="Register-input-email">
                <input onChange="" type="email" name="email" id="InputEmail" placeholder="Ingresa tu Email" />
            </div>
            <div className="Register-input-password">
                <input onChange="" type="password" name="password" id="InputPassword" placeholder="Ingresa tu Contraseña" />
            </div>
            <div className="Register-input-mobile">
                <input onChange="" type="tel" name="mobile" id="InputMobile" placeholder="Ingresa tu # de telefono" />
            </div>
            <div className="Register-input-type-id">
                <label for="cars">Tipo Documento</label>
                <br/>
                <select name="type-id" id="type-id">
                    <option value="1">Cedula de ciudadania</option>
                    <option value="2">Cedula de extranjeria</option>
                    <option value="3">Pasaporte</option>
                </select>
            </div>
            <div className="Register-input-id">
                <input onChange="" type="text" name="id" id="InputId" placeholder="Ingresa tu # de identificacion" />
            </div>
            <div className="Register-input-checkbox">
                <input onChange="" type="checkbox" name="checkbox-login" id="Inputcheckbox" />
                <label for="Inputcheckbox">Recuerdame</label>
            </div>
            <div className="Register-button">
                <button type="submit" onClick="">Registrate</button>
            </div>
            <div className="Register-conditions">
                <p>Al registrarte aceptas nuestras <a href="/"> condiciones</a></p>
            </div>
        </div>
    </div>
);

export default Register;