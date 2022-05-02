import React from "react";
import { Link } from "react-router-dom";

// import user from "../images/user.png";

const ProductCard = (props) => {

  const { id, name, price,inventory_level } = props.product;
  return (
    <div className="item">

      <div className="content">
     
            <Link to={`/product/${id}`}state={{ product: props.product } }>
           
          <div className="header">{name}</div>
         <p>price:</p> <div>{price}</div>
          <p>inventory_level: </p><div>{inventory_level}</div>
        </Link>
      </div>
  


      <Link to="/edit" state={{ product: props.product }}>
      <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
</Link>
    </div>
  );
};

export default ProductCard;