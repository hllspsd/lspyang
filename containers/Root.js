import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './App'
import Hello from './Hello'

export default class extends Component{
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={App}>
					<Route path='/hello' component={Hello} />
				</Route>
			</Router>
		)
	}
}