import Toast from 'react-native-root-toast'

const toastConfig = {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
}

export const show = msg => {
    Toast.show(msg, toastConfig)
}
