import React from "react";
import TopImageSlider from "./TopImageSlider/TopImageSlider";
import "./Main.css";

import ProductsFetch from "./ProductsFetch/ProductsFetch";

function Main() {
  return (
    <main className="main-wrapper">
      <TopImageSlider />

      <ProductsFetch />
    </main>
  );
}

export default Main;
