import '../theme/css/Product.css';
import { useSelector} from 'react-redux';


function SearchProduct(props) {
    const {products} = useSelector(state => state.products)

    return (
        <div className="productSearchSingle">
            <div className="productRowSingle">
                <div className="proDetailsSearch">
                    <text className="proIdSearch">{props.props.sku}</text>
                    <text className="proNameSearch">{props.props.name}</text>
                    <text className="proDesSearch">{props.props.description}
                    </text>
                </div>
                <img id="imageRight" src={require("../assets/arrow_right.png")}/>
            </div>
            <div style={{borderTop: "1px solid #969191"}}/>
        </div>
    );
}

export default SearchProduct;