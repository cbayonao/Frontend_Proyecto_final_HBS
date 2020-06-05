import React from 'react';
import { ErrDiv, Closed } from "../css/global";

export default () => {

    const Close = event => {
        event.preventDefault();
        $("#modal-close").hide();
    }

    return (
        <ErrDiv id="modal-close">
            <p>Usuario o contraseña Incorrecto</p>
            <Closed onClick={Close}>&times;</Closed>
        </ErrDiv>
    );
}