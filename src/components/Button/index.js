import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends Component {

    render() {
        const {
            text, action, className, disabled
        } = this.props;
        return (
            <button
                className={`${className}-button button`}
                onClick={action}
                disabled={disabled}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    action: ({target}) => console.log('@action', target),
    className: 'index',
    disabled: false
}
