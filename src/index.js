import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/css/index.css';
import reportWebVitals from './reportWebVitals';
import Product from "./ui/all_product_page/Product";
import configStore from "./store/configStore"
import { Provider } from 'react-redux';

const store = configStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Product/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
