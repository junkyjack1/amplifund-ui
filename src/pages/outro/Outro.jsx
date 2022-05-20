import React, { useContext } from 'react';
import { Page } from '../../components/page/Page';
import { NavButtons } from '../../components/nav-buttons/NavButtons';
import { store } from '../../store';
import { actions, pages } from '../../constants';

import './outro.css';

export const Outro = ({ }) => {
    const { dispatch } = useContext(store);
    return (
        <Page cssClasses='outro'>
            <h1>Outro Page</h1>
            <h3>Demo by: Tristen Ashchi</h3>
            <p>
                Thank you for exploring my app. I'm grateful for your time and consideration. I built the
                front-end using CDD for the design using storybook, and a unilateral data flow against a global state. On the
                back-end it's built using .net standard for the libs and .net 6 for the executables; using
                the unit of work, repository pattern, and a soa. The back-end is a docker container hosted in
                Azure App Services "AAS", and the front is a static site deployed to blob storage.
            </p>
            <h4><a href="https://www.linkedin.com/in/tristen-a-bb1351102" target="_blank">LinkedIn</a></h4>
            <h4><a href="https://github.com/junkyjack1/amplifund-ui" target="_blank">Front-end Repo</a></h4>
            <h4><a href="https://github.com/junkyjack1/Amplifund-Interview" target="_blank">Back-end Repo</a></h4>
            <NavButtons
                back={() => dispatch({ type: actions.setActivePage, payload: pages.review })}
            />
        </Page>
    );
};
