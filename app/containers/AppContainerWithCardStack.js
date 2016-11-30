'use strict'

import React, { PropTypes } from 'react'
import { NavigationExperimental, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import First from '../store/First'
import Second from '../store/Second'
import Third from '../store/Third'
import Modal from '../store/Modal'
import { navigatePop } from '../actions/navigate'

const {
    CardStack: NavigationCardStack,
    Card: NavigationCard,
    Header: NavigationHeader
} = NavigationExperimental


class AppContainerWithCardStack extends React.Component {
    render() {
        let { navigationState, backAction } = this.props

        return (

            // Redux is handling the reduction of our state for us. We grab the navigationState
            // we have in our Redux store and pass it directly to the <NavigationCardStack />.
            <NavigationCardStack
                navigationState={navigationState}
                onNavigateBack={backAction}
                style={styles.container}
                direction={navigationState.routes[navigationState.index].key === 'Modal' ?
                    'vertical' : 'horizontal'
                }
                renderHeader={props => (
                    <NavigationHeader
                        {...props}
                        onNavigateBack={backAction}
                        renderTitleComponent={props => {
                            const title = props.scene.route.title
                            return <NavigationHeader.Title>{title}</NavigationHeader.Title>
                        }}
                        // When dealing with modals you may also want to override renderLeftComponent...
                    />
                )}
                renderScene={this._renderScene}
            />
        )
    }

    _renderScene({ scene }) {
        const { route } = scene

        switch (route.key) {
            case 'First':
                return <First />
            case 'Second':
                return <Second />
            case 'Third':
                return <Third />
            case 'Modal':
                return <Modal />
        }
    }
}

AppContainerWithCardStack.propTypes = {
    navigationState: PropTypes.object,
    backAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default connect(
    state => ({
        navigationState: state.navigationState
    }),
    dispatch => ({
        backAction: () => {
            dispatch(navigatePop())
        }
    })
)(AppContainerWithCardStack)