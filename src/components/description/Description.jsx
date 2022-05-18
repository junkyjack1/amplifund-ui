import React from 'react';
import PropTypes from 'prop-types';
import './description.css';

export const Description = ({ text }) => {
    return (
        <div className='description'>
            <div className='floating-div'>
                <span className='text'>{ text ? text : 'No description loaded.' }</span>
            </div>
        </div>
    );
};

Description.propTypes = {
    text: PropTypes.string,
};

Description.defaultProps = {
    text: null,
};
