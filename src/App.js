import React from 'react';
import './assets/css/fonts.css';
import './assets/css/null.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Background from './components/Background/Background';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './state/app-reducer';
import PreloaderApp from './components/common/PreloaderApp/PreloaderApp';
import { withSuspense } from './hoc/withSuspense';
import Navbar from './components/Navbar/Navbar';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const Error404 = React.lazy(() => import('./components/Error404/Error404'))

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <PreloaderApp />
		}
		return (
			<BrowserRouter>
				<div className="wrapper">
					<HeaderContainer />
					<main className='page'>
						<Background />
						<div className='page__content _container'>
							<Switch>
								<Route exact path='/'
									render={() => <Redirect to='/profile' />} />
								<Route path='/profile/:userId?'
									render={withSuspense(ProfileContainer)} />
								<Route path='/dialogs'
									render={withSuspense(DialogsContainer)} />
								<Route path='/users'
									render={withSuspense(UsersContainer)} />
								<Route path='/login'
									render={withSuspense(Login)} />
								<Route path='*'
									render={withSuspense(Error404)} />
							</Switch>
							<Navbar />
						</div>
					</main>
				</div>
			</BrowserRouter >
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	connect(mapStateToProps, { initializeApp }))(App)
