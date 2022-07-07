import ProductService from "../../services/productService"

import actions from "../products/productAction"

/**
 * @param {string} query - The string
 */
export const loadProducts = (query) => (dispatch) => {
	dispatch(actions.productStartLoad());
	ProductService.getAllProducts(query, 1, 100)
		.then((response) => {
			dispatch(actions.productLoadSuccess(response.data))
		})
		.catch((error) => dispatch(actions.productLoadError(error.message)));
};

/**
 * @param {string} query - The string
 */
export const loadSearchProducts = (query) => (dispatch) => {
	dispatch(actions.productSearchStartLoad());
	ProductService.getAllProducts(query, 1, 20)
		.then((response) => {
			dispatch(actions.productSearchLoadSuccess(response.data))
		})
		.catch((error) => dispatch(actions.productSearchLoadError(error.message)));
};

//Add product middleware fuction
export const addProducts = (data) => (dispatch) => {
	dispatch(actions.appProduct());
	ProductService.addProduct(data)
		.then((response) => {
			dispatch(actions.addProductSuccess(response.data))
		})
		.catch((error) => dispatch(actions.addProductError(error.message)));
};