import axios from 'axios';
import * as actionTypes from './actionTypes';


export const getMealsSuccess = (data) => {
    return {
        type: actionTypes.GET_MEALS_SUCCESS,
        payload: data,
    };
};

export const filterMealsSuccess = (data) => {
    return {
        type: actionTypes.FILTER_MEAL_SUCCESS,
        payload: data,
    };
};

export const getMealSuccess = (data) => {
    return {
        type: actionTypes.GET_MEAL_SUCCESS,
        payload: data,
    };
};

export const getMeals = () => {
    return async (dispatch) => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
            .then((response) => {
                dispatch(getMealsSuccess(response.data.meals));
            })
            .catch((error) => {
                console.log(error)
            });
    };
}

export const filterMeal = (val) => {
    return async (dispatch) => {
        await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
            .then((response) => {
                dispatch(getMealsSuccess(response.data.meals));
            })
            .catch((error) => {
                console.log(error)
            });
    };
}

export const getMeal = (id) => {
    return async (dispatch) => {
        await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        
            .then((response) => {
                dispatch(getMealSuccess(response.data.meals));
            })
            .catch((error) => {
                console.log(error)
            });
    };
}