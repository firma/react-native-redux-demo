import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native'
import Dimensions from 'Dimensions';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import Login from './Login'
import Second from '../store/Second'

let windowSize = Dimensions.get('window');

const assets = {
    'logo': require('../assets/logo_ioc.png')
};

class FirstScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    componentWillMount() {
        dataSourc = this.props.authLogin();
    }

    login() {
        dataSourc = this.props.userLogin(this.state.username, this.state.password);
        console.log(this.state);
        this.checkLogin()
    }

    checkLogin() {
        data = this.props.userInfo;
    }
    loginComponent() {
        console.log(this.props.userInfo)
        if (this.props.userInfo.length > 0) {
            return true;
        }
        return false;
    }
    render() {
        let loginComponent = this.loginComponent;
        return (
            { loginComponent } ?
                <Second />
                : <Login/>
        )
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigationState,
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
    mapStateToProps
    , mapDispatchToProps
)(FirstScreen)
