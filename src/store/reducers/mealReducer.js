import { GET_MEALS_SUCCESS, FILTER_MEAL_SUCCESS, GET_MEAL_SUCCESS } from "../actions/actionTypes";

const initialState = {
    meals: [],
    meal: {}
}


const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEALS_SUCCESS: return {
            ...state,
            meals: action.payload
        }
        case FILTER_MEAL_SUCCESS: return {
            ...state,
            meals: action.payload
        }
        case GET_MEAL_SUCCESS: return {
            ...state,
            meal: action.payload
        }
        default: return state
    }
}


export default mealReducer;