import React from 'react'
import style from '../Messages.module.scss'
import { Field, reduxForm } from 'redux-form';
// import sendImage from '../../../../assets/img/send.svg'

class AddMessageForm extends React.Component {

	render() {
		return (
			<form onSubmit={this.props.handleSubmit} className={style.dialogs__add} >
				<Field type="text" name="newMessageText" placeholder="Enter your message" component="textarea" className={`${style.dialogs__textarea} textarea`} onChange={this.onChangeHandler} />
				{/* {sendImage} */}
				<button className={style.dialogs__btn} ></button>
			</form >
		)
	}
}
AddMessageForm = reduxForm({ form: 'dialogsMessage' })(AddMessageForm)

export default AddMessageForm