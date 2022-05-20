import React, { useContext, useEffect } from 'react';
import { Page } from '../../components/page/Page';
import { Carousel } from '../../components/carousel/Carousel';
import { Description } from '../../components/description/Description';
import { NavButtons } from '../../components/nav-buttons/NavButtons';
import { actions, pages } from '../../constants';
import { store } from '../../store';
import { fetchDescription } from '../../api';

import './review.css';

export const Review = ({ }) => {
    const {
        state: {
            activeCar,
            activeDescription,
            activePersona,
            isLoadingDescription,
        },
        dispatch
    } = useContext(store);

    useEffect(() => {
        if(activeCar && activePersona)
            fetchDescription(dispatch, activeCar.id, activePersona.id);
    }, [activeCar, activePersona]);

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
                text={activeDescription}
                activeDescription={activeDescription}
                isLoading={isLoadingDescription}
            />
            <NavButtons
                back={() => dispatch({ type: actions.setActivePage, payload: pages.intro })}
                next={() => dispatch({ type: actions.setActivePage, payload: pages.outro })}
            />
        </Page>
    );
};
