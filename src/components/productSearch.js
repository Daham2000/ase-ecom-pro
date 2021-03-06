import { useState } from "react";
import '../theme/css/Product.css';
import { useSelector } from 'react-redux';
import Strings from "../utill/Strings";
import { Link } from "react-router-dom";

//Product search bar component
function ProductSearch() {
    const [searchQuery, setQuery] = useState(''); // '' is the initial state value
    // const { isLoading, products, errorMessage } = useSelector(state => state.products)
    const searchAction = () => console.log(searchQuery);

    return (
        <div className="productSearch">
            <div className="productSearchBar">
                <input value={searchQuery} className="textFieldSearch" type="text" disableUnderline={true}
                    variant="standard"
                    onInput={e => setQuery(e.target.value)}
                    placeholder="Search for products"
                    fullWidth />
                <div className="button" onClick={searchAction} aria-hidden="true">
                    <img alt="" src={require('../assets/search.png')} className="iconSearch" />
                    <text className="searchText">Search</text>
                </div>
            </div>
            <div className="productRowRight">
                <Link to={Strings.ADD_PRODUCT}>
                    <button className="newProduct">New Product</button>
                </Link>

                <div className="favouriteBtn" style={{ border: '1px solid #001EB9' }}>
                    <img alt="" src={require('../assets/fav.png')} className="iconSearch" />
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;