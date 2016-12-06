import { connect } from 'react-redux'

import FirstScreen from '../components/Init'
import { navigatePush } from '../actions/navigate'
import { fetchUsers } from '../actions/user'


const mapStateToProps = (state) => {

    return {
        navigationState: state.navigationState,
        authLogins: state.authLogins
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonPress: () => {
            dispatch(navigatePush('Second'))
        },
        onLogin: () => {
            this.getState;

            dispatch(fetchUsers(11))
        },
        userLogin: (username,password)=> {
            console.log(username+password);
            dispatch(navigatePush('Second'))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstScreen)