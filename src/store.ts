import Vue from 'vue';
import Vuex from 'vuex';
import Http from './core/Http';
import Storage from './core/Storage';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, USER_TOKEN, USER_REQUEST } from './settings/spec';

Vue.use(Vuex);


export default new Vuex.Store({
	state: {
		token: Storage.getItem('user-token') || '',
		status: '',
	},
	getters: {
		isAuthenticated: (state) => !!state.token,
		authStatus: (state) => state.status,
	},
	mutations: {
		[AUTH_REQUEST]: (state) => {
				state.status = 'loading';
		},
		[AUTH_SUCCESS]: (state, token) => {
				state.status = 'success';
				state.token = token;
		},
		[AUTH_ERROR]: (state) => {
				state.status = 'error';
		},
	},
	actions: {
		[AUTH_REQUEST]: ({commit, dispatch}, user) => {
			return new Promise((resolve, reject) => {
				commit(AUTH_REQUEST);
				Http.post('/auth', user).then((response) => {
					const token = response.data.token;
					Storage.setItem(USER_TOKEN, token);
					commit(AUTH_SUCCESS, token);
					dispatch(USER_REQUEST);
					resolve(response);
				})
				.catch((error) => {
					commit(AUTH_ERROR, error);
					Storage.removeItem(USER_TOKEN);
					reject(error);
				});
			});
		},
	},
});
