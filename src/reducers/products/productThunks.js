import ProductService from "../../services/productService"

import actions from "../products/productAction"

export const loadProducts = () => (dispatch) => {
	dispatch(actions.productStartLoad());
	ProductService.getAllUsers()
		.then((response) => {
			dispatch(actions.productLoadSuccess(response.data))
			console.log("SSS: " + response.data[0].images)
		})
		.catch((error) => dispatch(actions.productLoadError(error.message)));
};