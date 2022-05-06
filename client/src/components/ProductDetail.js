import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import api from "../api/products";

const ProductDetail = () => {

  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);


  React.useEffect(() => {
    setLoading(true);
    async function getProduct() {
      try {
        const response = await api.get(`/api/product//find/${id}`);
     if (response.data.data) {
         
      setProduct(response.data.data);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <h2 >no product to display</h2>
  } else {
    const { name, price, inventory_level,description } =
    product;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image"></div>
        <div className="content">
          <div className="header">{name}</div>
          <p>price</p>
          <div className="description">{price}</div>
          <p>inventory_level</p>
          <div className="description">{inventory_level}</div>
          <p>description</p>
          <div className="description">{description}</div>
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
  }
};

export default ProductDetail;
