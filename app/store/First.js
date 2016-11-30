import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from '../actions/navigate'
import { Storage } from '../lib/Storage';
import { AppRoute }  from '../configure/route'

import { userStates } from '../actions/user'

const mapStateToProps = (state) => {
    return {
        userStates: state.userStates,
    }
}

const mapDispatchToProps = (dispatch) => {
    backAction: () => {
        dispatch(navigatePop())
    }
    return {
        onButtonPress: () => {
            console.log(state)
            //console.log(Storage);
            //Storage.Util.save({
            //    key: 'user',  // Note: Do not use underscore("_") in key!
            //    id: '1001',   // Note: Do not use underscore("_") in id!
            //    rawData: 'eeeeee',
            //    expires: 1000 * 60
            //});
            //console.log(Storage.Util.load({
            //    key: 'user',
            //    id: '1001'
            //}));
            dispatch(navigatePush(AppRoute.Second[0].key))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstScreen)