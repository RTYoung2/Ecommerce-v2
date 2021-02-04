import React, { useState } from "react";
import "./App.css";
// import MyNav from "../src/Components/Navigation/Navigation";
// import Apparel from "./assets/apparel.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Global Components/Footer";
// import ContactModal from "./Components/Global Components/ContactModal/ContactModal"
import CardHolder from "./Components/CardHolder/CardHolder";
// import * as ProductData from "./assets/apparel.json";
// const test = require ('./assets/apparel.json')

function App() {
  return (
    <Router>
      <div className="App">
        <Carousel />

        {/* <CardHolder product= {ProductData[0]} /> */}

        {/* {JSON.stringify(ProductData[0])} */}

        {/* {products} */}

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>

          <Route exact path="/contact">
            <Products></Products>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
