import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const NavButton = (props) => {
    return (
        <TouchableOpacity style={styles.signin} onPress={props.buttonHandler}>
            <Text style={styles.label}> {props.destLabel} </Text>
        </TouchableOpacity>
    )
}

NavButton.propTypes = {
    destLabel: PropTypes.string.isRequired,
    buttonHandler: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#3C5773',
        alignSelf: 'stretch'
    },
    label: {
        color: '#F4F4E9',
        textAlign: 'center'
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
})

export default NavButton