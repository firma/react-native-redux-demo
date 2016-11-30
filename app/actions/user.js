import { USER_LIST } from '../configure/types'
// The following action creators were derived from NavigationStackReducer
import NetWork from '../lib/Network'

export function fetchUsers(ingredients) {
    return (dispatch, getState) => {
        const params = [
            `page=${encodeURIComponent(ingredients)}`,
            'pageSize=20',
            "apikey=dDsoDAZdITM1EQ"
        ].join('&')
        return NetWork.get(`api/v1/user/list?${params}`).then(resp => {

            {
                type: USER_LIST,
                    resp.data
            }

           // dispatch(setUserList({ users: resp.data }));
        }).catch((ex) => {
            console.log(ex);
        });
    }
}

export function setUserList({ users }) {
    return {
        type: types.USER_LIST,
        users,
    }
}