import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '/src/components/page/Page';
import { Carousel } from '/src/components/carousel/Carousel';
import { Description } from '../../components/description/Description';
import { NavButtons } from '/src/components/nav-buttons/NavButtons';
import './review.css';

export const Review = ({}) => {
    return (
        <Page cssClasses='review'>
            <h2>Select a Persona</h2>
            <Carousel />
            <h2>Select a Car</h2>
            <Carousel />
            <Description />
            <NavButtons />
        </Page>
    );
};

Review.propTypes = {
};

Review.defaultProps = {

};
