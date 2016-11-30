import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from '../actions/navigate'
import { fetchUsers } from '../actions/user'


const mapStateToProps = (state) => {
    return {
        navigationState: state.navigationState,
        navigationState: state.navigationState
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigatePush('Second'))
        },
        onLoad: (e) => {
            dispatch(fetchUsers(11))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstScreen)