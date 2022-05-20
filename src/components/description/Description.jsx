import React from 'react';
import PropTypes from 'prop-types';

import './description.css';

export const Description = ({ text, isLoading, error }) => {
    return (
        <div className='description'>
            <div className='floating-div'>
               {isLoading && <span>LOADING...</span>}
               {error && <span>"ERROR!!!!: " + {JSON.stringify(error)}</span>}
               {(!isLoading && !error) && <span>Description: {text}</span>}
            </div>
        </div>
    );
};

Description.propTypes = {
    text: PropTypes.string,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    error: PropTypes.object
};

Description.defaultProps = {
    text: null,
    isLoading: false,
    hasError: false,
    error: null,
};
