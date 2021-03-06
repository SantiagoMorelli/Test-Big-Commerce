import React from "react";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const renderProductsList = props.products.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });

  return props.loading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div className="main">
      <h2>Product List</h2>
      <div className="ui celled list">{renderProductsList}</div>
    </div>
  );
};

export default ProductList;
