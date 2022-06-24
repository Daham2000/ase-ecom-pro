import actionType from "./actionTypesProduct"

const productStartLoad = () => ({
    type: actionType.PRODUCT_LOAD_START
});

const productLoadSuccess = (products)=> ({
    type: actionType.PRODUCT_LOAD_SUCCESS,
    payload: products
});

const productLoadError = (error)=> ({
    type: actionType.PRODUCT_LOAD_SUCCESS,
    payload: error
});

export default{
    productStartLoad,
    productLoadSuccess,
    productLoadError
}