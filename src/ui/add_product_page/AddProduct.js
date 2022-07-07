import '../../theme/css/Product.css';
import '../../theme/css/AddProduct.css';
import ProfileBarApp from "../../components/ProfileBarApp";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from "../../reducers/products/productThunks"
import { FilePicker } from "react-file-picker";
import Loader from "react-js-loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
    const dispatch = useDispatch();

    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [description, setDescription] = useState('');
    const [imageList, setImageList] = useState([]);
    const [imageListPreview, setImageListPreview] = useState([]);

    const saveAction = () => dispatch(addProducts({ "sku": sku, "name": name, "qty": qty, "description": description, "images": imageList }));

    useEffect(() => {
        return () => imageList
    }, [imageList])
    const notify = () => toast("Product added...");

    const [selectedFile, setSelectedFile] = useState()

    const onSelectFile = e => {
        const objectUrl = URL.createObjectURL(e)
        imageList.push(e)
        imageListPreview.push(objectUrl)
        setSelectedFile(objectUrl)
        setImageList(imageList)
    }

    const { isLoading, errorMessage, isAdded } = useSelector(state => state.products)

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
                                onInput={e => setName(e.target.value)}
                                fullWidth />
                        </div>
                        <div className="inputDec">
                            <div className="baseAddProName">
                                <text className="inputFieldName">QTY</text>
                            </div>
                            <input className="addProInput" type="number" disableUnderline={true}
                                variant="standard"
                                onInput={e => setQty(e.target.value)}
                                fullWidth />
                        </div>
                    </div>
                    <div className="descriptionSection">
                        <text className="inputFieldName">Product Description</text>
                        <text id="productDesTopic">A small description about the product</text>
                        <input id="addProDesInput" type="text" disableUnderline={true}
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
                            <text id="addImagesText">Add Images</text>
                        </FilePicker>
                    </div>
                    {isLoading &&
                        <Loader type="spinner-default" bgColor={"#0000FF"} title={"spinner-default"} color={'#FFF'} size={50} />
                    }
                    {!isLoading &&
                        <div className="addProBtn" onClick={saveAction}>
                            <button className="newProduct">Add Product</button>
                        </div>}
                    <ToastContainer position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false} />
                </div>
            </div>
        </div>
    );
}

export default AddProduct;