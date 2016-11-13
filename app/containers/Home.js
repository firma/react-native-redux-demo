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
        this.props.fetchUsers('2');
    }

    userList() {
        return Object.keys(this.props.searchedRecipes).map(key=>this.props.searchedRecipes[key])
    }

    render() {
        return <View style={{ marginTop: 20 }}>
            <View>
                <TouchableHighlight onPress={ () => this.getUserList()}>
                    <Text> Init Data </Text>
                </TouchableHighlight>
            </View>

            <ScrollView >
                {this.userList().map((recipe)=> {
                    return <View key={recipe.id}>
                        <Image source={{ uri: recipe.avatar }} style={{height:120}}/>
                        <Text>{recipe.username}</Text>
                    </View>
                })}
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
