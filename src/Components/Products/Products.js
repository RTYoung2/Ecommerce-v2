import React, {Component} from "react"
import './Products.css'
import Header from "../Global Components/Header"
// import modal from "../Global Components/ContactModal/modal"
import Footer from "../Global Components/Footer"
import CardHolder from '../CardHolder/CardHolder';
import * as ProductData from '../../assets/apparel.json'
import { CardDeck } from "react-bootstrap";
const test = require ('../../assets/apparel.json')

  function Products (){

    const products = test.map((product, index) =>
    <CardHolder key={index} product={product}/>)
    
    
        return(
            
          
        
        <div className="products">
    {/* <Cardholder /> */}
    < CardDeck class="Row">
      <CardHolder product= {ProductData[0]} />
      <CardHolder product= {ProductData[1]} />
      <CardHolder product= {ProductData[2]} />
           
            </CardDeck>

            < CardDeck>
      <CardHolder product= {ProductData[3]} />
      <CardHolder product= {ProductData[4]} />
      <CardHolder product= {ProductData[5]} />
           
            </CardDeck>

            < CardDeck>
      <CardHolder product= {ProductData[6]} />
      <CardHolder product= {ProductData[7]} />
      <CardHolder product= {ProductData[8]} />
           
            </CardDeck>

            < CardDeck>
      <CardHolder product= {ProductData[9]} />
      <CardHolder product= {ProductData[10]} />
      <CardHolder product= {ProductData[11]} />
           
            </CardDeck>

        

             I am products :)
             this is still working
                <Header />
    
           
<Footer/>

</div>
        )
    }


export default Products;