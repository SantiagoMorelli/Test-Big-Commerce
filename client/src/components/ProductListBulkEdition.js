import React, {  useState } from "react";
import { Link } from "react-router-dom";

const ProductListBulkEdition = (props) => {
  const [checkedState, setCheckedState] = useState(new Array(20).fill(false));

  const [productToEdit, setProductToEdit] = useState({});

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const newTable = updatedCheckedState.reduce((prev, currentState, index) => {
      if (currentState === true) {
        return [...prev, props.products[index]];
      }
      return prev;
    }, []);
    setProductToEdit(newTable);
  };

  return (
    <div className="main">
      <h2>Product List</h2>
      <div className="ui celled list">
        <Link to="/editbulk" state={{ products: productToEdit }}>
          <button className="ui button blue">Edit</button>
        </Link>
        <div className="item">
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>id</th>

                  <th>name</th>

                  <th>price</th>

                  <th>inventory_level</th>
                  <th>select</th>
                </tr>
              </thead>
              <tbody>
                {props.products.map((product, key) => {
                  return (
                    <tr key={key}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.inventory_level}</td>
                      <td>
                        {" "}
                        <input
                          type="checkbox"
                          checked={checkedState[key]}
                          onChange={() => handleOnChange(key)}
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

export default ProductListBulkEdition;
