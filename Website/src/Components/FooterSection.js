/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class FooterSection extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
        <center>Created By: Raviv Komem & Lior Kauffman 2021</center>
    );
  }


}

export default FooterSection;
