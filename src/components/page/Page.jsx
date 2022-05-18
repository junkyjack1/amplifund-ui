import React from 'react';
import PropTypes from 'prop-types';
import './page.css';

export const Page = ({children, cssClasses}) => {
  return (
    <div className={['page', cssClasses].join(' ')}>
        {children}
    </div>
  );
};

Page.propTypes = {
    cssClasses: PropTypes.string
};

Page.defaultProps = {
    cssClasses: null
};
