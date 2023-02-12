import React, { useContext } from "react";
import { IdContext } from "../../Context/Context";
import swal from "sweetalert";

import "./Cart.css";

import { BiHappyBeaming } from "react-icons/bi";

import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { MdDeleteForever } from "react-icons/md";

function Cart({ quan }) {
  const {
    arrayOfProducts,
    setarrayOfProducts,

    newState,

    handleTotal,
    countOfProducts,
    handleDecre,
  } = useContext(IdContext);

  console.log(newState);

  let totalAmount = 0;
  let printedProduct = [];
  function handleAmaount() {
    arrayOfProducts.forEach((val) => {
      if (val != null) {
        totalAmount += val[0].price;
      }
    });
  }
  handleAmaount();

  return (
    <div className="cartProduct">
      <div className="productImages">
        <h1 id="shoppinghead">Shopping Cart</h1>
        <hr />
        {arrayOfProducts.map((val, index) => {
          if (val !== null) {
            if (printedProduct.indexOf(val[0].id) === -1) {
              printedProduct.push(val[0].id);

              return (
                <div className="cart">
                  <div className="Product">
                    <div className="image-wrapper">
                      <img src={val[0].image} alt="product" />
                    </div>
                    <div className="pro-details">
                      <h1 className="title"> {val[0].title}</h1>
                      <p> {val[0].description}</p>
                      <h1>Ratings:{val[0].ratings}</h1>
                      <h3> Category:{val[0].category}</h3>
                      <h1>
                        Price:<span>{val[0].price}$</span>
                      </h1>
                      <div className="btnDiv-wrapper">
                        <button
                          id="qtbtn-"
                          onClick={() => {
                            handleDecre(val[0].id);
                          }}
                        >
                          <TfiMinus className="iconn" />
                        </button>
                        <div className="countOfProduct">
                          {" "}
                          {countOfProducts[`${val[0].title}`]}
                        </div>

                        <button
                          id="qtbtn+"
                          onClick={() => {
                            handleTotal(val[0].id);
                          }}
                        >
                          <TfiPlus className="iconn" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="delete-wrapper">
                    <button
                      onClick={() => {
                        let arr = arrayOfProducts;
                        let newArr = arr.filter((value) =>
                          value !== null
                            ? value[0].id !== val[0].id
                            : console.log("delete error")
                        );
                        console.log(newArr);
                        setarrayOfProducts(newArr);
                      }}
                    >
                      {" "}
                      <MdDeleteForever className="iconn" />
                    </button>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      <div className="cartBill">
        <p>
          <span>
            <BiHappyBeaming />
          </span>
          Part of your order qualifies for FREE delivery
        </p>
        <h1>
          Subtotal:
          <span> {totalAmount}$</span>
        </h1>
        <h1>
          Item :<span> {arrayOfProducts.length}'s</span>
        </h1>
        <h1>
          {" "}
          Delivery : <span>Only COD</span>
        </h1>

        <div>
          <button
            onClick={() => {
              if (arrayOfProducts.length !== 0) {
                swal({
                  title: "Good job!",
                  text: "You odered successfully",
                  icon: "success",
                });
                setarrayOfProducts([]);
              } else {
                swal({
                  title: "Add Something!",
                  text: "Your cart is empty!",
                  icon: "error",
                });
              }
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
