import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

import ProductDetails from "./Pages/ProductDetail/ProductDetails";
import { useState, useEffect } from "react";

import { IdContext } from "./Context/Context";

import Cart from "./Pages/Cart/Cart";

import "react-loading-skeleton/dist/skeleton.css";

import ProductsAll from "./Pages/ProductsAll";
import Contect from "./Pages/Contect/Contect";
import Footer from "./Components/Footer/Footer";
function App() {
  const [clickedProduct, setclickedProduct] = useState(0);
  const [arrayOfProducts, setarrayOfProducts] = useState([]);
  const [countOfProducts, setcountOfProducts] = useState([]);
  let [mainData, setMainData] = useState([]);

  function handleClickedProduct(quantity) {
    setarrayOfProducts((current) => [...current, [clickedProduct, quantity]]);
  }

  function handleTotal(id) {
    let data = mainData[id - 1];
    let x = [...arrayOfProducts];
    x.push([data, 1]);
    setarrayOfProducts(x);
  }
  function handleDecre(id) {
    let array = [...arrayOfProducts];

    for (let i = 0; i < array.length; i++) {
      if (array[i] != null) {
        if (array[i][0].id == id) {
          array[i] = null;

          break;
        }
      }
    }

    setarrayOfProducts(array);
  }

  useEffect(() => {
    let obj = {};

    arrayOfProducts.forEach((val, index, object) => {
      if (val === null) {
        //to delete the empty item from the arrayofProducts
        object.splice(index, 1);
      }

      if (val != null) {
        obj[val[0].title] = (obj[val[0].title] || 0) + 1; // to get the number quantity of each product in cart
      }
    });
    setcountOfProducts(obj);
  }, [arrayOfProducts]);

  return (
    <div className="App">
      <IdContext.Provider
        value={{
          clickedProduct,
          setclickedProduct,
          arrayOfProducts,
          setarrayOfProducts,
          mainData,
          setMainData,
          handleClickedProduct,
          handleTotal,
          countOfProducts,
          setcountOfProducts,
          handleDecre,
        }}
      >
        <nav>
          <NavBar />
        </nav>

        <Route path={"/"} exact>
          {/* <Loader /> */}

          <Main />
        </Route>

        <Route path={"/productDetails"}>
          <ProductDetails />
        </Route>
        <Route path={"/cart"}>
          <Cart />\
        </Route>

        <Route path={"/productsAll"}>
          <ProductsAll />
        </Route>
        <Route path={"/contect"}>
          <Contect />
        </Route>
      </IdContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
