import '../theme/css/Product.css';
import {useDispatch, useSelector} from 'react-redux';
import Strings from "../utill/Strings";
import { Link } from "react-router-dom";
import {setSingleProduct} from "../reducers/products/productThunks";

function SearchProduct(props) {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();

    const saveProduct = () => dispatch(setSingleProduct(props.props));

    return (
        <div className="productSearchSingle">
            <div className="productRowSingle">
                <div className="proDetailsSearch">
                    <h3 className="proIdSearch">{props.props.sku}</h3>
                    <h3 className="proNameSearch">{props.props.name}</h3>
                    <h3 className="proDesSearch">{props.props.description}
                    </h3>
                </div>
                <Link to={Strings.EDIT_PRODUCT} onClick={saveProduct}>
                    <img id="imageRight" src={require("../assets/arrow_right.png")} />
                </Link>
            </div>
            <div style={{ borderTop: "1px solid #969191" }} />
        </div>
    );
}

export default SearchProduct;