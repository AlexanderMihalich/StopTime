import Profile from './Profile';
import { getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus } from '../../state/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
	withRouter,
	withAuthRedirect
)(Profile)