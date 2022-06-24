import '../theme/css/Product.css';
import Strings from '../utill/Strings';
import { Link } from "react-router-dom";

// Single product component
function SingleProduct(props) {
    return (
        <div className="singlePro">
            <div className="productLine">
                <text className="productId">{props.props.sku}</text>
                <div className="imageSection">
                    <img alt=""
                        src={props.props.images[0]}
                        className="productImage" />
                </div>
                <text className="productId" id="proName">{props.props.name}</text>
                <text className="productId" id="proPrice">$24.00</text>
                <div className="proEndTool">
                    <div>
                        <img className='toolPro' alt="" src={require("../assets/delete.png")} />
                        <Link to={Strings.EDIT_PRODUCT}>
                            <img className='toolPro' alt="" src={require("../assets/edit.png")} />
                        </Link>
                        <img className='toolPro' alt="" src={require("../assets/fav.png")} />
                    </div>
                </div>
            </div>
            <div style={{ borderTop: "1px solid #969191" }}></div>
        </div>
    );
}

export default SingleProduct;