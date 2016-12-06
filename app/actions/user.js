import { USER_LIST, USER_INFO } from '../configure/types'
// The following action creators were derived from NavigationStackReducer
import NetWork from '../lib/Network'
import { navigatePush } from './navigate'

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


export function userLogin(username, password) {
    return (dispatch, getState) => {
        const formData = new FormData()
        formData.append('username', `${encodeURIComponent(username)}`)
        formData.append('password', `${encodeURIComponent(password)}`)

        const data = storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true
        }).then(ret => {
            return ret;
            //if (ret.user.token.length > 0) {
            //    dispatch(navigatePush('Second'))
            //}
            //return {
            //    type: USER_INFO,
            //    resp
            //}
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        })
        return NetWork.post(`api/v1/user/login`, formData).then(resp => {
            if (resp.code == 200) {
                storage.save({
                    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                    rawData: {
                        user: resp.data
                    },

                    // 如果不指定过期时间，则会使用defaultExpires参数
                    // 如果设为null，则永不过期
                    expires: 1000 * 3600
                });
                dispatch(navigatePush('Second'))
            } else {
                {
                    type: USER_INFO,
                        resp
                }
            }

        }).catch((ex) => {
            console.log(ex);
        });
    }
}
export function authLogin() {
    return (dispatch, getState) => {
        const data = storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true
        }).then(ret => {
            //dispatch(navigatePush('Second'))
            return ret.user;
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        })

        dispatch({ type: USER_INFO, data });
    }
}