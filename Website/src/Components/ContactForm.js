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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    /* Data Fields Event Change Handler */
    const  handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === 'formName')
        {
          setName(fieldValue);
        }
        else if (fieldName === 'formEmail')
        {
          setEmail(fieldValue);
        }
        else if (fieldName === 'formMessage')
        {
          setMessage(fieldValue);
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
