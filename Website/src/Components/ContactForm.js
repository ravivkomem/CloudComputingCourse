/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'


/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
const ContactForm = (props) => {

    /* Class Constantants */
    const initialState = {
        name: '',
        email: '',
        message: '',
    }

    const [{name, email, message}, setState] = useState(initialState);

    
    /* Data Fields Event Change Handler */
    const  handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        console.log("Field Name: " + fieldName, fieldValue)

        if (fieldName === 'formName')
        {
          name = fieldValue;
        }
        else if (fieldName === 'formEmail')
        {
            email = fieldValue;
        }
        else if (fieldName === 'formMessage')
        {
            message = fieldValue;
        }
    }

    /* Submit Button handler */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
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

    return (
        <Form>
            <Row>
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Control name="formName" placeholder="Enter name" onChange={handleChange}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Control name="formEmail" type="email" placeholder="Enter email" onChange={handleChange}/>
                  </Form.Group>
                </Col>
            </Row>
              <Form.Group controlId="formMessage">
                <Form.Control name="formMessage" as="textarea" rows={3} placeholder="Enter Message" onChange={handleChange}/>
              </Form.Group>
              <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}


export default ContactForm;
