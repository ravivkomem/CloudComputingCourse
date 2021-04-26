/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import SingleCar from './SingleCar';
//import './Shop.css';

/* Images */
import MaseratiLevanteImg from '../Images/Cars/MaseratiLevante.jpg'

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
      <>
        <h1>Shop</h1>
        <SingleCar id={1} name="Maserati Levante" price={300} img={MaseratiLevanteImg} ></SingleCar>
      </>
    );
  }


}

export default Shop;
