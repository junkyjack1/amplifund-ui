import React, { useContext } from 'react';
import { Page } from '../../components/page/Page';
import { Carousel } from '../../components/carousel/Carousel';
import { Description } from '../../components/description/Description';
import { NavButtons } from '../../components/nav-buttons/NavButtons';
import { actions, pages } from '../../constants';
import { store } from '../../store';

import './review.css';

export const Review = ({ }) => {
    const {
        state: {
            activePersona,
            activeCar,
            activeDescription,
            isLoading,
        },
        dispatch
    } = useContext(store);

    return (
        <Page cssClasses='review'>
            <h1>Review Page</h1>
            <h2>Select a Persona</h2>
            <Carousel
                cssClasses='persona-carousel'
                activeItem={activePersona}
                left={() => dispatch({ type: actions.setPreviousPersona })}
                right={() => dispatch({ type: actions.setNextPersona })}
            />
            <h2>Select a Car</h2>
            <Carousel
                cssClasses='car-carousel'
                activeItem={activeCar}
                left={() => dispatch({ type: actions.setPreviousCar })}
                right={() => dispatch({ type: actions.setNextCar })}
            />
            <Description
                activeDescription={activeDescription}
                isLoading={isLoading}
            />
            <NavButtons
                back={() => dispatch({ type: actions.setPage, payload: pages.intro })}
                next={() => dispatch({ type: actions.setPage, payload: pages.outro })}
            />
        </Page>
    );
};
