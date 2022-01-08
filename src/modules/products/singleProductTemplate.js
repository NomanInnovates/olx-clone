import React from "react";
import "../../StyleSheet/singleProduct.css";
function SingleProduct(props) {
  return (
    <div className="singleItem">
      <div className="poster">
        {props.src ? (
          <img alt={props?.name} src={props.src} />
        ) : (
          <h4>Loader</h4>
          // <Skeleton variant="rect" width={100} height={200} />
        )}
      </div>
      <div className="price">{props.price}</div>
      <div className="tagline">{props.name}</div>
      <div className="item-ftr">
        <div className="location">{props.location}</div>
        <div className="stamp">{props.time}</div>
      </div>
    </div>
  );
}

export default SingleProduct;
