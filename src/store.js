import React, { createContext, useReducer } from 'react';
import { actions, pages } from './constants';

// TODO: Deconstruct and organize

const initialState = {
    activePage: pages.intro,
    activeCar: null,
    activeCarIndex: 0,
    activePersona: null,
    activePersonaIndex: 0,
    activeDescription: null,
    introPageError: null,
    reviewPageError: null,
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

    newState.activeCar = newState.cars[newState.activeCarIndex];

    return newState;
};

const setPreviousCar = (newState) => {
    let maxIndex = newState.cars.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activeCarIndex === 0)
        newState.activeCarIndex = maxIndex;
    else
        newState.activeCarIndex--;

    newState.activeCar = newState.cars[newState.activeCarIndex];

    return newState;
};

const setNextPersona = (newState) => {
    let maxIndex = newState.personas.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activePersonaIndex === maxIndex)
        newState.activePersonaIndex = 0;
    else
        newState.activePersonaIndex++;

    newState.activePersona = newState.personas[newState.activePersonaIndex];

    return newState;
};

const setPreviousPersona = (newState) => {
    let maxIndex = newState.personas.length - 1;

    if (maxIndex < 0)
        return newState;

    if (newState.activePersonaIndex === 0)
        newState.activePersonaIndex = maxIndex;
    else
        newState.activePersonaIndex--;

    newState.activePersona = newState.personas[newState.activePersonaIndex];

    return newState;
};

const getCarsStart = (newState) => {
    newState.isLoadingCars = true;

    return newState;
};

const getCarsSuccess = (newState, payload) => {
    newState.isLoadingCars = false;
    newState.cars = payload;

    if(payload.length > 0)
        newState.activeCar = payload[0];

    return newState;
};

const getCarsError = (newState, err) => {
    newState.isLoadingCars = false;
    newState.introPageError = err;

    return newState;
}

const getPersonasStart = (newState) => {
    newState.isLoadingPersonas = true;

    return newState;
};

const getPersonasSuccess = (newState, payload) => {
    newState.isLoadingPersonas = false;
    newState.personas = payload;

    if(payload.length > 0)
        newState.activePersona = payload[0];

    return newState;
};

const getPersonasError = (newState, err) => {
    newState.isLoadingPersonas = false;
    newState.introPageError = err;

    return newState;
}

const getDescriptionStart = (newState) => {
    newState.isLoadingDescription = true;

    return newState;
};

const getDescriptionSuccess = (newState, payload) => {
    newState.isLoadingDescription = false;
    newState.activeDescription = payload.text;

    return newState;
};

const getDescriptionError = (newState, err) => {
    newState.isLoadingDescription = false;
    newState.introPageError = err;

    return newState;
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const { type, payload } = action;
        const newState = Object.assign({}, state);

        switch (type) {
            case actions.setActivePage: return setActivePage(newState, payload);
            case actions.setNextCar: return setNextCar(newState);
            case actions.setPreviousCar: return setPreviousCar(newState);
            case actions.setNextPersona: return setNextPersona(newState);
            case actions.setPreviousPersona: return setPreviousPersona(newState);
            case actions.getCarsStart: return getCarsStart(newState);
            case actions.getCarsSuccess: return getCarsSuccess(newState, payload);
            case actions.getCarsError: return getCarsError(newState, payload);
            case actions.getPersonasStart: return getPersonasStart(newState);
            case actions.getPersonasSuccess: return getPersonasSuccess(newState, payload);
            case actions.getPersonasError: return getPersonasError(newState, payload);
            case actions.getDescriptionStart: return getDescriptionStart(newState);
            case actions.getDescriptionSuccess: return getDescriptionSuccess(newState, payload);
            case actions.getDescriptionError: return getDescriptionError(newState, payload);

            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
