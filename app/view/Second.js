import { connect } from 'react-redux'

import SecondScreen from '../components/SecondScreen'
import { navigatePush } from '../actions/navigate'


const mapStateToProps = (state) => {
    return {}
}
import { AppRoute }  from '../actions/route'

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigatePush(AppRoute.Third[0].key))
        },
        onModalButtonPress: () => {
            dispatch(navigatePush(AppRoute.Modal[0].key))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondScreen)