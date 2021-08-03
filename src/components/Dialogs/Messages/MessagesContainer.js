import { connect } from 'react-redux';
import { compose } from 'redux';
import Messages from './Messages';

let mapStateToProps = (state) => {
	return {
		newMessageText: state.messagesPage.newMessageText,
	}
}
export default compose(
	connect(mapStateToProps, {
	})
)(Messages)
