import React, { Component } from 'react';
import  { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import  { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { recipeCount: 0 }
    }

    incrementRecipeCount() {
        this.setState({ recipeCount: this.state.recipeCount + 1 })
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={{ marginTop: 20 }}>
                    fuck....{this.state.recipeCount}
                </Text>
                <TouchableHighlight onPress={()=> { this.incrementRecipeCount() }}>
                    <Text> add recipe</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

//function mapStateToProps(state) {
//    return {
//        navigationState: state.navigationState
//    };
//}

export default connect(()=> {
    return {}
}, mapDispatchToProps)(AppContainer);