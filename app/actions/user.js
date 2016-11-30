import { USER_LIST } from '../configure/types'
// The following action creators were derived from NavigationStackReducer
import { AsyncStorage } from 'react-native';

export function fetchUsers(ingredients) {

    const params = [
        `page=${encodeURIComponent(ingredients)}`,
        'pageSize=20'
    ].join('&')

    return Api.get(`api/v1/user/list?${params}`).then(resp => {
        {
            type: USER_LIST,
                resp.data
        }
        //dispatch(setUserList({ recipes: resp.data }));
    }).catch((ex) => {
        console.log(ex);
    });

    //
    //return (dispatch, getState) => {
    //    const params = [
    //        `page=${encodeURIComponent(ingredients)}`,
    //        'pageSize=20'
    //    ].join('&')
    //    return Api.get(`api/v1/user/list?${params}`).then(resp => {
    //        dispatch(setUserList({ recipes: resp.data }));
    //    }).catch((ex) => {
    //        console.log(ex);
    //    });
    //}
}

export function setUserList({ recipes }) {
    return {
        type: types.USER_LIST,
        recipes,
    }
}