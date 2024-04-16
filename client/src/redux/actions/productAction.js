import axios from "axios";
import * as actionType from "../constants/productConstant.js";

const URL = "https://flipkart-clone-2wor.onrender.com";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
