import React, { useContext } from "react";
import "./NavBar.css";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

import { DiReact } from "react-icons/di";
import { IdContext } from "../../Context/Context";

function NavBar() {
  const { arrayOfProducts } = useContext(IdContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <Link to="/">
              {" "}
              <DiReact style={{ color: "white" }} />
            </Link>
          </h2>
        </div>

        <div className={mobileMenu ? "mobile-menu" : "menu-link"}>
          <ul>
            <li id="cartLi">
              <div className="cartCount">{arrayOfProducts.length}</div>
              <Link to="/cart">
                {" "}
                <FaCartArrowDown />
              </Link>
            </li>

            <li>
              <Link to="/contect" style={{ fontSize: "18px" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/productsAll" style={{ fontSize: "18px" }}>
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <a href="#" onClick={() => setMobileMenu(!mobileMenu)}>
            <i>
              {" "}
              <MdMenu />
            </i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
