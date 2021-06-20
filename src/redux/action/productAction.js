import { FETCH_PRODUCTS, ERROR_FETCH_PRODUCTS } from "../constants/types";
import { db } from "../../config/firebase";
// import {useState} from 'react'

export const productAction = (data) => async (dispatch, prevState) => {
  // const [pros, setPros] = useState([]);
  let fetchProducts = [];
  try {
    let res = await db.collection("products").get();
    res.forEach((doc) => {
      fetchProducts.push({ ...doc.data(), id: doc.id });
    });
    console.log("data in products action", fetchProducts);
    // setPros(fetchProducts)
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchProducts,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ERROR_FETCH_PRODUCTS,
      payload: error,
    });
  }
};
