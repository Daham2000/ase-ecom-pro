import './theme/css/Product.css';
import ProfileBarApp from "./components/ProfileBarApp";

function Product() {
    return (
        <div className="Product">
            <ProfileBarApp/>
            <div className="main">
                <text className="productName">PRODUCTS</text>
            </div>
        </div>
    );
}

export default Product;
