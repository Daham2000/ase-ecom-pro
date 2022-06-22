import '../../theme/css/Product.css';
import '../../theme/css/AddProduct.css';
import ProfileBarApp from "../../components/ProfileBarApp";
import {List} from "@material-ui/core";

function EditProduct() {
    return (
        <div className="Product">
            <ProfileBarApp/>
            <div className="mainSection">
                <div className="addProRow">
                    <text className="productName">PRODUCTS</text>
                    <img id="imageRightAddPro" src={require("../../assets/arrow_right.png")}/>
                    <text className="addProductText">Edit product</text>
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
                    <div className="descriptionSection">
                        <text className="inputFieldName">Product Description</text>
                        <text id="productDesTopic">A small description about the product</text>
                        <input id="addProDesInput" type="text" disableUnderline={true}
                               fullWidth/>
                    </div>
                    <div className="imagesSection">
                        <div id="imagesNameSec">
                            <text className="inputFieldName">Product Images</text>
                            <text id="productDesTopic">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</text>
                        </div>
                        <List style={{display: 'flex', flexDirection: 'row', padding: 0}}>
                            <img className="imageAddProduct"
                                 src={"https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg?w=2000"}/>
                        </List>
                        <text id="addImagesText">Edit Images</text>
                    </div>
                    <div className="addProBtn">
                        <button className="newProduct">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;