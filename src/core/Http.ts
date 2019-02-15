import axios from 'axios';
import { AxiosInstance } from 'axios';

class Http {
	private service: AxiosInstance;

	constructor() {
		const service = axios.create({});
		service.interceptors.request.use((config) => {
			// config.headers.common['x-access-token'] = store.state.token;
			return config;
		});
		this.service = service;
	}

	public get(path: string) {
		return this.service.get(path);
	}

	public patch(path: string, payload: object, callback: (status: number, data: object) => void) {
		return this.service.request({
			method: 'PATCH',
			url: path,
			responseType: 'json',
			data: payload,
		}).then((response) => callback(response.status, response.data));
	}

	public post(path: string, payload: object) {
		return this.service.request({
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload,
		});
	}

}

export default new Http();
