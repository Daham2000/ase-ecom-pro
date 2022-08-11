import '../../theme/css/Product.css';
import '../../theme/css/AddProduct.css';
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addProducts} from "../../reducers/products/productThunks"
import {FilePicker} from "react-file-picker";
import Loader from "react-js-loader";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Strings from "../../utill/Strings";
import {Link} from "react-router-dom";

function AddProduct() {
    const dispatch = useDispatch();

    const [imageList, setImageList] = useState([]);
    const [imageListPreview, setImageListPreview] = useState([]);

    const initialValues = {sku: "", email: "", qty: 0, description: ""};
    const [productFormValues, setProductFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setProductFormValues({...productFormValues, [name]: value});
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(productFormValues);
        }
    }, [errors]);

    const validate = (values) => {
        const errors = {};
        if (!values.sku) {
            errors.sku = "Sku is required!";
        }
        if (!values.name) {
            errors.email = "Name is required!";
        }
        if (!values.qty) {
            errors.qty = "Qty is required!";
        }
        if (!values.description) {
            errors.description = "Description is required!";
        }
        return errors;
    };

    const saveAction = (e) => {
        e.preventDefault();
        setErrors(validate(productFormValues));
        console.log(errors.length)
        if(errors.length===undefined){
            dispatch(addProducts({
                "sku": productFormValues.sku,
                "name": productFormValues.name,
                "qty": productFormValues.qty,
                "description": productFormValues.description,
                "images": imageList
            }));
        }
        setIsSubmit(true);
    };

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
        setImageListPreview(imageListPreview);
    }

    const {isLoading, errorMessage, isAdded} = useSelector(state => state.products)

    useEffect(() => {
        if (isAdded) {
            notify()
        }
        return () => errorMessage
    }, [errorMessage, isAdded]);

    return (
        <div className="Product">
            <div className="mainSection">
                <div className="addProRow">
                    <Link to={Strings.GET_PRODUCT} style={{textDecoration: 'none'}}>
                        <text className="productName">PRODUCTS</text>
                    </Link>
                    <img id="imageRightAddPro" src={require("../../assets/arrow_right.png")} alt=""/>
                    <text className="addProductText">Add new product</text>
                </div>
                <form onSubmit={saveAction}>
                    <div id="formSectionAddProduct">
                        <div className="fieldInputRow">
                            <div className="inputDec">
                                <div className="baseAddProName">
                                    <text className="inputFieldName">SKU</text>
                                </div>
                                <input className="addProInput" type="text"
                                       variant="standard"
                                       name="sku"
                                       onChange={e =>handleChangeInput(e)}
                                       required/>
                            </div>
                        </div>
                        <div className="fieldInputRow">
                            <div className="inputDec">
                                <div className="baseAddProName">
                                    <text className="inputFieldName">Name</text>
                                </div>
                                <input className="addProInput" type="text"
                                       variant="standard"
                                       name="name"
                                       onChange={e =>handleChangeInput(e)}
                                       required/>
                            </div>
                            <div className="inputDec">
                                <div className="baseAddProName">
                                    <text className="inputFieldName">QTY</text>
                                </div>
                                <input className="addProInput" type="text"
                                       variant="standard"
                                       name="qty"
                                       onChange={e =>handleChangeInput(e)}
                                       required/>
                            </div>
                        </div>
                        <div className="descriptionSection">
                            <text className="inputFieldName">Product Description</text>
                            <text id="productDesTopic">A small description about the product</text>
                            <input className="addProInput" type="text"
                                   variant="standard"
                                   name="description"
                                   id="addProDesInput"
                                   onChange={e =>handleChangeInput(e)}
                                   required/>
                        </div>
                        <div className="imagesSection">
                            <div id="imagesNameSec">
                                <text className="inputFieldName">Product Images</text>
                                <text id="productDesTopic">JPEG, PNG, SVG or GIF (Maximum file size 2MB)</text>
                            </div>
                            {imageListPreview && imageListPreview.map((img) => <img className="imageAddProduct"
                                                                                    src={img}
                                                                                    alt=""/>)}
                            <FilePicker
                                extensions={['jpg', 'jpeg', 'png']}
                                dims={{minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500}}
                                onChange={onSelectFile}
                                onError={errMsg => console.log(errMsg)}
                            >
                                <text id="addImagesText">Add Images</text>
                            </FilePicker>
                        </div>
                        {isLoading &&
                        <Loader type="spinner-default" bgColor={"#0000FF"} title={"spinner-default"} color={'#FFF'}
                                size={50}/>
                        }
                        {!isLoading &&
                        <div className="addProBtn">
                            <button className="newProduct">Add Product</button>
                        </div>}
                        <ToastContainer position="bottom-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;