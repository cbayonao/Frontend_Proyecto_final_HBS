import React from 'react';

//Return implicito
const Verification = () => (
    <div className="Verification">
        <div className="Verification-container">
            <div className="Verification-titulo">
                <h2>Verificacion de correo electronico</h2>
            </div>
            <div className="Verification-input-email">
                <input onChange="" type="email" name="email" id="InputEmail" placeholder="Correo electronico" />
            </div>
            <div className="Verification-input-password">
                <input onChange="" type="password" name="password" id="InputPassword" placeholder="Codigo de verificacion" />
            </div>
            <div className="Verification-button">
                <button type="submit" onClick="">Verificar</button>
            </div>
        </div>
    </div>
);

export default Verification;