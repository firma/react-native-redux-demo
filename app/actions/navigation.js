import * as types from './types';
import { NavigationExperimental } from 'react-native';
const { jumpToIndex } = NavigationExperimental.StateUtils;


export function setTab(tabIndex) {
    return (dispatch, getState) => {
        const { tabs } = getState()

        dispatch(Object.assign({ type: types.SET_TAB }, jumpToIndex(tabs, tabIndex)));
    }
}

export function navigate(action) {
    return (dispatch, getState) => {
        dispatch(navigateForward(action))
    }
}

function navigateForward(state) {
    return {
        type: types.NAVIGATION_FORWARD,
        state
    }
}

export function navigateBack() {
    return (dispatch, getState) => {
        dispatch({
            type: types.NAVIGATION_BACK
        })
    }
}