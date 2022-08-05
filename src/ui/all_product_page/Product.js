import '../../theme/css/Product.css';
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
    }, [dispatch]);

    return (
        <div className="Product">
            <div className="main">
                <h3 className="productName">PRODUCTS</h3>
                <ProductSearch />
                {/* search product view */}
                {isSearching && <div className="searchResult">
                    <h3 className="searchCountText">{products !== null ? products.length : 0} results found</h3>
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
                        <h3 className="tableName">SKU</h3>
                        <h3 className="tableName">IMAGE</h3>
                        <h3 className="tableName">PRODUCT NAME</h3>
                        <h3 className="tableName">PRICE</h3>
                        <div className="endTable"/>
                    </div>}
                    {!isSearching && products && products.map((pro) => <SingleProduct props={pro} />)}
                </div>
            </div>
        </div>
    );
}

export default Product;
