import './theme/css/Product.css';
import ProfileBarApp from "./components/ProfileBarApp";
import {useState} from "react";

const searchAction = () => console.log('hi');

function Product() {
    const [searchQuery, setQuery] = useState(''); // '' is the initial state value

    return (
        <div className="Product">
            <ProfileBarApp/>
            <div className="main">
                <text className="productName">PRODUCTS</text>
                <div className="productSearch">
                    <div className="productSearchBar">
                        <input value={searchQuery} className="textFieldSearch" type="text" disableUnderline={true}
                               variant="standard"
                               onInput={e => setQuery(e.target.value)}
                               placeholder="Search for products"
                               fullWidth/>
                        <div className="button" onClick={searchAction} aria-hidden="true">
                            <img alt="" src={require('../src/assets/search.png')} className="iconSearch"/>
                            <text className="searchText">Search</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
