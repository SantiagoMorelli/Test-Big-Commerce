import React, { useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const ProductListBulkEdition = (props) => {
  const navigate = useNavigate();
  const [checkedState, setCheckedState] = useState(new Array(100).fill(false));
  const [productToEdit, setProductToEdit] = useState([]);

  const handleOnClick = () => {
    productToEdit.length <= 10 && productToEdit.length > 0
      ? navigate("/editbulk", { state: { products: productToEdit } })
      : window.alert(`
    it is not possible to edit ${productToEdit.length} values.\n Plese select values ​​between 1 and 10 `);
  };

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

  return props.loading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div className="main">
      <h2>Bulk Edit</h2>
      <div className="ui celled list">
        <button className="ui button blue" onClick={handleOnClick}>
          Edit
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
