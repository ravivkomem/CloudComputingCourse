/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class CheckoutFormContactInfo extends React.Component {

    constructor(props) 
    {
      super(props);
      sessionStorage.clear();
    }

    render () {
        return (
            <Form className="container-fluid contact-info-container">
                <h2 className="mb-3">Contact Information</h2>
                    <div>
                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" name="formName" placeholder="Email (For Order Confirmation)" />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="coFirstName"> 
                                    <Form.Control type="text" name="co_first_name" placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="coLastName"> 
                                    <Form.Control type="text" name="co_last_name" placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="coAddress">
                            <Form.Control type="text" name="co_address" placeholder="Address" />
                        </Form.Group>
                        <Form.Group controlId="coCity">
                            <Form.Control type="text" name="co_city" placeholder="City" />
                        </Form.Group>
                        <Row>
                            <Col md={5}>
                                <Form.Group className="dropdown-container">
                                    <Form.Label name="coCountry">Country</Form.Label>
                                    <Form.Control as="select" name="coSelectCountry" id="coCountry">
                                        <option data-code="US" defaultValue="selected" value="United States">United States</option>
                                        <option data-code="CA" value="Canada">Canada</option>
                                        <option disabled="disabled" value="---">---</option>
                                        <option data-code="AF" value="Afghanistan">Afghanistan</option>
                                        <option data-code="AX" value="Aland Islands">Åland Islands</option>
                                        <option data-code="AL" value="Albania">Albania</option>
                                        <option data-code="DZ" value="Algeria">Algeria</option>
                                        <option data-code="AD" value="Andorra">Andorra</option>
                                        <option data-code="AO" value="Angola">Angola</option>
                                        <option data-code="AI" value="Anguilla">Anguilla</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="coZipCode">
                                    <Form.Label name="coZip">Zip</Form.Label>
                                    <Form.Control className="zip-input" type="text" name="co_zipcode" placeholder="ZIP Code" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="coPhone">
                            <Form.Control type="phone" name="co_phone" placeholder="Phone (For Shipping Updates)" />
                        </Form.Group>
                    </div>
                </Form>
        );
    }
}


export default CheckoutFormContactInfo;