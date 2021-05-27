import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends Component {

    render() {
        const { text, action, className } = this.props;
        return (
            <button
                className={`${className}-button button`}
                onClick={action}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func,
    className: PropTypes.string,
}

Button.defaultProps = {
    action: ({target}) => console.log('@action', target),
    className: 'index'
}
