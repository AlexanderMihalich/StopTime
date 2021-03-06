import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth-reducer/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth, captcha } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {
	const responce = await authAPI.me()
	if (!responce.data.resultCode) {
		let { id, email, login } = responce.data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	const responce = await authAPI.login(email, password, rememberMe, captcha)
	if (!responce.data.resultCode) {
		dispatch(getAuthUserData())
	} else {
		if (responce.data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "incorrect email or password"
		dispatch(stopSubmit("login", { _error: message }))
	}
}

export const getCaptchaUrl = () => async (dispatch) => {
	const responce = await securityAPI.getCaptchaUrl()
	const captchaUrl = responce.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
	const responce = await authAPI.logout()
	if (!responce.data.resultCode) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}


export default authReducer