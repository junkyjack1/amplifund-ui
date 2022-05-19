import React, { createContext, useReducer } from 'react';
import { actions, pages } from './constants';

const initialState = {
    activePage: pages.intro,
    activePersonaIndex: null,
    activeCarIndex: null,
    activeDescription: null,
    isLoadingDescription: false,
    isLoadingCars: false,
    isLoadingPersonas: false,
    personas: [],
    cars: []
};

const store = createContext(initialState);
const { Provider } = store;

const setActivePage = (newState, payload) => {
    newState.activePage = payload;

    return newState;
};

const setNextCar = (newState) => {
    let maxIndex = newState.cars.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activeCarIndex === maxIndex)
        newState.activeCarIndex = 0;
    else
        newState.activeCarIndex++;

    return newState;
}

const setPreviousCar = (newState) => {
    let maxIndex = newState.cars.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activeCarIndex === 0)
        newState.activeCarIndex = maxIndex;
    else
        newState.activeCarIndex--;

    return newState;
}

const setNextPersona = (newState) => {
    let maxIndex = newState.personas.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activePersonaIndex === maxIndex)
        newState.activePersonaIndex = 0;
    else
        newState.activePersonaIndex++;

    return newState;
}

const setPreviousPersona = (newState) => {
    let maxIndex = newState.personas.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activePersonaIndex === 0)
        newState.activePersonaIndex = maxIndex;
    else
        newState.activeCarIndex--;

    return newState;
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const { type, payload } = action;
        const newState = Object.assign({}, state);

        switch (type) {
            case actions.setPage:
                return setActivePage(newState, payload);
            case actions.setNextCar:
                return setNextCar(newState);
            case actions.setPreviousCar:
                return setPreviousCar(newState);
            case actions.setNextPersona:
                return setNextPersona(newState);
            case actions.setPreviousPersona:
                return setPreviousPersona(newState);
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
