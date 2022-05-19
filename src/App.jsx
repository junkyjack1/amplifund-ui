import './app.css';
import React, { useContext } from 'react';
import { Review } from './pages/review/Review';
import { Intro } from './pages/intro/Intro';
import { Outro } from './pages/outro/Outro';
import { store } from './store.js';
import { pages } from './constants';

const App = () => {
    const { state: { activePage} } = useContext(store);
    return (
        <div id='app'>
            {activePage == pages.intro && <Intro /> }
            {activePage == pages.outro && <Outro /> }
            {activePage == pages.review && <Review /> }
        </div>
    );
}

export default App;
