/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
//import './Shop.css';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class Shop extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      <h1>Shop</h1>
    );
  }


}

export default Shop;
