import React from 'react';

import {
    ButtonLogin,
    LoginStyle,
    RInputStyle,
    FormStyle, RDivInputStyle, RSelect,AlignCenter
} from "../css/styles";

class Register extends React.Component {
    state = {
        form: {
            name: "",
            lastname: "",
            mobile: "",
            email: "",
            pwd: "",
            cpwd: "",
            type_id: "",
            id: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    }

    print = () => {
        console.log(this.state);
    }
    
    render() {
        return (
            <LoginStyle style={{ width: '555px' }}>
                <div className="Register-container">
                    <div className="Register-logo">
                        <figure>
                            <img src="/" alt="" />
                        </figure>
                    </div>
                    <div className="Register-titulo">
                        <AlignCenter>Registro</AlignCenter>
                    </div>
                    <form>
                        <RDivInputStyle>
                            <RInputStyle onChange={this.handleChange}
                              type="text"
                              name="name"
                              id="InputName"
                              placeholder="Ingresa tu Nombre" required />
                            <RInputStyle onChange={this.handleChange}
                              type="text"
                              name="lastname"
                              id="InputLastName"
                              placeholder="Ingresa tu Apellido" required />
                        </RDivInputStyle>
                        <RDivInputStyle>
                            <RInputStyle onChange={this.handleChange}
                              type="tel"
                              name="mobile"
                              id="InputMobile"
                              placeholder="Numero de telefono" required />
                            <RInputStyle onChange={this.handleChange}
                              type="email"
                              name="email"
                              id="InputEmail"
                              placeholder="Ingresa tu Email" required />
                        </RDivInputStyle>
                        <RDivInputStyle>
                            <RInputStyle onChange={this.handleChange}
                              type="password"
                              name="pwd"
                              id="pwd"
                              placeholder="Ingresa tu Contraseña" required />
                            <RInputStyle onChange={this.handleChange}
                              type="password"
                              name="cpwd"
                              id="cpwd"
                              placeholder="Verifica tu Contraseña" required />
                        </RDivInputStyle>
                        <RDivInputStyle>
                            <RSelect name="type_id"
                              id="type_id"
                              defaultValue={"#"}
                              onChange={this.handleChange} required>
                                <option value="#" disabled>Tipo Documento</option>
                                <option value="CC">Cedula de ciudadania</option>
                                <option value="CE">Cedula de extranjeria</option>
                                <option value="P">Pasaporte</option>
                            </RSelect>
                            <RInputStyle
                              onChange={this.handleChange}
                              type="text"
                              name="id"
                              id="InputId"
                              placeholder="Ingresa tu # de identificacion" />
                        </RDivInputStyle>
                        <div className="Register-button">
                            <ButtonLogin style={{ width: '80%', margin: '0 auto' }}
                              type="button"
                              onClick={this.print}
                              href="/#/verification">Registrate</ButtonLogin>
                        </div>
                    </form>
                    <RDivInputStyle className="Register-conditions">
                        <p style={{ margin: '2.5%' }}>Al registrarte aceptas nuestras <a href="/"> condiciones</a></p>
                    </RDivInputStyle>
                </div>
            </LoginStyle>
        );
    }
}
export default Register;
