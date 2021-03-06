import React, {useState} from "react"
import './App.css';
import MyNav from "../src/Components/Navigation/Navigation"
// import Apparel from "./assets/apparel.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Global Components/Footer"
// import ContactModal from "./Components/Global Components/ContactModal/ContactModal"
import CardHolder from './Components/CardHolder/CardHolder';
// import * as ProductData from './assets/apparel.json'
// const test = require ('./assets/apparel.json')



function App() {


  return (

  
    <Router>    
      <div className='App'>
        
        
    
             <MyNav /> 
        
      
      <Switch>

       <Route exact path= "/">
          <Home>
          </Home>
        </Route>

        <Route exact path= "/home">
          <Home>
          </Home>
        </Route>

        <Route exact path= "/products">
          <Products>
          </Products>
        </Route>

        <Route exact path= "/contact">
         <Contact>
         </Contact>
        </Route>

      </Switch>
      
      <Footer />
      </div> 
    </Router>

   );
  }



export default App;
