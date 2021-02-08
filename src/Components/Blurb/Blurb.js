import React, {Component} from "react"
import  "./Blurb.css"

class Blurb extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="blurb">


            <h1 className="blurbTitle"> {this.props.blurbTitle} </h1>
            
            <p class="blurbDescription"> {this.props.blurbDescription}
                {/* T7 is a clothing brand that is focused on bringing change through joy,
                peace,
                love, to the world */}


            </p>
            
         </div>
        )
    }
}
export default Blurb;
