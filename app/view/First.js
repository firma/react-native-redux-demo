import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from '../actions/navigate'

import { AppRoute }  from '../actions/route'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigatePush(AppRoute.Second[0].key))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstScreen)