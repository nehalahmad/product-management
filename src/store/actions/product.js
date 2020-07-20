import * as actionTypes from "./actionTypes";

export const addProduct = (product) => ({
  type: actionTypes.ADD_PRODUCT,
  product,
});

export const addProductStart = () => ({
  type: actionTypes.ADD_PRODUCT_START,
});

export const addProductSuccess = (product) => ({
  type: actionTypes.ADD_PRODUCT_SUCCESS,
  product,
});

export const addProductFail = (product) => ({
  type: actionTypes.ADD_PRODUCT_FAIL,
  product,
});

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS,
});
