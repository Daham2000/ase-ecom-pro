import '../../theme/css/Product.css';
import '../../theme/css/AddProduct.css';
import ProfileBarApp from "../../components/ProfileBarApp";
import { List } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { editProducts } from "../../reducers/products/productThunks";
import React from "react";
import Loader from "react-js-loader";
import { FilePicker } from "react-file-picker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

function EditProduct() {

    const notify = () => toast("Product updated...");

    const dispatch = useDispatch();
    const { product, isLoading, isAdded, errorMessage } = useSelector(state => state.products)

    const [sku, setSku] = useState(product._id);
    const [name, setName] = useState(product.name);
    const [qty, setQty] = useState(product.qty);
    const [description, setDescription] = useState(product.description);
    const [imageList, setImageList] = useState([]);
    const [imageListPreview, setImageListPreview] = useState([]);

    const [selectedFile, setSelectedFile] = useState()

    const onSelectFile = e => {
        const objectUrl = URL.createObjectURL(e)
        imageList.push(e)
        imageListPreview.push(objectUrl)
        setSelectedFile(objectUrl)
        setImageList(imageList)
    }

    const editProduct = () => dispatch(editProducts({ "_id": product._id, "sku": sku, "name": name, "qty": qty, "description": description, "images": imageList }));

    useEffect(() => {
        if (isAdded) {
            notify()
        }
        return () => errorMessage
    }, [isAdded]);

    return (
        <div className="Product">
            <ProfileBarApp />
            <div className="mainSection">
                <div className="addProRow">
                    <text className="productName">PRODUCTS</text>
                    <img id="imageRightAddPro" src={require("../../assets/arrow_right.png")} />
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
                                defaultValue={product.sku}
                                onInput={e => setSku(e.target.value)}
                                fullWidth />
                        </div>
                    </div>
                    <div className="fieldInputRow">
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">Name</text>
                            </div>
                            <input className="addProInput" type="text" disableUnderline={true}
                                variant="standard"
                                defaultValue={product.name}
                                onInput={e => setName(e.target.value)}
                                fullWidth />
                        </div>
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">QTY</text>
                            </div>
                            <input className="addProInput" disableUnderline={true}
                                variant="standard"
                                type="number"
                                defaultValue={product.qty}
                                onInput={e => setQty(e.target.value)}
                                fullWidth />
                        </div>
                    </div>
                    <div className="descriptionSection">
                        <text className="inputFieldName">Product Description</text>
                        <text id="productDesTopic">A small description about the product</text>
                        <input id="addProDesInput" defaultValue={product.description} type="text" disableUnderline={true}
                            onInput={e => setDescription(e.target.value)}
                            fullWidth />
                    </div>
                    <div className="imagesSection">
                        <div id="imagesNameSec">
                            <text className="inputFieldName">Product Images</text>
                            <text id="productDesTopic">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</text>
                        </div>
                        {imageListPreview && imageListPreview.map((img) => <img className="imageAddProduct" src={img} />)}
                        <FilePicker
                            extensions={['jpg', 'jpeg', 'png']}
                            dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
                            onChange={onSelectFile}
                            onError={errMsg => console.log(errMsg)}
                        >
                            <text id="addImagesText">Edit Images</text>
                        </FilePicker>
                    </div>
                    {isLoading &&
                        <Loader type="spinner-default" bgColor={"#0000FF"} title={"spinner-default"} color={'#FFF'} size={50} />
                    }
                    {!isLoading &&
                        <div className="addProBtn">
                            <button onClick={editProduct} className="newProduct">Save changes</button>
                        </div>}

                </div>
            </div>
        </div>
    );
}

export default EditProduct;