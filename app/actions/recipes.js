import * as types from './types'
import Api from '../lib/api'

export function fetchUsers(ingredients) {
    return (dispatch, getState) => {
        const params = [
            `page=${encodeURIComponent(ingredients)}`,
            'pageSize=20'
        ].join('&')
        return Api.get(`api/v1/user/list?${params}`).then(resp => {

            dispatch(setSearchedRecipes({ recipes: resp.data }));
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function setSearchedRecipes({ recipes }) {
    return {
        type: types.USER_LIST,
        recipes,
    }
}
//export function addRecipe() {
//    return {
//        type: types.USER_REGISTER,
//    }
//}