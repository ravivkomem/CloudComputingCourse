/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactInfo from '../Components/ContactInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class Contact extends React.Component {
  /* Constructor -
  @brief - Sets all initial parameters for this page  */
  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return(
      <Container>
        <Row>
          <h2>Get In Touch</h2>
        </Row>
        <Row>
          <p>
            Please fill out the form below to send us an email and we will
            get back to you as soon as possible.
          </p>
        </Row>
        <Row>
          {/* First Column - This is the Form */}
          <Col style = {{ paddingRight: "30px"}}>
            <ContactForm/>
          </Col>
          {/* Second Column - Contact Info */}
          <Col>
            <ContactInfo/>
          </Col>
        </Row>
      </Container>
    );
    
  } /* Render Functions */
} /* Contact Class */

export default Contact;


  

