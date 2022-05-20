import axios from 'axios';
import { actions, API_ROOT } from './constants';

export const fetchPersonas = async (dispatch) => {
    dispatch({ type: actions.getPersonasStart });

    try {
        const response = await axios.get(API_ROOT + '/review/personas');

        dispatch({ type: actions.getPersonasSuccess, payload: response.data });

    } catch (error) {
        dispatch({ type: actions.getPersonasError, payload: error });
    }
};

export const fetchCars = async (dispatch) => {
    dispatch({ type: actions.getCarsStart });

    try {
        const response = await axios.get(API_ROOT + '/review/cars');

        dispatch({ type: actions.getCarsSuccess, payload: response.data });
    } catch (error) {
        dispatch({ type: actions.getCarsError, payload: error });
    }
};

export const fetchDescription = async(dispatch, carId, personaId) => {
    dispatch({ type: actions.getDescriptionStart });

    try {
        const response = await axios.get(`${API_ROOT}/review/description/${carId}/${personaId}`);

        dispatch({ type: actions.getDescriptionSuccess, payload: response.data });
    } catch (error) {
        dispatch({ type: actions.getDescriptionError, payload: error });
    }
};
