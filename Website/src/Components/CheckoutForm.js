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
מצ
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
                    {/* <Col className="right-col-container pb-4" md="6">
                        <CartDetails data={this.state.data} />
                        <InfoReel />
                    </Col> */}
                </Row>
            </Container>
		);
    }


}

export default CheckoutForm;