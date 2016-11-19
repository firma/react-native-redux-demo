import React, { Component } from 'react';
import {
    ScrollView, View, TextInput,
    Text,
    Image, TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Login from './Login';
class Home extends Component {

    getUserList() {
        this.props.fetchUsers('2');
    }

    userList() {
        return Object.keys(this.props.getUserList).map(key=>this.props.getUserList[key])
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
    return {
        getUserList: state.getUserList
    };
}
export default connect(mapStateToProps)(Home)
