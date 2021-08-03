import React, { Component } from 'react'
import Navbar from './Navbar';

class NavbarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { isActive: false };
	}
	clickActive = () => {
		this.setState({
			isActive: true
		})
	}
	render() {
		return <Navbar clickActive={this.clickActive} />
	}
}

export default NavbarContainer
