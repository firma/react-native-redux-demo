import { combineReducers } from 'redux'
import { navigationState } from './reducers'
import * as  UserReducers   from './user'


const appReducers = combineReducers({
    navigationState,
    UserReducers
})

export default appReducers;
