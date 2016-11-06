import React, {Component} from 'react';
import {Platform} from 'react-native';

import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers';
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(reducers, initialState, enhancer);
}

const AppContainer = (Platform.OS === 'ios') ? require('./app.ios.js') : require('./app.android.js');

const store = configureStore({});


export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

