import React, { useContext } from 'react';
import { Page } from '../../components/page/Page';
import { NavButtons } from '../../components/nav-buttons/NavButtons';
import { store } from '../../store';
import { actions, pages } from '../../constants';

import './intro.css';

export const Intro = ({ }) => {
    const { dispatch } = useContext(store);

    return (
        <Page cssClasses='intro'>
            <h1>Intro Page</h1>
            <NavButtons
                next={() => dispatch({ type: actions.setPage, payload: pages.review})}
            />
        </Page>
    );
};
