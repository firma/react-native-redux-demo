import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import About from '../About';
import Home from '../Home';
import Login from '../Login';

class ApplicationTabs extends Component {

    onPress(tableIndex) {
        this.props.setTab(tableIndex)
    }

    renderScene(component) {
        return (
            <View style={{ flex: 1 }}>
                {React.createElement(component, this.props)}
            </View>
        )
    }

    render() {
        console.log(this.props);
        return (
            <TabBarIOS style={{ flex: 1 }}>
                <TabBarIOS.Item
                    systemIcon="favorites"
                    iconSize={25}
                    onPress={() => {return this.onPress(0)}}
                    selected={this.props.tabs.index === 0}
                >
                    {this.renderScene(Login)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    systemIcon="more"
                    onPress={() => {return this.onPress(1)}}
                    selected={this.props.tabs.index === 1}
                    iconSize={25}>

                    {this.renderScene(About)}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        tabs: state.tabs
    };
}
//
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators(ActionCreators, dispatch);
//}

export default connect(mapStateToProps)(ApplicationTabs);
