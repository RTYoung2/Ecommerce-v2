import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {Component} from 'react'
import "./CardHolder.css"

class CardHolder extends Component{
 constructor(props){
     super (props) 
 }
    render(){
        return (
           
        // <div className ="container">
            <Card class="cardstyle" style={{ width: '18rem' }}>
                <Card.Img class="card-img" variant="top" src= {this.props.product.image} />
                    <Card.Body class="card-body">
                        <Card.Title class="card-title">{this.props.product.title}</Card.Title>
                            <Card.Text class="card-text">
                            {this.props.product.description}
                            </Card.Text>
                    <Button variant="primary"> ${this.props.product.price} ADD TO CART </Button>
                </Card.Body>
            </Card>
        // </div>
    
        )
    }
}



export default CardHolder;