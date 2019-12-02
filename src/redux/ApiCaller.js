import axios from "axios";
import { checkStatus, parseJSON } from "../utils/responseHandler";
// import { BASE_API_URL } from "../utils/constant";
// import Vue from "vue";
// import VueCookie from "vue-cookie";
// Vue.use(VueCookie);
// Make an api call
const API_URL = "//rd-backend-staging.herokuapp.com/api/"

export default async (url, method = 'post', body, token) => {
	let headers = {
		"Content-Type": "application/json",
		// "X-Auth-Id": VueCookie.get("X-Auth-Id") ? VueCookie.get("X-Auth-Id") : null,
		// "X-Auth-Token": VueCookie.get("X-Auth-Token") ? VueCookie.get("X-Auth-Token") : null
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
