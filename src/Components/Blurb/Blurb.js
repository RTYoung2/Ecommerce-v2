import React, {Component} from "react"

class Blurb extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="blurb" class="blurb-container">

            <div class="blurb-what-is-box">

            <h1 class="blurb-title"> {this.props.blurb-title}</h1>
            <p class="blurb-description">
                T7 is a clothing brand that is focused on bringing change through joy,
                peace,
                love, to the world


            </p>
            </div>
         </div>
        )
    }
}
export default Blurb;
