import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "3712f6c1-4887-4236-8b7c-a5498a4c0274"
	}
})

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {
			status: status
		})
	},
	savePhoto(photoFile) {
		const formData = new FormData()
		formData.append('image', photoFile)

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(data) {
		return instance.put(`profile`, data)
	},
}

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(responce => responce.data)
	},
	buttonUnfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(responce => responce.data)
	},
	buttonFollow(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(responce => responce.data)
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}
export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
	}
}