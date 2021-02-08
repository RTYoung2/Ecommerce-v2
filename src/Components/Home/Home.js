import React, {Component} from "react"
import './Home.css'
import Header from "../Global Components/Header"
import Footer from "../Global Components/Footer"
import Blurb from "../Blurb/Blurb"

class Home extends Component {

    render (){
        return(
       
        
<div className="home">
    
    {/* Header component --> once the header is completed, then the component is imported */}
    <Header />

    <Blurb blurbTitle="WHAT IS T7?" blurbDescription="T7 is a clothing brand that is focused on bringing positive change through joy, peace, and love, to the world"/>
    <Blurb blurbTitle="OUR MISSION" blurbDescription="Creating a movement for Christ, by following scriptures and the way of the truth, by building perspective thtoughout mankind."/>
    
  
</div>
        )   
    }
}

export default Home;