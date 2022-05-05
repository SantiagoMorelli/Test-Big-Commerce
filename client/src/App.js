import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/products";

import ProductList from "./components/ProductList";

import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";

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

  const retrieveProducts = async () => {
    const response = await api.get("/api/product/");
    return response.data.data;
  };
  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList products={products} />} />
          <Route
            path="/edit"
            element={
              <EditProduct updateProductHandler={updateProductHandler} />
            }
          />

          <Route path="/product/:id" element={<ProductDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
