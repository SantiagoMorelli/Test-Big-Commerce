import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/products";

import ProductList from "./components/ProductList";
import ProductListBulkEdition from "./components/ProductListBulkEdition";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import EditProductBulkEdition from "./components/EditProductBulkEdition";
import Navbar from "./components/NavBar";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      try {
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
        }else
      
        {   setProducts([]);}
     
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

    };

    getAllProducts();
  }, []);

  return (
    <div className="ui container">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList products={products} loading={loading}/>} />
          <Route
            exact
            path="/bulk"
            element={
              <ProductListBulkEdition products={products} loading={loading}/>
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
