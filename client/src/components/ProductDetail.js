import React from "react";
import { Link, useLocation } from "react-router-dom";
// import user from "../images/user.jpg";

const ProductDetail = (props) => {
  

  const location = useLocation()
const {product } = location.state
  console.log(props);
  const { name, price,inventory_level } =product;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">

        </div>
        <div className="content">
          <div className="header">{name}</div>
          <p>price</p>
          <div className="description">{price}</div>
          <p>inventory_level</p>
          <div className="description">{inventory_level}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;