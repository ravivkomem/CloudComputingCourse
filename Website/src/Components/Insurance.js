/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
//import './Home.css';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class Insurance extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      <h1>Insurance</h1>
    );
  }


}

export default Insurance;
