import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export const Button = ({ label, cssClasses, ...props }) => {
    return (
        <button
            type="button"
            className={['button pure-button', cssClasses].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    cssClasses: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    cssClasses: null,
    onClick: undefined,
};
