import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import ApplicationTabs from '../components/ApplicationTabs/ApplicationTabs';

class AppContainer extends Component {

    render() {
        return (
            <ApplicationTabs {...this.props}/>
        );
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

//function mapStateToProps(state) {
//    console.log(state.navigationState)
//    return {
//        navigationState: state.navigationState
//    };
//}

export default connect((state)=> {return {}}, mapDispatchToProps)(AppContainer);