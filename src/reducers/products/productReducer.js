import actions from "../products/actionTypesProduct"
import productState from "./productState"

const productReducer = (state = productState, { type, payload }) => {
    switch (type) {
        case actions.ADD_PRODUCT:
            return {
                ...state,
                isAdded: false,
                isLoading: true
            }
        case actions.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isAdded: true,
                isLoading: false
            }
        case actions.ADD_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                isAdded: false,
                errorMessage: payload
            }
        case actions.PRODUCT_LOAD_START:
            return {
                ...state,
                isSearching: false,
                isLoading: true,
                isAdded: false,
                products: null,
                errorMessage: null
            }
        case actions.PRODUCT_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSearching: false,
                products: payload
            }
        case actions.PRODUCT_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            }

        // Product search actions
        case actions.PRODUCT_SEARCH_START:
            return {
                ...state,
                isLoading: true,
                isAdded: false,
                products: null,
                errorMessage: null
            }
        case actions.PRODUCT_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSearching: true,
                products: payload
            }
        case actions.PRODUCT_SEARCH_ERROR:
            return {
                ...state,
                isLoading: false,
                isSearching: false,
                errorMessage: payload
            }
        default:
            return state
    }
}

export default productReducer;