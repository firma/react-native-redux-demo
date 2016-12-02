import React, { PropTypes } from 'react'
import { View, Text, StyleSheet,Image,TextInput,TouchableHighlight } from 'react-native'
import Dimensions from 'Dimensions';
import NavButton from './NavButton'
let windowSize = Dimensions.get('window');

const assets = {
    'logo': require('../assets/logo_ioc.png')
};
const FirstScreen = (props) => {

    return (
        //<View style={styles.container}>
        //    <Text style={styles.title}>First Screen</Text>
        //    <NavButton destLabel="Second" buttonHandler={props.onButtonPress}/>

            //<Text style={styles.title}>First Screen</Text>
            //<NavButton destLabel="to" buttonHandler={props.on}/>
        //</View>

        <View style={styles.container}>
            <Image style={styles.bg} source={require('../assets/background.png')}/>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/logo_ioc.png')}/>
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={require('../assets/login_user.png')}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="用户名"
                        placeholderTextColor="#FFF"
                        onChangeText={(username) => this.setState({ username })}
                        //value={this.state.username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={require('../assets/login_pass.png')}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="密码"
                        placeholderTextColor="#FFF"
                        onChangeText={(password) => this.setState({ password })}
                        //value={this.state.password}
                    />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>忘记密码?</Text>
                </View>
            </View>

            <NavButton tyle={styles.signin} destLabel="Login" buttonHandler={props.onButtonPress}/>

            <View style={styles.signup}>
            </View>
        </View>
    )
}

FirstScreen.propTypes = {
    onButtonPress: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
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
        backgroundColor: '#23ad74',
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
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#2F9CB2',
//        justifyContent: 'center',
//        alignItems: 'center'
//    },
//    title: {
//        fontSize: 24,
//        fontWeight: '500',
//        color: '#ffffff',
//        marginBottom: 30
//    }
//})

export default FirstScreen