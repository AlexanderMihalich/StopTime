import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendMessage } from '../../state/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
		newMessage: state.messagesPage.newMessage,
	}
}

export default compose(
	connect(mapStateToProps, {
		sendMessage,
	}),
	withAuthRedirect
)(Dialogs)