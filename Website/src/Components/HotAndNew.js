/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class HotAndNew extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      
     <h1>HotAndNew</h1>
    );
  }


}

export default HotAndNew;
