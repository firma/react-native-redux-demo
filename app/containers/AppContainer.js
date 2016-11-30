import React, { Component, PropTypes } from 'react'
import { NavigationExperimental, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import  { SceneContainer } from '../lib/SceneContainer';
import Modal from '../store/Modal'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions/index'

const {
    Transitioner: NavigationTransitioner,
    Card: NavigationCard,
    Header: NavigationHeader
} = NavigationExperimental;

const {
    PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

class AppContainer extends Component {

    render() {
        ////console.log(this.state)
        let { navigationState, navigatePop } = this.props
        console.log(navigationState)

        let loginComponent = true;
        if (navigationState.routes.key !== '"First"') {
            loginComponent = false;
        }
        return (
            // Redux is handling the reduction of our state for us. We grab the navigationState
            // we have in our Redux store and pass it directly to the <NavigationTransitioner />.
            <NavigationTransitioner
                navigationState={navigationState}
                style={styles.container}
                render={props => (

                    // This mimics the same type of work done in a NavigationCardStack component
                    <View style={styles.container}>
                        <NavigationCard
                            // <NavigationTransitioner>渲染方法传递 `navigationState` as a
                            // prop to here, so we expand it plus other props out in <NavigationCard>.
                            {...props}
                            // Transition animations are determined by the StyleInterpolators. Here we manually
                            // override the default horizontal style interpolator that gets applied inside of
                            // NavigationCard for a vertical direction animation if we are showing a modal.
                            // (Passing undefined causes the default interpolator to be used in NavigationCard.)
                            style={props.scene.route.key === 'Modal' ?
                                NavigationCard.CardStackStyleInterpolator.forVertical(props) :
                                undefined
                            }
                            onNavigateBack={navigatePop}
                            // By default a user can swipe back to pop from the stack. Disable this for modals.
                            // Just like for style interpolators, returning undefined lets NavigationCard override it.
                            panHandlers={props.scene.route.key === 'Modal' ? null : undefined }
                            renderScene={this._renderScene}
                            key={props.scene.route.key}
                        />
                        {loginComponent ? <NavigationHeader
                            {...props}
                            onNavigateBack={navigatePop}
                            renderTitleComponent={props => {
                                const title = props.scene.route.title
                                return <NavigationHeader.Title>{title}</NavigationHeader.Title>

                            }}
                            // When dealing with modals you may also want to override renderLeftComponent...
                        /> : null}

                    </View>
                )}
            />
        )
    }

    _renderScene({ scene }) {
        return SceneContainer.renderScene(scene);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

//function mapStateToProps(state) {
//    return {
//        navigationState: state.navigationState
//    };
//}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigationState
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

//export default connect(
//    mapStateToProps,
//    dispatch => ({
//        backAction: () => {
//            dispatch(navigatePop())
//        }
//    })
//)(AppContainer)