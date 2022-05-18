import React from 'react';
import PropTypes from 'prop-types';
import './nav-buttons.css';
import { Button } from '/src/components/button/Button';

const getClassByAction = (action) => action ? '' : 'pure-button-disabled';

export const NavButtons = ({ cssClasses, back, next }) => {
    return (
        <div className={['nav-buttons', cssClasses].join(' ')}>
            <div className='floating-div'>
                <Button
                    label="Back"
                    onClick={back}
                    cssClasses={getClassByAction(back)}
                />
                <Button
                    label="Next"
                    onClick={next}
                    cssClasses={getClassByAction(next)}
                />
            </div>
        </div>
    );
};

NavButtons.propTypes = {
    cssClasses: PropTypes.string,
    back: PropTypes.func,
    next: PropTypes.func,
};

NavButtons.defaultProps = {
    cssClasses: null,
    back: undefined,
    next: undefined,
};
