import '../../theme/css/Product.css';
import '../../theme/css/AddProduct.css';
import ProfileBarApp from "../../components/ProfileBarApp";

function AddProduct() {
    return (
        <div className="Product">
            <ProfileBarApp/>
            <div className="mainSection">
                <div className="addProRow">
                    <text className="productName">PRODUCTS</text>
                    <img id="imageRightAddPro" src={require("../../assets/arrow_right.png")}/>
                    <text className="addProductText">Add new product</text>
                </div>
                <div id="formSectionAddProduct">
                    <div className="fieldInputRow">
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">SKU</text>
                            </div>
                            <input className="addProInput" type="text" disableUnderline={true}
                                   variant="standard"
                                   fullWidth/>
                        </div>
                    </div>
                    <div className="fieldInputRow">
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">Name</text>
                            </div>
                            <input className="addProInput" type="text" disableUnderline={true}
                                   variant="standard"
                                   fullWidth/>
                        </div>
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">QTY</text>
                            </div>
                            <input className="addProInput" type="text" disableUnderline={true}
                                   variant="standard"
                                   fullWidth/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;