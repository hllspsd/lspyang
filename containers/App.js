import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component{
	render() {
		return (
			<div>
				<p><Link to="/hello" className="text-primary">hello world!</Link></p>
				{this.props.children}
			</div>
		)
	}
}