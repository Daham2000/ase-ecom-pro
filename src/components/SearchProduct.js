import '../theme/css/Product.css';


function SearchProduct() {
    return (
        <div className="productSearchSingle">
            <div className="productRowSingle">
                <div className="proDetailsSearch">
                    <text className="proIdSearch">#CA25</text>
                    <text className="proNameSearch">Product-name</text>
                    <text className="proDesSearch">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.</text>
                </div>
                <img id="imageRight" src={require("../assets/arrow_right.png")}/>
            </div>
            <div style={{borderTop: "1px solid #969191"}}></div>
        </div>
    );
}

export default SearchProduct;