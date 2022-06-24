import actions from "../products/actionTypesProduct"
import productState from "./productState"

const productReducer = (state=productState,{type,payload}) => {
    switch(type){
        case actions.PRODUCT_LOAD_START:
            return {
                ...state,
                isLoading: true,
                products: null,
                errorMessage: null
            }
        case actions.PRODUCT_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        case actions.PRODUCT_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            }
        default:
            return state
    }
}

export default productReducer;