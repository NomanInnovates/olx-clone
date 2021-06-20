import { FETCH_PRODUCTS, ERROR_FETCH_PRODUCTS } from "../constants/types";
const INITAIL_STATE = [
  {
    title: "Machine",
    disc: "Washing Machine having capability",
    price: "15,000",
    location: "Lahore",
  },
];

export default function productReducer(state = INITAIL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log("data in ProductReducer", action.payload);
      let Fetch_products = {
        ...state,
        products: action.payload,
      };
      return Fetch_products;
    case ERROR_FETCH_PRODUCTS:
      console.log("Error in fetching products", action.payload);
      let newState = {
        ...state,
        error: action.payload,
      };

      return newState;
    default:
      return state;
  }
}
