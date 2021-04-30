/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
                <img src={LogoImg} style={{width: "6rem"}}></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/HotAndNew">Hot & New</Nav.Link> 
                <Nav.Link href="/Insurance">Insurance</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
  }


}

export default HeaderSection;
