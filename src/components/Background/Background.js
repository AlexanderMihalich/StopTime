import React from 'react'
import style from './Background.module.scss'
import backgroundImage from '../../assets/img/background.jpg'


const Background = () => {
	return (
		<div className={style.background}>
			<img alt="" className={style.background__img} src={backgroundImage} />
		</div>
	)
}

export default Background
