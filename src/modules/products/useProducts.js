import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productAction } from "../../redux/action/productAction";

export function useProducts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const fetchproducts = useSelector((state) => state.productReducer.products);
  const state = useSelector((state) => state);
  console.log("loading",loading)
  const callBack = () =>{
    setLoading(false)
  }
  const fetchPro =  () => {
    dispatch(productAction(callBack));
  };
  useEffect(() => {
    fetchPro();
  }, []);

  return [fetchproducts,loading];
}
