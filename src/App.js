import React from "react";
import "./styles.css";
import NavBar from "./components/navbar/NavBar";

const App = () => (
  <div className="App">
    <div className="grid-container">
      <NavBar />
      <div className="card-container"></div>
    </div>
  </div>
);

export default App;
