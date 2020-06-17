import React from "react";
import "../styles.css";
import NavBar from "../components/navbar/NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const App = () => (
  <div className="App">
    <div className="grid-container">
      <NavBar />
      <div className="card-container">
        <div className="img-container">
          <img
            src={"images/brazil-coffee.jpg"}
            alt="item"
            className="item-img"
          ></img>
        </div>
        <ProductsContainer />
        <CartContainer />
      </div>
    </div>
  </div>
);

export default App;
