import createReducer from '../lib/createReducer'
import  { USER_LIST, USER_INFO } from '../configure/types'


export const getUserList = createReducer({}, {
    [USER_LIST](state, action) {
        let newState = {}
        action.recipes.forEach((recipe) => {

            //console.log(recipe);
            let id = recipe.id
            //console.log(recipe);
            newState[id] = Object.assign({}, recipe, { id });
        });
        return newState;
    },
});

export const userInfo = createReducer({}, {
    [USER_INFO](state, action) {
        console.log(state);
        return action.code;
    },
});