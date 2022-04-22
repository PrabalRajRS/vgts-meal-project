import { SAVE_FORM } from "../actions/actionTypes";

const initialState = {
    formValues: {},
}


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FORM: return {
            ...state,
            formValues: action.payload
        }

        default: return state
    }
}


export default formReducer;