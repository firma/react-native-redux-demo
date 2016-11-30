import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/index'
import AppContainer from './containers/AppContainer'
//import AppContainerWithCardStack from './containers/AppContainerWithCardStack'
//import thunk from 'redux-thunk'
//import AppContainerWithCardStack from './containers/AppContainerWithCardStack'
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
//const store = createStoreWithMiddleware(reducers)

// // middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
//
function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(reducers, initialState, enhancer);
}
const store = configureStore({});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* Change the component below to flip between the NavigationTransitioner
                 and the NavigationCardStack examples: */ }
                <AppContainer />
            </Provider>
        )
    }
}
