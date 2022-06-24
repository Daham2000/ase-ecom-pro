import axios from "axios";

const url = "https://ase-ecombe-pro.herokuapp.com/products";

export const getAllProducts = (query) => axios.get(`${url}//?query=`,query);
export const addProduct = (product) => axios.post(`${url}/`, product);
export const editProduct = (id) => axios.patch(`${url}/${id}/`);
export const deleteProduct = (id) => axios.delete(`${url}/${id}/`);
