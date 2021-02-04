import React, {Component, useState} from "react"
import './Products.css'
// Delete spaces in JSON file in Description section

// import modal from "../Global Components/ContactModal/modal"
// import Footer from "../Global Components/Footer"
// import { CardDeck } from "react-bootstrap";
import CardHolder from '../CardHolder/CardHolder';
import productData from "./apparel.json"
import Blurb from "../Blurb/Blurb"

  function Products (){

// Title of the Page




//     const products = test.map((product, index) =>
//     <CardHolder key={index} product={product}/>)
    const [state, setState] = useState(productData)
    
//     this is the functionality for price filter


const changePrice = (e) =>{
      let price=e.target.value

      if( price === "0-20") {
      let newProducts = productData.filter(product =>
            product.price >= 0.00 && product.price <= 20.00)
            setState(newProducts)

      }else if( price === "default"){ setState(productData)

      }else if( price === "21-40"){
            let  newProducts2 = productData.filter(product =>product.price >= 21.00 && product.price <= 40.00)
            setState(newProducts2)

      }else if( price === "41-60"){
            let  newProducts3 = productData.filter(product => product.price >= 41.00 && product.price <= 60.00)
            setState(newProducts3)
      }
}

//this is the functionality for garnmet type filter 

const changeType = (e) => {
      let type=e.target.value
      
      if(type === "Shirt"){
            let displayShirts = productData.filter(product => 
                  product.type === "Shirt"
                  )
             setState(displayShirts)
      }else if (type === "Hoodie"){
            let displayHoodies = productData.filter(product =>product.type === "Hoodie")
            setState(displayHoodies)
      }else if(type === "Accessory"){
            let displayAccessory = productData.filter(product => product.type === "Accessory")
            setState(displayAccessory)
      } else if(type === "Pants"){
            let displayPants = productData.filter(product => product.type === "Pants")
            setState(displayPants)
      }else if(type === "default"){
            let displayDefault = productData
            setState(displayDefault)
      }
            

}


    
        return(
              <>
<Blurb blurbTitle="PRODUCTS" className="productsTitle"/>
{/* Create a method for select element. When we change orice range it will change the state of the products page 
      Ex. it will only show the products that are priced in the range from $0 -$20 */}
{/* Select  */}
<div>

              <label htmlFor= "price">Filter Price </label>
            <select name="price" id="price" onChange={changePrice}>

            <option value = "default">Default </option>
            <option value = "0-20"> $0.00 - $20.00</option>
            <option value = "21-40"> $21.00 - $40.00</option>
            <option value = "41-60"> $41.00 - $60.00</option>

            </select >
</div>

<div>


<label htmlFor= "type" >Filter Type</label>
            <select name="type" id="type" onChange={changeType}>

            <option value = "default"> Default </option>
            <option value = "Shirt"> Shirts </option>
            <option value = "Hoodie"> Hoodies</option>
            <option value = "Pants"> Pants </option>
            <option value = "Accessory"> Accessories</option>

            </select >
</div>
          
        {/* when you map state run this function for products */}
        {/* the && means if state is true run this function  */}
        {/* Key is needed when you have a loop so it is rendering  */}
        {/* product is the prop that we are rendering. */}
      <div className="products">
   
            {state && state.map((product, index) =>
             (
                   <CardHolder key={index} product={product}/>
                   ))}
      </div>
           
      </>

      // const array = [1,2,3]
                  //return array[0]
 )
}


export default Products;