import axios from "axios";
import { checkStatus, parseJSON } from "../utils/responseHandler";
import { API_URL } from '../utils/constant'

export default async (url, method = 'post', body, token) => {
	console.log('===body=',body)
	let headers = {
		"Content-Type": "application/json",
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
