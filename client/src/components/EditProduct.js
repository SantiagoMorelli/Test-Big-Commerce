import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

const EditProduct = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;

  const [price, setPrice] = useState(product.price);
  const [inventory_level, setInventory_level] = useState(
    product.inventory_level
  );

  const update = (e) => {
    e.preventDefault();

    props.updateProductHandler({ ...product, price, inventory_level });

    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Product</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            readOnly
            value={product.name}
          />
        </div>
        <div className="field">
          <label>Price</label>
          <input
            type="number"
            min={0}
            step="any"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Inventory Level</label>
          <input
            type="number"
            min={0}
            name="inventory_level"
            placeholder="inventory_level"
            value={inventory_level}
            onChange={(e) => setInventory_level(e.target.value)}
          />
       
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
