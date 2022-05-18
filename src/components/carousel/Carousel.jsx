import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import { Button } from '../button/Button';

export const Carousel = ({ cssClasses, activeItem, leftArrowAction, rightArrowAction}) => {
  return (
    <div className={['carousel pure-g', cssClasses].join(' ')}>
        <Button label="<" cssClasses='pure-u-1-6' onClick={leftArrowAction} />
        <div className={'image-container pure-u-2-3'}>
          {activeItem ?
            <img src={activeItem.path} alt={activeItem.name} /> :
            <h2>No Item Found</h2>
          }
        </div>
        <Button label=">" cssClasses='pure-u-1-6' onClick={rightArrowAction} />
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
  leftArrowAction: PropTypes.func.isRequired,
  rightArrowAction: PropTypes.func.isRequired
};

Carousel.defaultProps = {
  cssClasses: null,
  activeItem: null,
  items: [],
  leftArrowAction: undefined,
  rightArrowAction: undefined,
};