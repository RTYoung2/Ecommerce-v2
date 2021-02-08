import React, {Component} from "react"
import Footer from "../Global Components/Footer"
import "./Contact.css"
import Blurb from "../Blurb/Blurb"
// import MyNav from "../Navigation/Navigation"

class Contact extends Component {
    render(){
        return(
            <div className = "Contact">
       

               <form className="form">
                   
                   <label type="text">FULL NAME</label>
                   <input placeholder="FULL NAME" required></input>
                   <br></br>
                   <br></br>

                   <label type="text">PHONE #</label>
                   <input placeholder="(777) 777-7777" required></input>
                   <br></br>
                   <br></br>

                   <label type="text">EMAIL</label>
                   <input placeholder="EX. t7apparel@gmail.com" required></input>
                   <br></br>
                   <br></br>

                    <p>Would you like to receive future news and promotions about T7 apparel?</p>
                   <input type="radio" id="yes" value="yes" required></input> 
                   <label for="yes">Yes</label>
                   <input type="radio" id="no" value="no" required></input> 
                   <label for="no" >No</label>
                   <br></br>
                   <br></br>
                   
                   {/* <input>EMAIL</input>
                   <input>PHONE</input> */}
                   <button className="submit">Submit</button>
               </form>

                 
            </div>
        )
    }
}


export default Contact 


