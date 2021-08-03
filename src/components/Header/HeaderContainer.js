import { connect } from 'react-redux';
import Header from './Header';
import { compose } from 'redux';
import { logout } from '../../state/auth-reducer';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}
export default compose(connect(mapStateToProps, { logout }))(Header)