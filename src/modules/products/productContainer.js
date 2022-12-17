import moment from "moment";
import { NavLink } from "react-router-dom";

import "../../StyleSheet/productContainer.css";
import SingleProduct from "./singleProductTemplate.js";

function ProductContainer({products,loading}) {

  return (
    <div className="products">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((item) => {
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
        <>
        <div className="spinner-box">
          <div className="blue-orbit leo">
          </div>
        
          <div className="green-orbit leo">
          </div>
          
          <div className="red-orbit leo">
          </div>
          
          <div className="white-orbit w1 leo">
          </div><div className="white-orbit w2 leo">
          </div><div className="white-orbit w3 leo">
          </div>
          <span>Loading...</span>
        </div></>
      ) : <h2>No Products found</h2>}
    </div>
  );
}

export default ProductContainer;
