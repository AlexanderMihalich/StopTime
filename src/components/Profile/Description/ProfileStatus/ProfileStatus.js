import React, { Component } from 'react'
import style from '../Description.module.scss'

class ProfileStatus extends Component {

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
			(!this.state.editMode)
				? <span onDoubleClick={this.activateEditMode} className={style.info__status}>......{this.props.status || "No status"}</span>
				: <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" className={style.info__statusInput} value={this.state.status} />
		)
	}
}

export default ProfileStatus