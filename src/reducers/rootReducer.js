
import { combineReducers } from "redux";
import productReducer from "../reducers/products/productReducer";

const rootReducer = () =>
	combineReducers({
		products: productReducer,
	});

export default rootReducer;