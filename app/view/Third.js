import { connect } from 'react-redux'

import ThirdScreen from '../components/ThirdScreen'
import { navigateReset } from '../actions/navigate'
import { AppRoute }  from '../actions/route'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigateReset(AppRoute.First, 0))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThirdScreen)