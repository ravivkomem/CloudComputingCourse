/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
/* Class Constantants */
const initialState = {
  name: '',
  email: '',
  message: '',
}

class Contact extends React.Component {
  /* Constructor -
  @brief - Sets all initial parameters for this page  */
  constructor(props) 
  {
    super(props);
    sessionStorage.clear();

    this.state = initialState;
  }

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log("Field Name: " + fieldName, fieldValue)
    if (fieldName === 'formName')
    {
      this.state.name = fieldValue;
    }
    else if (fieldName === 'formEmail')
    {
      this.state.email = fieldValue;
    }
    else if (fieldName === 'formMessage')
    {
      this.state.message = fieldValue;
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.email, this.state.message);
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
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
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Control name="formName" placeholder="Enter name" onChange={this.handleChange}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Control name="formEmail" type="email" placeholder="Enter email" onChange={this.handleChange}/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage">
                <Form.Control name="formMessage" as="textarea" rows={3} placeholder="Enter Message" onChange={this.handleChange}/>
              </Form.Group>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
          </Col>
          {/* Second Column - Contact Info */}
          <Col>
            <Container>
              <Row>
                <h4>Contact Information</h4>
              </Row>
              <Row>
                <Col>
                  <h5>Contact Us</h5>
                  <p>
                    <i className='fa fa-map-marker'></i> Tel Aviv
                  </p>
                  <p>
                    <i className='fa fa-phone'></i> 054-6848161
                  </p>
                  <p>
                    <i className='fa fa-envelope-o'></i> ravivkomem@gmail.com
                  </p>
                </Col>
                <Col>
                  <h5>Social</h5>
                  <p>
                    <a href={'/'}>
                      <i className='fa fa-facebook'></i> facebook.com
                    </a>
                  </p>
                  <p>
                    <a href={'/'}>
                      <i className='fa fa-twitter'></i> twitter.com
                    </a>
                  </p>
                  <p>
                    <a href={'/'}>
                      <i className='fa fa-youtube'></i> youtube.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
    
  } /* Render Functions */
} /* Contact Class */

export default Contact;


  

