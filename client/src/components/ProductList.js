import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = (props) => {


  const deleteConactHandler = (id) => {
    props.getProductId(id);
  };

  const renderProductsList = props.products.map((product) => {
    return (
      <ProductCard
        product={product}
        clickHander={deleteConactHandler}
        key={product.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Product List

      </h2>
      <div className="ui celled list">{renderProductsList}</div>
    </div>
  );
};

export default ProductList;