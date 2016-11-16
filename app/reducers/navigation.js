import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar } = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

import ApplicationTabs from '../components/ApplicationTabs/ApplicationTabs'
import Login from '../components/Login'
import Home from '../components/Home'


const allTabs = [
    (lastRoute) => lastRoute || Object.assign({ key: 'Home', index: 0 }),
    (lastRoute) => lastRoute || Object.assign({ key: 'Login', index: 1 }),
];

export const tabs = createReducer({ index: 0, key: 'Login', routes: allTabs }, {
    [types.SET_TAB](state, action) {
        console.log
        return Object.assign({}, state, allTabs[action.index]());
    }
});

export const navigationState = createReducer({
    index: 0,
    routes: [
        { key: 'ApplicationTabs', },
        { key: 'Detail' },
    ]
}, {

    [types.NAVIGATION_FORWARD](state, action) {
        return NavigationStateUtils.forward(state);
    },

    [types.NAVIGATION_BACK](state, action) {
        return NavigationStateUtils.back(state);
    },

});

export const navigationParams = createReducer({}, {
    [types.NAVIGATION_FORWARD](state, action) {
        return action.state;
    },

});
