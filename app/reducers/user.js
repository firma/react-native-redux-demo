import createReducer from '../lib/createReducer'
import  { USER_LIST } from '../configure/types'


export function userStates(state = initialNavState, action) {
    switch (action.type) {
        case USER_LIST:
            console.log(initialNavState);
            return initialNavState;
        default:
            return state
    }
}