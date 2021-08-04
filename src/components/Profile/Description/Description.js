import React, { Component } from 'react'
import style from './Description.module.scss'
import Preloader from '../../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm';
import { ImageUnderstudy } from '../../../utils/ImageUnderstudy/ImageUnderstudy';
import cn from 'classnames';

class Description extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false }
	}
	onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			this.props.savePhoto(e.target.files[0])
		}
	}
	onSubmit = (formData) => {
		this.props.saveProfile(formData).then(
			this.setState({ editMode: false })
		)
	}
	render() {
		if (!this.props.profile) {
			return (<Preloader />)
		}
		return (
			<div className={style.description} >
				<div className={style.description__avatar}>
					{ImageUnderstudy(this.props.profile.photos.large)}
					{this.props.isOwner &&
						<div className={style.description__files}>
							<input type={"file"} accept=".jpg, .png" id="formImage" className={style.description__filesInput} onChange={this.onMainPhotoSelected} />
							<span className={cn(style.description__btn, style.description__btn_1)}>Choose File</span>
						</div>
					}
				</div>
				{this.state.editMode
					? < ProfileInfoForm onSubmit={this.onSubmit} profile={this.props.profile} initialValues={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
					: < ProfileInfo goToEditMode={() => this.setState({ editMode: true })} profile={this.props.profile} isOwner={this.props.isOwner} status={this.props.status} updateStatus={this.props.updateStatus} />
				}
			</div>
		)
	}
}

export default Description

