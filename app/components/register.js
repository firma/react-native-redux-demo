import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import Dimensions from 'Dimensions';

let windowSize = Dimensions.get('window');

const assets = {
    'logo': require('../../assets/logo.png')
};

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}}/>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                </View>
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                        <TextInput
                            style={[styles.input, styles.whiteFont]}
                            placeholder="用户名"
                            placeholderTextColor="#FFF"
                            value=''
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                        <TextInput
                            password={true}
                            style={[styles.input, styles.whiteFont]}
                            placeholder="密码"
                            placeholderTextColor="#FFF"
                            value=''
                        />
                    </View>
                    <View style={styles.forgotContainer}>
                        <Text style={styles.greyFont}>忘记密码?</Text>
                    </View>
                </View>
                <TouchableHighlight  >
                    <View style={styles.signin}>
                        <Text style={styles.whiteFont}>马上登陆</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.signup}>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    logo: {
        width: 300,
        height: 200,
        resizeMode: Image.resizeMode.contain
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        height: 30,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF',
        fontSize: 20
    }
});