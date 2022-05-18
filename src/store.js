import React, {createContext, useReducer} from 'react';
import { pages } from './constants';

const initialState = {
    activePage: pages.intro,
    activePeresona: null,
    activeCar: null,
    activeDescription: null,
    personas: [],
    cars: []
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = Object.assign({}, state); 
        
        // do something with the action

        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }