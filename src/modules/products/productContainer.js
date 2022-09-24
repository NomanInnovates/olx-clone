import moment from "moment";
import { NavLink } from "react-router-dom";

import { useProducts } from "./useProducts";
import "../../StyleSheet/productContainer.css";
import SingleProduct from "./singleProductTemplate.js";

function ProductContainer() {
  const [pros,loading] = useProducts();
  console.log("pros",pros)
  return (
    <div className="products">
      {Array.isArray(pros) && pros.length > 0 ? (
        pros.map((item) => {
          return (
            <NavLink
              key={item.id}
              className="containerLink"
              exact
              to={{
                pathname: "itemDetails",
                about: {
                  name: item,
                },
              }}
            >
              <SingleProduct
                key={item.id}
                src={item.url}
                name={item.title}
                price={item.price}
                location={item.location}
                time={moment(item.time).startOf("day").fromNow()}
              />{" "}
            </NavLink>
          );
        })
      ) : loading ? (
        <h2>loading...</h2>
      ) : <h2>No Products found</h2>}
    </div>
  );
}

export default ProductContainer;
