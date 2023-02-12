import React from "react";
import { Link } from "react-router-dom";
import { IdContext } from "../../../Context/Context";
import "./Products.css";
import { useContext } from "react";

function Products(props) {
  const { setclickedProduct } = useContext(IdContext);
  return (
    <Link to="/productDetails">
      <div
        className="products-wrapper"
        onClick={() => {
          setclickedProduct(props); // this will set id num when useer click on a item and after that taped item will shown on different page
        }}
      >
        <img src={props.image} />

        <h3 className="category">{props.category}</h3>
        <h1 className="title">{props.title}</h1>

        <h1>{props.price}$</h1>
      </div>
    </Link>
  );
}

export default Products;
