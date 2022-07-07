import apiClient from "../api/apiClient"

class ProductService {

	getAllProducts = (query,page,limit) => { 
		const q = "/?query="
		const paginationLimit = "&limit="
		const paginationPage = "&page="
		const result  = q.concat(query,paginationLimit,limit,paginationPage,page)
		return apiClient().get(result)
	 };
	addProduct = (data) => {
		const formData = new FormData();
		formData.append('sku', data["sku"]);
		formData.append('name', data["name"]);
		formData.append('qty', data["qty"]);
		formData.append('description', data["description"]);
		for (let i in data["images"]) {
			formData.append('images', data["images"][i]);
		}
		return apiClient().post("/", formData)
	};
}

export default new ProductService();