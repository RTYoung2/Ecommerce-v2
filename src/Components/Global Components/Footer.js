import React, {Component} from "react"
import "./Footer.css"

class Footer extends Component {
    render(){
        return( 
            <div className= "footer">
                Hello this is the footer 
                <div className= "social_media">

                <img src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-256.png"
                    alt="Facebook logo" height="50" width="50" />
                <a href="https://www.facebook.com/T7-Apparel-1274867282689282" target="_blank"
                    title="T7 facebook page"><span>FaceBook</span>
                </a>

            </div>

            <div class="social_media">


                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"
                    alt="Logo of instagram" height="50" width="50" />
                <a href="https://www.instagram.com/t7_apparel/" target="_blank"
                    title="T7 Instagram page"><span>Instagram</span>
                </a>

            </div>
                
            </div>
               
        )  
        
    }


}

export default Footer