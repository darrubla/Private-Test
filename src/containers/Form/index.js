import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import {
    Label,
    Input,
} from 'reactstrap';

import Button from '../../components/Button';
import InputComponent from '../../components/Input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Form.scss';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            celular: '',
            edad: '',
            invalidEmail: false,
            invlidCelular: false,
            dataSubmitted: false,
            disabled: false
        }
    }

    componentDidUpdate() {
        const {
            name, email, celular, edad, invalidEmail, invalidCelular, disabled
        } = this.state;
        if (name !== '' && email !== '' && celular !== '' && edad !== '' && disabled) {
            if (invalidEmail || invalidCelular) {
                this.showToast('Verifica los campos marcados en rojo', 'warning');
                this.setState({disabled: false});
            } else {
                console.log('@nombre: ', name);
                console.log('@email: ', email);
                console.log('@celular: ', celular);
                console.log('@edad: ', edad);
                this.showToast('Tu información fue enviada con éxito, estaremos en contacto contigo', 'success');
                setTimeout(() => this.clearFields(), 5000);
            }
        }
    }

    handleOnChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
            invalidEmail: false,
            invalidCelular: false
        });
    }

    redirectToMenu = () => {
        const { history } = this.props;
        history.push({
            pathname: "/",
        });
    }

    clearFields = () => {
        this.setState({
            name: '',
            edad: '',
            celular: '',
            email: '',
            invalidEmail: false,
            invlidCelular: false,
            dataSubmitted: false,
            disabled: false
        })
    }

    showToast = (text, type) => {
        toast[type](text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    validateFields = () => {
        const { email, celular } = this.state;
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            this.setState({invalidEmail: true});
        }
        if (!celular.match(/\d{10}/)) {
            this.setState({invalidCelular: true});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, celular, edad } = this.state;
        this.setState({disabled: true});
        if (name !== '' && email !== '' && celular !== '' && edad !== '') {
            this.validateFields();
        } else {
            this.showToast('Debes llenar todos los campos', 'error');
            this.setState({disabled: false});
        }
    }

    render() {
        const { location: { state: {airlineName } } }  = this.props;
        const {
            name, email, celular, edad, invalidEmail, invalidCelular, disabled
        } = this.state;
        const toastProps = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
        }
        return (
            <section className="form">
                <ToastContainer {...toastProps} />
                <h3>{`Hola, bienvenido, sabemos que quieres viajar en un ${airlineName}, por favor diligencia el siguiente formulario:`}</h3>
                <form className={`${airlineName}-form`} >
                    <div className="form-group">
                        <InputComponent
                            className="nombre"
                            type="text"
                            placeholder="Ingresa tu nombre..."
                            name="name"
                            labelText="Nombre Completo*"
                            onChange={this.handleOnChange}
                            value={name}
                        />
                        <InputComponent
                            className="email"
                            placeholder="Ingresa tu email..."
                            name="email"
                            type="email"
                            labelText="Email*"
                            onChange={this.handleOnChange}
                            value={email}
                            invalid={invalidEmail}
                        />
                        <div className="form-group">
                            <Label>Celular*</Label>
                            <NumberFormat
                                format="##########"
                                mask="_"
                                className="celular"
                                customInput={Input}
                                type="tel"
                                placeholder="Ingresa tu celular..."
                                name="celular"
                                onChange={this.handleOnChange}
                                value={celular}
                                invalid={invalidCelular}
                            />
                        </div>
                        <InputComponent
                            className="edad form-select"
                            type="select"
                            labelText="Edad*"
                            name="edad"
                            onChange={this.handleOnChange}
                            value={edad}
                            >
                            <option value="">Escoge un rango de edad</option>
                            <option value="18 - 25">18 - 25</option>
                            <option value="26 - 50">26 - 50</option>
                            <option value="51 - 75">51 - 75</option>
                            <option value="76 - 100">76 - 100</option>
                        </InputComponent>
                    </div>
                    <Button
                        text="Enviar"
                        action={this.handleSubmit}
                        disabled={disabled}
                    />
                </form>
                <Button
                    text="Volver"
                    action={this.redirectToMenu}
                    disabled={disabled}
                />
            </section>
        )
    }
}
