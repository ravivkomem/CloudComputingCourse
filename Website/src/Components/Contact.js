/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import '../App.css';
//import './Home.css';
import form from "react-bootstrap/Form";
import funcClick from '../Components/FuncClick';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class Contact extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
  
      <form className="form">
        <h1>Contact form </h1>
      <label>
        Name:
        </label>
        <input placeholder="Name" />
        <label>
        Email:
        </label>
        <input  placeholder="Email" />
        <label>
        Message:
        </label>
          <textarea placeholder="Message"></textarea>
          <div>
            <button>Submit</button>
        </div>


    </form>
    
      
    );
  }


}

export default Contact;
