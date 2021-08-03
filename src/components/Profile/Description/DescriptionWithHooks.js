import React, { useEffect, useState } from 'react'
import style from './Description.module.css'
import Preloader from '../../common/Preloader/Preloader';

const DescriptionWithHooks = (props) => {
	// if (!props.profile) {
	// 	return (<Preloader />)
	// }


	return (
		<div className={style.description} >
			<div className={style.description__avatar}>
				{/* {<img alt="" src={props.profile.photos.large} />} */}
			</div>
			<div className={style.description__info}>
				{/* <h2 className={`${style.description__name} title`} >{props.profile.fullName}</h2> */}
				<ul>
					<li>
						{
							(!editMode)
								//*  ? <span className={style.description__status}>{props.profile.aboutMe}</span> */
								? <span onDoubleClick={activateEditMode} className={style.description__status}>{props.status || "No status"}</span>
								: <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.description__input} value={status} />
						}
					</li>
					{/* <li className={style.description__item}>{props.profile.lookingForAJobDescription}</li> */}
					{/* <li className={style.description__item}><a href={props.profile.contacts.instagram}>My Instagram</a></li> */}
				</ul>
			</div>
		</div>

	)
}
export default DescriptionWithHooks

