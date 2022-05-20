import React, { useContext } from 'react';
import { Page } from '../../components/page/Page';
import { NavButtons } from '../../components/nav-buttons/NavButtons';
import { store } from '../../store';
import { actions, pages } from '../../constants';

import './intro.css';

export const Intro = ({ }) => {
    const {state: {isLoadingPersonas, isLoadingCars, introPageError}, dispatch } = useContext(store);

    return (
        <Page cssClasses='intro'>
            <h1>Intro Page</h1>
            <p>
                Hey Guys! On the next screen you'll be presented with a small application
                that allows you select a Persona and a Car, and see what they have to say about that car.
                Fun fact: it's mobile friendly!
            </p>
            {(isLoadingPersonas || isLoadingCars) && <p><b>Loading...</b></p>}
            {introPageError && <p>ERROR: {JSON.stringify(introPageError)}</p>}
            <NavButtons
                next={() => dispatch({ type: actions.setActivePage, payload: pages.review})}
            />
        </Page>
    );
};
