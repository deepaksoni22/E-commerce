import React from "react";
import "./ProductsFetch.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Products from "../Products/Products";
import { IdContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";

function ProductsFetch() {
  const { mainData, setMainData } = useContext(IdContext);
  const [val, setVal] = useState(false);

  let [category, setCategory] = useState("all");
  useEffect(() => {
    let value = document.querySelectorAll(".category"); //its a h2 tag in this product category is mentioned

    let quantityOfItem = 0;

    value.forEach((val) => {
      val.parentElement.parentElement.style.display = "block";

      if (val.innerText == category) {
        quantityOfItem++;
      } else if (category == "all") {
        val.parentElement.parentElement.style.display = "block"; //it will select category tag grand parent
      } else {
        val.parentElement.parentElement.style.display = "none";
      }
    });
  }, [category]);
  let arrayofData;
  let getData = async () => {
    let apiData = await axios.get("https://fakestoreapi.com/products");
    arrayofData = apiData.data;
    arrayofData.map((val) => {
      Object.assign(val, val, { quantity: 1 }); // To add quantity property in each object
    });
    setVal(true);
    setMainData(arrayofData);
  };

  useEffect(() => {
    getData();
  }, [val]);

  return (
    <>
      {val == true ? ( // in this until app gets data from the api it will show loading after that tha content
        <>
          <h1 id="mainH">Shop Here</h1>
          <hr />
          <div className="category-wrapper">
            {" "}
            <button
              className="mens"
              onClick={() => {
                let value = "men's clothing";
                setCategory(value);
              }}
            >
              Men
            </button>
            <button
              className="womens"
              onClick={() => {
                let value = "women's clothing";
                setCategory(value);
              }}
            >
              Women
            </button>
            <button
              className="jewelery"
              onClick={() => {
                let value = "jewelery";
                setCategory(value);
              }}
            >
              Jewelery
            </button>
            <button
              className="electronics"
              onClick={() => {
                let value = "electronics";
                setCategory(value);
              }}
            >
              Electronics
            </button>
            <button
              className="all"
              onClick={() => {
                let value = "all";
                setCategory(value);
              }}
            >
              ALL
            </button>
          </div>

          <div className="productsFetch-wrapper">
            {mainData.map((val) => {
              return (
                <>
                  <Products
                    key={val.id + 1}
                    title={val.title}
                    id={val.id}
                    image={val.image}
                    price={val.price}
                    ratings={val.rating.rate}
                    category={val.category}
                  />
                </>
              );
            })}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductsFetch;
