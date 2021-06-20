import SingleProduct from './singleProductTemplate.js'
import "../../StyleSheet/productContainer.css"
import { NavLink } from 'react-router-dom';
import { useProducts } from './useProducts'
import moment from 'moment';

function ProductContainer() {
  const [pros] = useProducts();
  return (
    <div className="products">
      {pros ? pros.map((item) => {
        console.log("api in productcontainer", item.id);
        return <NavLink class="containerLink" exact to={{
          pathname: 'itemDetails',
          about: {
            name: item
          }
        }}> <SingleProduct key={item.id} price={item.price} src={item.url} name={item.title} location={item.location} time={moment(item.time).startOf('day').fromNow()} /> </NavLink>
      }) : <p>loading...</p>}
    </div>
  )
}

export default ProductContainer
