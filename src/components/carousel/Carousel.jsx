import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import { Button } from '/src/components/button/Button';

export const Carousel = ({ cssClasses, activeItem, left, right }) => {
    return (
        <div className={['carousel pure-g', cssClasses].join(' ')}>
            <Button label="<" cssClasses='pure-u-1-6' onClick={left} />
            <div className={'image-container pure-u-2-3'}>
                {activeItem ?
                    <img src={activeItem.path} alt={activeItem.name} /> :
                    <h2>No Item Found</h2>
                }
            </div>
            <Button label=">" cssClasses='pure-u-1-6' onClick={right} />
        </div>
    );
};

Carousel.propTypes = {
    cssClasses: PropTypes.string,
    activeItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }),
    left: PropTypes.func,
    right: PropTypes.func
};

Carousel.defaultProps = {
    cssClasses: null,
    activeItem: null,
    items: [],
    left: undefined,
    right: undefined,
};