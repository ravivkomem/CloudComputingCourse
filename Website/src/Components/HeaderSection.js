/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
                <img src={LogoImg} alt="" style={{width: "6rem"}}></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/Insurance">Insurance</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
        
        
    );
  }


}

export default HeaderSection;
