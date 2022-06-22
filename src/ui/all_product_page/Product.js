import '../../theme/css/Product.css';
import ProfileBarApp from "../../components/ProfileBarApp";
import ProductSearch from "../../components/productSearch";
import SearchProduct from "../../components/SearchProduct";
import {List} from "@material-ui/core";

function Product() {
    return (
        <div className="Product">
            <ProfileBarApp/>
            <div className="main">
                <text className="productName">PRODUCTS</text>
                <ProductSearch/>
                <div className="searchResult">
                    <text className="searchCountText">4 results found for ‘Books’</text>
                    <List style={{maxHeight: '100%', overflow: 'auto'}}>
                        <SearchProduct/>
                        <SearchProduct/>
                    </List>
                </div>
                {/*<div className="productsSection">*/}

                {/*    <div className="tableNameList">*/}
                {/*        <text className="tableName">SKU</text>*/}
                {/*        <text className="tableName">IMAGE</text>*/}
                {/*        <text className="tableName">PRODUCT NAME</text>*/}
                {/*        <text className="tableName">PRICE</text>*/}
                {/*        <div className="endTable"></div>*/}
                {/*    </div>*/}
                {/*    <List style={{maxHeight: '100%', overflow: 'auto'}}>*/}
                {/*        <SingleProduct data={data}/>*/}
                {/*        <SingleProduct data={data}/>*/}
                {/*        <SingleProduct data={data}/>*/}
                {/*    </List>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Product;
