import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {productAction } from '../../redux/action/productAction'

export function useProducts () {
    const dispatch = useDispatch()
    const fetchproducts = useSelector(state => state.productReducer.products)
    console.log("useProduct store in Reducers=>",fetchproducts);

    const fetchPro = async () =>{
        let dataPassToStor = {
            title:"pikapu"
          }
          dispatch(productAction(dataPassToStor))
        }
        useEffect(() => {
    fetchPro()
}, [])

    return [fetchproducts]
}

