import React, {Component} from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import AppContainer from './containers/AppContainer'
import AppContainerWithCardStack from './containers/AppContainerWithCardStack'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{/* Change the component below to flip between the NavigationTransitioner
				    and the NavigationCardStack examples: */ }
				<AppContainer />
			</Provider>
		)
	}
}
