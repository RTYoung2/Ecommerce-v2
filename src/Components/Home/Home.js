import React, {Component} from "react"
import './Home.css'
import Header from "../Global Components/Header"
import Footer from "../Global Components/Footer"
import Blurb from "../Blurb/Blurb"

class Home extends Component {

    render (){
        return(
        // const {home} = this.state
        // let addModalClose = () => this.setState({addModalShow:false})
        // return(
        
<div className="home">
    This is the Home :)
    <Blurb />
    <Header />
    {/* Header component --> once the header is completed, then the component is imported */}
    {/* Card Section component */}
    {/* Footer component */}
    <Footer />
</div>
        )   
    }
}

export default Home;