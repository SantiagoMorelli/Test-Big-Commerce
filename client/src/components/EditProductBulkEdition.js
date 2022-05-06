import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

const EditProductBulkEdition = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { products } = location.state;

  const [InputFields, setInputFields] = useState(products);
  //   const [inventory_level, setInventory_level] = useState(
  //     product.inventory_level
  //   );

  const update = () => {
    props.updateBulkProductHandler(InputFields );

    navigate("/bulk");
  };
  const handleChangeInput = (key, e) => {
    const values = [...products];
    values[key][e.target.name] = e.target.value;
    setInputFields(values);
  };

  return (
    <div className="main">
      <h2>Product List</h2>
      <div className="ui celled list">
        <button className="ui button blue" onClick={update}>
          Save
        </button>
        <div className="item">
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>id</th>

                  <th>name</th>

                  <th>price</th>

                  <th>inventory_level</th>
                </tr>
              </thead>
              <tbody>
                {InputFields.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td>{product.id}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={product.name}
                          onChange={(e) => handleChangeInput(key, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min={0}
                          step="any"
                          name="price"
                          placeholder="Price"
                          value={product.price}
                          onChange={(e) => handleChangeInput(key, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min={0}
                          name="inventory_level"
                          placeholder="inventory_level"
                          value={product.inventory_level}
                          onChange={(e) => handleChangeInput(key, e)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductBulkEdition;
