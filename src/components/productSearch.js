import {useState} from "react";
import '../theme/css/Product.css';

const searchAction = () => console.log('hi');

function ProductSearch() {
    const [searchQuery, setQuery] = useState(''); // '' is the initial state value

    return (
        <div className="productSearch">
            <div className="productSearchBar">
                <input value={searchQuery} className="textFieldSearch" type="text" disableUnderline={true}
                       variant="standard"
                       onInput={e => setQuery(e.target.value)}
                       placeholder="Search for products"
                       fullWidth/>
                <div className="button" onClick={searchAction} aria-hidden="true">
                    <img alt="" src={require('../assets/search.png')} className="iconSearch"/>
                    <text className="searchText">Search</text>
                </div>
            </div>
            <div className="productRowRight">
                <button className="newProduct">New Product</button>
                <div className="favouriteBtn" style={{border: '1px solid #001EB9'}}>
                    <img alt="" src={require('../assets/fav.png')} className="iconSearch"/>
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;