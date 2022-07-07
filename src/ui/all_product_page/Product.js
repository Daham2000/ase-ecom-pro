import '../../theme/css/Product.css';
import ProfileBarApp from "../../components/ProfileBarApp";
import ProductSearch from "../../components/productSearch";
import SearchProduct from "../../components/SearchProduct";
import SingleProduct from "../../components/SingleProduct";
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from "../../reducers/products/productThunks"
import React, { useEffect } from "react";
import Loader from "react-js-loader";

function Product() {
    const dispatch = useDispatch();

    const { isLoading, products, errorMessage, isSearching } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(loadProducts(""));
    }, []);

    return (
        <div className="Product">
            <ProfileBarApp />
            <div className="main">
                <text className="productName">PRODUCTS</text>
                <ProductSearch />
                {/* search product view */}
                {isSearching && <div className="searchResult">
                    <text className="searchCountText">{products!==null ? products.length : 0} results found for ‘Books’</text>
                    {products && products.map((pro) => <SearchProduct props={pro} />)}
                </div>
                }

                {/* Get all Product view */}
                <div className="productsSection">

                    {isLoading &&
                        <Loader type="spinner-default" bgColor={"#0000FF"} title={"spinner-default"} color={'#FFF'} size={100} />
                    }
                    {errorMessage && <h3>{errorMessage}</h3>}
                    {!isSearching && <div className="tableNameList">
                        <text className="tableName">SKU</text>
                        <text className="tableName">IMAGE</text>
                        <text className="tableName">PRODUCT NAME</text>
                        <text className="tableName">PRICE</text>
                        <div className="endTable"></div>
                    </div>}
                    {!isSearching && products && products.map((pro) => <SingleProduct props={pro} />)}
                </div>
            </div>
        </div>
    );
}

export default Product;
