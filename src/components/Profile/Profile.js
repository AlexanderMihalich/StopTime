import React from 'react';
import Description from './Description/Description';
import AddPostContainer from './AddPost/AddPostContainer';

class Profile extends React.Component {
	isOwner = !this.props.match.params.userId
	refreshProfile() {
		let { authorizedUserId, getUserProfile, getUserStatus } = this.props
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = authorizedUserId;
		}
		getUserProfile(userId)
		getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}
	render() {

		return (
			<div className="block">
				<Description profile={this.props.profile} isOwner={this.isOwner} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} status={this.props.status} updateStatus={this.props.updateUserStatus} />
				<AddPostContainer profile={this.props.profile} />
			</div>
		)
	}
}
export default Profile