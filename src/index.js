import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/css/index.css';
import reportWebVitals from './reportWebVitals';
import Product from "./ui/all_product_page/Product";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Product/>
    </React.StrictMode>
);
reportWebVitals();
