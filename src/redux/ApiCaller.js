import axios from "axios";
import { checkStatus, parseJSON } from "../utils/responseHandler";
const API_URL = "//rd-backend-staging.herokuapp.com/api/"

export default async (url, method = 'post', body, token) => {
	let headers = {
		"Content-Type": "application/json",
		"req-token":token
	};
	return axios(`${API_URL}${url}`, {
		method,
		data: body ? body : null,
		headers
	})
		.then(checkStatus)
		.then(parseJSON)
		.catch(error => {
			throw error;
		});
};
