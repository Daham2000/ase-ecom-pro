
import axios from "axios";

const apiClient = () => {
	const { WEB_URL } = process.env;
	const axiosInstance = axios.create({
		baseURL: "https://ase-ecombe-pro.herokuapp.com/products",
		headers: { "Content-Type": "multipart/form-data" },
		responseType: "json",
	});

	return axiosInstance;
};

export default apiClient;