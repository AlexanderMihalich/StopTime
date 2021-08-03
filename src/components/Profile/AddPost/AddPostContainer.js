import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPost } from '../../../state/profile-reducer'
import AddPost from './AddPost'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts,
	}
}

export default compose(
	connect(mapStateToProps, {
		addPost,
	})
)(AddPost)