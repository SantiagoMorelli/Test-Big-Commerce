import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/products";

import ProductList from "./components/ProductList";
import ProductListBulkEdition from "./components/ProductListBulkEdition";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import EditProductBulkEdition from "./components/EditProductBulkEdition";

function App() {
  const [products, setProducts] = useState([]);

  const updateProductHandler = async (product) => {
    const response = await api.put(`/api/product/${product.id}`, product);
    const { id } = response.data.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data.data } : product;
      })
    );
  };

  const updateBulkProductHandler = async (newProducts) => {
    const response = await api.put(`/api/product/`, newProducts);

    setProducts(
      products.map((item) => {
        return response.data.data.find((newitem) => newitem.id === item.id)
          ? response.data.data.find((newitem) => newitem.id === item.id)
          : item;
      })
    );
  };

  const retrieveProducts = async () => {
    const response = await api.get("/api/product/");
    return response.data.data;
  };
  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) {
        const newAllProducts = allProducts.map((item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            inventory_level: item.inventory_level,
          };
        });

        setProducts(newAllProducts);
      }
    };

    getAllProducts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList products={products} />} />
          <Route
            exact
            path="/bulk"
            element={
              <ProductListBulkEdition products={products} />
            }
          />
          <Route
            path="/edit"
            element={
              <EditProduct updateProductHandler={updateProductHandler} />
            }
          />
          <Route
            path="/editbulk"
            element={
              <EditProductBulkEdition
                updateBulkProductHandler={updateBulkProductHandler}
              />
            }
          />

          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
