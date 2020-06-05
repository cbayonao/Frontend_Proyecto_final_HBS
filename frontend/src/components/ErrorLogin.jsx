import React from 'react';
import { ErrDiv, Closed } from "../css/global";

export default () => {

    const Close = event => {
        event.preventDefault();
        $("#modal-close").hide();
    }

    return (
        <ErrDiv id="modal-close">
            <p translate="yes" lang="es"></p>
            <Closed onClick={Close}>&times;</Closed>
        </ErrDiv>
    );
}