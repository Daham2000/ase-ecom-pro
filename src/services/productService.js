import apiClient from "../api/apiClient"

class ProductService {
	getAllUsers = () => apiClient().get("/?query=&limit=20&page=1");
}

export default new ProductService();