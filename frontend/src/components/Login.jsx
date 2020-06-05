import React from 'react';
import {
    ButtonLogin,
    DivButtonLogin,
    SpanStyle,
    LoginStyle,
    LabelCheckBox,
    InputStyle,
    InputCheckbox, FormStyle, DivInputStyle,
    DivCheckbox
} from "../css/styles";

class Login extends React.Component {
    state = {
        form: {
            email: "",
            pwd: "",
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
            <LoginStyle>
                <div className="Login-container">
                    <div className="Login-logo">
                        <figure>
                            <img src="/" alt="" />
                        </figure>
                    </div>
                    <FormStyle>
                        <div className="Login-titulo">
                            <h1 style={{textAlign: "center"}}>Bienvenido</h1>
                        </div>
                        <DivInputStyle>
                            <InputStyle onChange={this.handleChange}
                              type="email"
                              name="email"
                              id="InputEmail"
                              placeholder="Ingresa tu Email" />
                        </DivInputStyle>
                        <DivInputStyle>
                            <InputStyle
                              onChange={this.handleChange}
                              type="password"
                              name="pwd"
                              id="InputPassword"
                              pattern=".*"
                              placeholder="Ingresa tu Contraseña" />
                        </DivInputStyle>
                        <DivCheckbox>
                            <InputCheckbox
                              type="checkbox"
                              name="checkbox-login"
                              id="Inputcheckbox" />
                            <LabelCheckBox
                              htmlFor="Inputcheckbox">Recuerdame</LabelCheckBox>
                        </DivCheckbox>
                        <DivButtonLogin>
                            <ButtonLogin
                              type="button"
                              onClick={this.print}>Ingresa</ButtonLogin>
                        </DivButtonLogin>
                    </FormStyle>
                    <div className="Login-Register" style={{margin: '5%'}}>
                        <p>No estas registrado? <a href="/#/register"> crea tu cuenta</a></p>
                    </div>
                </div>
            </LoginStyle>
        );
    }
}

export default Login;
