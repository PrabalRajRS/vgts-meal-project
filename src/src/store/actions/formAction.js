import * as actionTypes from './actionTypes';


export const saveForm = (data) => {
    return {
        type: actionTypes.SAVE_FORM,
        payload: data,
    };
};

