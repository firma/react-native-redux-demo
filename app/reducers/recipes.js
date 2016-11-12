import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
//
export const searchedRecipes = createReducer({}, {
    [types.USER_LIST](state, action) {
        let newState = {}
        action.recipes.forEach((recipe) => {

            //console.log(recipe);
            let id = recipe.id
            console.log(recipe);
            newState[id] = Object.assign({}, recipe, { id });
        });
        return newState;
    },
});

export const recipeCount = createReducer(0, {
    [types.USER_REGISTER](state, action)  {
        return state + 1;
    }
});