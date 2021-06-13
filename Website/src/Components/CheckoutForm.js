/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import CheckoutFormContactInfo from './CheckoutFormContactInfo';
import CheckoutFormPayment from './CheckoutFormPayment';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class CheckoutForm extends React.Component {

    constructor(props) 
    {
      super(props);
      sessionStorage.clear();
    }

    render () {
        return (
        <Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        <CheckoutFormContactInfo />
                        {/* <ShippingMethod callback={this.formChild1.bind(this)} /> */}
                        <CheckoutFormPayment />
                        {/* <Billing /> */}
                    </Col>
                    <Col>
                        <h1>Checkout Summary</h1>
                        <h2>Item Name: {String(this.props.match.params.name)}</h2>
                        <h2>Item Price: {String(this.props.match.params.price)}$</h2>
                    </Col>
                </Row>
            </Container>
		);
    }


}

export default CheckoutForm;