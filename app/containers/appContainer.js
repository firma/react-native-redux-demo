import React, {Component} from 'react';
import {Platform, View, Text} from 'react-native';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import  reducer from '../reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
const Application = (Platform.OS === 'ios') ? require('./app.ios.js') : require('./app.android.js');

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <Application />}
            </Provider>
        );
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
