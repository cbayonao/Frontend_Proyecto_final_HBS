import React from 'react';

//Return implicito
const Login = () => (
    <div className="Login">
        <div className="Login-container">
            <div className="Login-logo">
                <figure>
                    <img src="/" alt="" />
                </figure>
            </div>
            <div className="Login-titulo">
                <h2>Ingreso</h2>
            </div>
            <div className="Login-input-email">
                <input onChange="" type="email" name="email" id="InputEmail" placeholder="Ingresa tu Email" />
            </div>
            <div className="Login-input-password">
                <input onChange="" type="password" name="password" id="InputPassword" placeholder="Ingresa tu Contraseña" />
            </div>
            <div className="Login-input-checkbox">
                <input onChange="" type="checkbox" name="checkbox-login" id="Inputcheckbox" />
                <label for="Inputcheckbox">Recuerdame</label>
            </div>
            <div className="Login-button-1">
                <button type="submit" onClick="">Ingresa</button>
            </div>
            <div className="Login-button-2">
                <button type="submit" onClick="">Registrate</button>
            </div>
        </div>
    </div>
);

export default Login;