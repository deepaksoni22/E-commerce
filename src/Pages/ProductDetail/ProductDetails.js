import React from "react";
import "./ProductDetails.css";
import { useContext, createContext } from "react";
import { IdContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Context = createContext({});
function ProductDetails() {
  const {
    clickedProduct,

    handleClickedProduct,
  } = useContext(IdContext);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="clickedProduct-wrapper">
      <div className="productImage-wrapper">
        <img src={clickedProduct.image} alt="clickedProduct" />
      </div>
      <div className="container">
        {" "}
        <div className="PrioductDescriptioin-wrapper">
          {" "}
          <h1> {clickedProduct.title}</h1>
          <p> {clickedProduct.description}</p>
          <h1>Ratings:{clickedProduct.ratings}</h1>
          <h3> Category:{clickedProduct.category}</h3>
          <h1>Price:{clickedProduct.price}$</h1>
        </div>
        <div className="buttonsToBuy-wrapper">
          <Link to="/cart">
            <button
              className="buttons"
              onClick={() => {
                handleClickedProduct(quantity);
              }}
            >
              {/*  to add item in cart and it will add items details in the arrayOfProducts state */}
              AddCart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
