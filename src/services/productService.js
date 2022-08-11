import apiClient from "../api/apiClient"

// product end points
class ProductService {

    getAllProducts = (query, page, limit) => {
        const q = "/?query="
        const paginationLimit = "&limit="
        const paginationPage = "&page="
        const result = q.concat(query, paginationLimit, limit, paginationPage, page)
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

    editProduct = (data) => {
        const formData = new FormData();
        formData.append('sku', data["sku"]);
        formData.append('name', data["name"]);
        formData.append('qty', data["qty"]);
        formData.append('description', data["description"]);
        for (let i in data["images"]) {
            formData.append('images', data["images"][i]);
        }
        return apiClient().patch("/" + data["_id"], formData)
    };

    deleteProduct = (_id) => {
        return apiClient().delete("/" + _id)
    };
}

export default new ProductService();