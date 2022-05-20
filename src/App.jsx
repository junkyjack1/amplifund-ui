import './app.css';
import React, { useContext, useEffect } from 'react';
import { Review } from './pages/review/Review';
import { Intro } from './pages/intro/Intro';
import { Outro } from './pages/outro/Outro';
import { store } from './store.js';
import { pages } from './constants';
import { fetchCars, fetchPersonas } from './api';

const App = () => {
    const { state: { activePage }, dispatch } = useContext(store);

    useEffect(() => {
        fetchPersonas(dispatch);
        fetchCars(dispatch);
    }, []);

    return (
        <div id='app'>
            {activePage == pages.intro && <Intro />}
            {activePage == pages.outro && <Outro />}
            {activePage == pages.review && <Review />}
        </div>
    );
}

export default App;
