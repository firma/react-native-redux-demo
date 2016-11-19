import * as types from './types'
import Api from '../lib/api'

export function fetchUsers(ingredients) {
    return (dispatch, getState) => {
        const params = [
            `page=${encodeURIComponent(ingredients)}`,
            'pageSize=20',
            "apikey=dDsoDAZdITM1EQ"
        ].join('&')
        return Api.get(`api/v1/user/list?${params}`).then(resp => {

            dispatch(setUserList({ recipes: resp.data }));
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function userLogin(username, password) {
    return (dispatch, getState) => {
        const formData = new FormData()
        formData.append('username', `${encodeURIComponent(username)}`)
        formData.append('password', `${encodeURIComponent(password)}`)

        return Api.post(`api/v1/user/login`, formData).then(resp => {
            const data = {
                type: types.USER_INFO,
                resp
            };
            dispatch(setUserInfo({ recipes: resp.data }));
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function setUserInfo({ recipes }) {
    return {
        type: types.USER_INFO,
        recipes,
    }
}

export function setUserList({ recipes }) {
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