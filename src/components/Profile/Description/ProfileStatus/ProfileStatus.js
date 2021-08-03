import React, { useEffect, useState } from 'react'
import style from '../Description.module.scss'

const ProfileStatus = ({ status, updateUserStatus }) => {

	let [editMode, setEditMode] = useState(false);
	let [statusHook, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		updateUserStatus(statusHook)
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		(!editMode)
			//*  ? <span className={style.info__status}>{props.profile.aboutMe}</span> */
			? <span onDoubleClick={activateEditMode} className={style.info__status}>......{status || "No status"}</span>
			: <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.info__inputStatus} value={statusHook} />
	)
}

export default ProfileStatus