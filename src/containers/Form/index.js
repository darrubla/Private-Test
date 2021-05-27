import React, { Component } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import './Form.scss';

export default class Form extends Component {
    handleOnChange = ({target}) => {
        console.log('@value: ', target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('@value: ', e.target);
    }

    render() {
        const { location: { state: {airlineName } } }  = this.props;
        return (
            <section className="form">
                <h3>{`Hola, bienvenido, sabemos que quieres viajar en un ${airlineName}, por favor diligencia el siguiente formulario:`}</h3>
                <form className={`${airlineName}-form`} >
                    <div className="form-group">
                        <Input
                            className="nombre"
                            type="text"
                            placeholder="Ingresa tu nombre..."
                            name="name"
                            labelText="Nombre Completo"
                            onChange={this.handleOnChange}
                        />
                        <Input
                            className="email"
                            placeholder="Ingresa tu email..."
                            name="email"
                            type="email"
                            labelText="Email"
                            onChange={this.handleOnChange}
                        />
                        <Input
                            className="celular"
                            type="text"
                            placeholder="Ingresa tu celular..."
                            name="celular"
                            labelText="Celular"
                            onChange={this.handleOnChange}
                        />
                        <Input
                            className="edad form-select"
                            type="select"
                            labelText="Edad"
                            name="edad"
                            onChange={this.handleOnChange}
                            >
                            <option value="18 - 25">18 - 25</option>
                            <option value="26 - 50">26 - 50</option>
                            <option value="51 - 75">51 - 75</option>
                            <option value="76 - 100">76 - 100</option>
                        </Input>
                    </div>
                    <Button
                        text="Enviar"
                        action={this.handleSubmit}
                    />
                </form>
            </section>
        )
    }
}
