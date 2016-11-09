import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import  reducer from './reducers';

const Application = (Platform.OS === 'ios') ? require('./containers/app.ios.js') : require('./containers/app.android.js');
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

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


class Lemonveil extends Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={{ marginTop: 20 }}>
                    xxxx
                </Text>
            </View>
        );
    }
}

const App = () => (
    <Provider store={store}>
        <Lemonveil/>
    </Provider>
)

export default App;

