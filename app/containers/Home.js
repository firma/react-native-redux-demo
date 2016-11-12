import React, { Component } from 'react';
import {
    ScrollView, View, TextInput,
    Text,
    Image, TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {

    getUserList() {
        this.props.fetchUsers('1');
    }

    render() {
        return <View style={{ marginTop: 20 }}>
            <View>
                <TouchableHighlight onPress={ () => this.getUserList()}>
                    <Text> Init Data </Text>
                </TouchableHighlight>
            </View>
            <ScrollView>
            </ScrollView>
        </View>
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        searchedRecipes: state.searchedRecipes
    };
}
export default connect(mapStateToProps)(Home)
