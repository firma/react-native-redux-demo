// import {reducer as router} from 'react-native-router-redux';
//
// export {
//     router,
// };

import {combineReducers} from 'redux';
import * as recipesReducer from './Recipes'

export default combineReducers(Object.assign(
    recipesReducer,
));