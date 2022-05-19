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
            <NavButtons
                back={() => dispatch({ type: actions.setPage, payload: pages.review })}
            />
        </Page>
    );
};
