import '../theme/css/Product.css';

function SingleProduct(props) {
    return (
        <div className="singlePro">
            <div className="productLine">
                <text className="productId">#CA25</text>
                <div className="imageSection">
                    <img alt=""
                         src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                         className="productImage"/>
                </div>
                <text className="productId" id="proName">Product-name</text>
                <text className="productId" id="proPrice">$24.00</text>
                <div className="proEndTool">
                    <div>
                        <img className='toolPro' alt="" src={require("../assets/delete.png")}/>
                        <img className='toolPro' alt="" src={require("../assets/edit.png")}/>
                        <img className='toolPro' alt="" src={require("../assets/fav.png")}/>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: "1px solid #969191"}}></div>
        </div>
    );
}

export default SingleProduct;