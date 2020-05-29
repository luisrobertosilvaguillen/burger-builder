import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false,
    building: false
};

const addIngredient = (state, action) => {
    let totalPrice = state.totalPrice;
    const updatedIngredients = state.ingredients.map(
        (ingredient) => {
            let quantity = ingredient.quantity;
            if(ingredient.type === action.ingredientType){
                quantity += 1;
                totalPrice += ingredient.price;
            }
            
            return {...ingredient, quantity}
        }
    );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: totalPrice
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {

    let totalPrice = state.totalPrice;
    const updatedIngredients = state.ingredients.map(
        (ingredient) => {
            let quantity = ingredient.quantity;
            if(ingredient.type === action.ingredientType && ingredient.quantity > 0){
                quantity -= 1;
                totalPrice -= ingredient.price;
            }
            
            return {...ingredient, quantity}
        }
    );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: totalPrice
    }
    return updateObject(state, updatedState);
}

const setIngredients = (state, action) => {
    const ingredients = [];
    for (let key in action.ingredients) {
        ingredients.push({
            ...action.ingredients[key],
            id: key
        });
    }       
    return updateObject(state, {
        ingredients: ingredients,
        totalPrice: 0,
        error: false,
        building: false
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        case actionTypes.FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            }
        default:
            return state;
    }
};

export default reducer;