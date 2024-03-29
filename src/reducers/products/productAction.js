import actionType from "./actionTypesProduct"

//add product actions are here
const appProduct = (p) => ({
    type: actionType.ADD_PRODUCT,
    payload: p
});

const addProductSuccess = () => ({
    type: actionType.ADD_PRODUCT_SUCCESS
});

const addProductError = () => ({
    type: actionType.ADD_PRODUCT_ERROR
});

//load product actions are here
const productStartLoad = () => ({
    type: actionType.PRODUCT_LOAD_START
});

const productLoadSuccess = (products) => ({
    type: actionType.PRODUCT_LOAD_SUCCESS,
    payload: products
});

const productLoadError = (error) => ({
    type: actionType.PRODUCT_LOAD_SUCCESS,
    payload: error
});

//search products actions are here
const productSearchStartLoad = () => ({
    type: actionType.PRODUCT_SEARCH_START
});

const productSearchLoadSuccess = (products) => ({
    type: actionType.PRODUCT_SEARCH_SUCCESS,
    payload: products
});

const productSearchLoadError = (error) => ({
    type: actionType.PRODUCT_SEARCH_ERROR,
    payload: error
});

//edit product actions
const productEditStart = (product) => ({
    type: actionType.PRODUCT_EDIT_START,
    payload: product
});

const productEditStartNext = () => ({
    type: actionType.PRODUCT_EDIT_START_NEXT
});

const productEditSuccess = (products) => ({
    type: actionType.PRODUCT_EDIT_SUCCESS,
    payload: products
});

const productEditError = (error) => ({
    type: actionType.PRODUCT_EDIT_ERROR,
    payload: error
});

//delete product actions
const productDeleteStart = (product) => ({
    type: actionType.PRODUCT_EDIT_START,
    payload: product
});

const productDeleteStartNext = () => ({
    type: actionType.PRODUCT_DELETE_START_NEXT
});

const productDeleteSuccess = (products) => ({
    type: actionType.PRODUCT_DELETE_SUCCESS,
    payload: products
});

const productDeleteError = (error) => ({
    type: actionType.PRODUCT_DELETE_ERROR,
    payload: error
});

export default {
    appProduct,
    addProductSuccess,
    addProductError,
    productStartLoad,
    productLoadSuccess,
    productLoadError,
    productSearchStartLoad,
    productSearchLoadSuccess,
    productSearchLoadError,
    productEditError,
    productEditSuccess,
    productEditStartNext,
    productEditStart,
    productDeleteError,
    productDeleteSuccess,
    productDeleteStartNext,
    productDeleteStart
}