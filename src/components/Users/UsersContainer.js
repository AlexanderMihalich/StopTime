import React from 'react'
import './Users.scss'
import Users from './Users';
import { compose } from 'redux';
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { followSuccess, setCurrentPage, unfollowSuccess, toogleFolowingProgress, requestUsers, follow, unfollow } from '../../state/users-reducer'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsers } from '../../selectors/users-selectors';

class UsersAPIContainer extends React.Component {
	componentDidMount() {
		let { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}
	onPageChanched = (pageNumber) => {
		let { pageSize } = this.props
		this.props.setCurrentPage(pageNumber, pageSize)
		this.props.getUsers(pageNumber, pageSize)
	}

	render() {
		return <div className='block block_m'>
			{this.props.isFetching ? <Preloader /> : null}
			< Users
				usersPage={this.props.usersPage}
				totalItemsCount={this.props.totalItemsCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanched={this.onPageChanched}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInPropgress={this.props.followingInPropgress}
				userBackground={this.props.userBackground}
			/>
		</div>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalItemsCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInPropgress: getFollowingInProgress(state),
		userBackground: state.usersPage.userBackground
	}
}
export default compose(
	connect(mapStateToProps,
		{
			followSuccess, unfollowSuccess, setCurrentPage, toogleFolowingProgress,
			getUsers: requestUsers, follow, unfollow
		}),
)(UsersAPIContainer)