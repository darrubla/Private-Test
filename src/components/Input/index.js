import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
		FormGroup,
		Label,
		Input,
		InputGroup,
} from 'reactstrap';

import './Input.scss';

export default class InputComponent extends Component {

		render() {
				const {
					className, onChange, placeholder, type, children,
					name, labelText, invalid, pattern, value
				} = this.props;
				return (
					<FormGroup className="Input-component">
						{labelText && <Label>{labelText}</Label>}
						<InputGroup>
							<Input
								name={name}
								className={className ? `${className} input` : 'input'}
								onChange={onChange}
								placeholder={placeholder}
								type={type}
								invalid={invalid}
								parrern={pattern}
								value={value}
								required>
									{children}
								</Input>
						</InputGroup>
					</FormGroup>
				)
		}
}

InputComponent.propTypes = {
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
		className: PropTypes.string,
		name: PropTypes.string.isRequired,
		labelText: PropTypes.string.isRequired,
		invalidText: PropTypes.string,
		invalid: PropTypes.bool,
		pattern: PropTypes.string,
}

InputComponent.defaultProps = {
		placeholder: 'Ingrese aquí sus datos',
		onChange: ({target}) => console.log('@onChange', target),
		className: 'input',
		invalidText: 'Los datos ingresados no son validos',
		children: undefined,
		invalid: false,
		pattern: '.*'
}