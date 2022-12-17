import { db } from "../../config/firebase";
import { FETCH_PRODUCTS, ERROR_FETCH_PRODUCTS } from "../constants/types";

export const productAction = (callBack) => async (dispatch) => {
  let fetchProducts = [];
  try {

    let res = await db.collection("products").get();
    res.forEach((doc) => {
      fetchProducts.push({ ...doc.data(), id: doc.id });
    });
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchProducts,
    });
    callBack && callBack()
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ERROR_FETCH_PRODUCTS,
      payload: error,
    });
    callBack && callBack(false)
  }
};
