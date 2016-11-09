import React, {Component} from 'react';
import  {View, Text} from 'react-native'
import {connect} from 'react-redux'
import  {ActionCreators} from '../actions/index'
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigationState
    };
}

class Application extends Component {
    render() {
        <View>
            <Text style={{marginTop: 20}}>
                I am App index
            </Text>
        </View>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);