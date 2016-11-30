// *** Action Types ***
import * as types from './types'

// *** Action Creators ***
// The following action creators were derived from NavigationStackReducer
export function navigatePush(state) {
    state = typeof state === 'string' ? { key: state, title: state } : state
    return {
        type: types.NAV_PUSH,
        state
    }
}

export function navigatePop() {
    return {
        type: types.NAV_POP
    }
}

export function navigateJumpToKey(key) {
    return {
        type: types.NAV_JUMP_TO_KEY,
        key
    }
}

export function navigateJumpToIndex(index) {
    return {
        type: types.NAV_JUMP_TO_INDEX,
        index
    }
}

export function navigateReset(routes, index) {
    return {
        type: types.NAV_RESET,
        index,
        routes
    }
}