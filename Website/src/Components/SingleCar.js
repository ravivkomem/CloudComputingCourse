/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

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
      this.displayInfo = false;
      sessionStorage.clear();
    }

    isInCart = (id) => {
        return false;
    }

    showDetails = (e) => {
        this.displayInfo = !this.displayInfo;
        this.forceUpdate();
    }

    /*  @ brief:  Render Function  */
    render() {
        let carImg;
        let engineDetails = "";
        let maxSpeedDetails = "";
        const cardStyle = {height: '20rem' ,width: '20rem' , marginTop: '3rem', background: 'rgba(252, 252, 252, 0.6)'};
        
        /* Set the car image  */
        if (this.displayInfo === true)
        {
            carImg = <img style={{display: "block", margin: "0px auto 10px", maxHeight: "100px"}} className="img-fluid" 
            src={this.props.img + '?v=' + this.props.id} alt=""/>;
            engineDetails = <div className="text-center">Engine Size: {this.props.engine}</div>;
            maxSpeedDetails = <div className="text-center">Max Speed: {this.props.maxSpeed}</div>;
        }
        else
        {
            carImg = <img style={{display: "block", margin: "0px auto 10px", maxHeight: "150px"}} className="img-fluid" 
            src={this.props.img + '?v=' + this.props.id} alt=""/>;
            engineDetails = "";
            maxSpeedDetails = "";
        }

        return (
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Text>
                    {carImg}
                    <h6 className="text-center">{this.props.name}</h6>
                    {engineDetails}
                    {maxSpeedDetails}
                    <h3 className="text-center">{this.props.price} $</h3>
                    <div className="text-right">
                        <Link to='#' className="btn btn-link btn-sm mr-2" onClick={this.showDetails}>Details</Link>
                        <Link to={"/checkout/"+String(this.props.price)+"/"+String(this.props.name)} className="btn btn-primary btn-sm">Purchase</Link>
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
        );
    }
       
}    
export default SingleCar;
