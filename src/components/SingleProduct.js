import '../theme/css/Product.css';
import Strings from '../utill/Strings';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import React  from "react";
import { setSingleProduct } from "../reducers/products/productThunks"

// Single product component
function SingleProduct(props) {

    const dispatch = useDispatch();

    const saveProduct = () => dispatch(setSingleProduct(props.props));

    return (
        <div className="singlePro">
            <div className="productLine">
                <h3 className="productId">{props.props.sku}</h3>
                <div className="imageSection">
                    <img alt=""
                        src={props.props.images[0]}
                        className="productImage" />
                </div>
                <h3 className="productId" id="proName">{props.props.name}</h3>
                <h3 className="productId" id="proPrice">$24.00</h3>
                <div className="proEndTool">
                    <div>
                        <img className='toolPro' alt="" src={require("../assets/delete.png")} />
                        <Link to={Strings.EDIT_PRODUCT} onClick={saveProduct}>
                            <img className='toolPro' alt="" src={require("../assets/edit.png")} />
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: "1px solid #969191" }}/>
        </div>
    );
}

export default SingleProduct;