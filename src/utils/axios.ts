import axios from "axios";
import { useAuthStore } from "../store/store";

const axiosinst = axios.create({
	baseURL: "http://localhost:2000",
});
axiosinst.interceptors.request.use(
	(config) => {
		const token = storetoken();
		config.headers = { Authorization: `Bearer ${token}` };
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
function storetoken() {
	return useAuthStore.getState().token as string;
}
export default axiosinst;
