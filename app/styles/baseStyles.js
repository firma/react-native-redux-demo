import {StyleSheet, Dimensions} from 'react-native';
let winSize = Dimensions.get('window');
const baseStyles = StyleSheet.create({
        text: {
            fontSize: 40 / winSize.scale
        }
    })
    ;
export default baseStyles;