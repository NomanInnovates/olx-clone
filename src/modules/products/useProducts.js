import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productAction } from "../../redux/action/productAction";

export function useProducts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const fetchproducts = useSelector((state) => state.productReducer.products);

  const callBack = () =>{
    setLoading(false)
  }
  const fetchPro =useCallback(
    () => {
      dispatch(productAction(callBack));
    },
    [dispatch],
  )
   

  useEffect(() => {
    fetchPro();
  }, [fetchPro]);

  return [fetchproducts,loading];
}
