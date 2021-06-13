/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';

/* Images */
import LogoImg from '../Images/logo.png'
/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class HeaderSection extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {

    var welcomeMessage = 'Good Morning :)'
    var timeAfterNoon = '12:00:00';
    var timeEvening = '18:00:00';

    var currentDate = new Date() 

    var afterNoonDate = new Date(currentDate.getTime());
    afterNoonDate.setHours(timeAfterNoon.split(":")[0]);
    afterNoonDate.setMinutes(timeAfterNoon.split(":")[1]);
    afterNoonDate.setSeconds(timeAfterNoon.split(":")[2]);

    var eveningDate = new Date(currentDate.getTime());
    eveningDate.setHours(timeEvening.split(":")[0]);
    eveningDate.setMinutes(timeEvening.split(":")[1]);
    eveningDate.setSeconds(timeEvening.split(":")[2]);
    
    if (currentDate < afterNoonDate)
    {
      welcomeMessage = 'Good Morning';
    }
    else if (currentDate < eveningDate)
    {
      welcomeMessage = 'Good Afternoon';
    }
    else
    {
      welcomeMessage = 'Good Evening';
    }

    return (
    
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
                <img src={LogoImg} alt="" style={{width: "6rem"}}></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/Insurance">Insurance</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline>
              <Form.Label>{welcomeMessage}</Form.Label>
            </Form>
        </Navbar>
        
        
    );
  }


}

export default HeaderSection;
