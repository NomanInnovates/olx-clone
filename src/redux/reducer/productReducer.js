import { FETCH_PRODUCTS, ERROR_FETCH_PRODUCTS } from "../constants/types";

const INITAIL_STATE = {
  products:[  ],
};

export default function productReducer(state = INITAIL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      let Fetch_products = {
        ...state,
        products: action.payload,
      };
      return Fetch_products;
    case ERROR_FETCH_PRODUCTS:
      let newState = {
        ...state,
        error: action.payload,
      };

      return newState;
    default:
      return state;
  }
}
