import React, {Component, Platform} from 'react-native';
import {createStore, combineReducers} from 'redux';

import {Provider} from 'react-redux/native';
import * as reducers from '../reducers/index';

const Application = (Platform.OS === 'ios') ? require('./app.ios.js') : require('./app.android.js');

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <Application />}
            </Provider>
        );
    }
}