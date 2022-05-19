import React from 'react';
import PropTypes from 'prop-types';

import './description.css';

const getContent = (text, isLoading) => {
    return isLoading ?
        <span>LOADING...</span> :
        <span className='text'>{ text ? text : 'No description loaded.' }</span>;
}

export const Description = ({ text, isLoading }) => {
    return (
        <div className='description'>
            <div className='floating-div'>
                {getContent(text, isLoading)}
            </div>
        </div>
    );
};

Description.propTypes = {
    text: PropTypes.string,
    isLoading: PropTypes.bool
};

Description.defaultProps = {
    text: null,
    isLoading: false
};
