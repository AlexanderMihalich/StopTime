import React, { Component } from 'react'
import style from '../Description.module.scss'

class ProfileStatusForm extends Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value })
	}
	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}
	render() {
		return (
			<input onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" className={style.info__statusForm} value={this.state.status} />
		)
	}
}

export default ProfileStatusForm