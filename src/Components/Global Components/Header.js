import React, {Component} from "react"
import './Header.css'
import Carousel from 'react-bootstrap/Carousel'
import SLIDER1 from '../Global Components/SLIDER1.jpg'
import logo from "../Global Components/7-logo.jpg"
import water from "../Global Components/Picture of San francisco from the pacific ocean.jpg"

class Header extends Component {

    render (){
        return(
        
<div className="header">
    this is the header :)
    {/* Header component --> once the header is completed, then the component is imported */}
    {/* Card Section component */}
    {/* Footer component */}
    
<Carousel>
  <Carousel.Item src="{SLIDER1}" interval={1000}>
    <img
      className="d-block w-100"
      src={SLIDER1}
      alt="THIS IS THE FIRST SLIDE"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={logo}
      alt="THIS IS THE SECOND IMAGE"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={water}
      alt="THIS IS THE THIRD IMAGE"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        )
    }
}

export default Header;