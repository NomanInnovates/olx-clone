import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productAction } from "../../redux/action/productAction";

export function useProducts() {
  const dispatch = useDispatch();
  const fetchproducts = useSelector((state) => state.productReducer.products);
  const fetchPro = async () => {
    dispatch(productAction());
  };
  useEffect(() => {
    fetchPro();
  }, []);

  return [fetchproducts];
}
