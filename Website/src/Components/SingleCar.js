/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CartContext } from '../../contexts/CartContext';
// import { formatNumber } from '../../helpers/utils';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */

/* @ brief: This Class is responsible for a single car in the shop
            Single car will recieve the following properties:
            # id - The car identification
            # name - Car name
            # img - the car source image relative path
            # price - the car price for display
            ....
*/
class SingleCar extends React.Component {

    /* Members */
    // const { addProduct, cartItems, increase } = useContext(CartContext); (TODO)

    /*  @ brief:  Constructor Function  */
    constructor(props) 
    {
      super(props);

      this.id = props.id;
      this.img = props.img;
      this.price = props.price;
      this.name = props.name;
      sessionStorage.clear();
    }

    isInCart = (id) => {
        return false;
    }

    /*  @ brief:  Render Function  */
    render() {
        /* Decide the button for display - TODO: Set on click method*/
        let button;
        if (this.isInCart === true)
        {
            button = <Button className="btn btn-outline-primary btn-sm">Add more</Button>
        }
        else
        {
            button = <Link to="/checkout" className="btn btn-primary btn-sm">Purchase</Link>
        }

        return (
            <Card style={{width: '20rem' , marginTop: '3rem', background: 'rgba(252, 252, 252, 0.6)'}}>
              <Card.Body>
                <Card.Text>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "150px"}} className="img-fluid" 
                    src={this.img + '?v=' + this.id} alt=""/>
                    <p className="text-center">{this.name}</p>
                    <h3 className="text-center">{this.price} $</h3>
                    <div className="text-right">
                        <Link className="btn btn-link btn-sm mr-2">Details</Link> {/* TODO - Set details? */}
                        {button}
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
        );
    }
       
}    
export default SingleCar;
