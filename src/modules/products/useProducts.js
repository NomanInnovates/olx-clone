import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productAction } from "../../redux/action/productAction";

export function useProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector(({ productReducer }) => productReducer);

  const [loading, setLoading] = useState(true)
  const [filterProducts, setFilterProducts] = useState(products)

  const callBack = () => {
    setLoading(false)
  }
  const fetchPro = useCallback(
    () => {
      dispatch(productAction(callBack));
    },
    [dispatch],
  )

  const handleFilterProducts = (cb) => {
    let filtered = products.filter(cb)
    setFilterProducts(filtered)
  }


  useEffect(() => {
    fetchPro();
  }, [fetchPro]);
  useEffect(() => {
    setFilterProducts(products)
  }, [products]);

  return [filterProducts, loading, handleFilterProducts];
}
