import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import Login from '../components/login';

class AppContainer extends Component {
    //constructor(props) {
    //    super(props);
    //}

    render() {
        return <Login { ...this.props} />
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}


export default connect((state)=> {return {}}, mapDispatchToProps)(AppContainer);