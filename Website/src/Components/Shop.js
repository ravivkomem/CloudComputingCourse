/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import {carsData} from '../Data/CarsData';
import SingleCar from './SingleCar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
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
      <center>
        <Container>
          <Row>
          {
            carsData.map((value, key) => {
              return (
              <Col key={value.id}>
                <SingleCar id={value.id} name={value.name} price={value.price} 
                img={value.img} engine={value.engine} maxSpeed={value.maxSpeed}/>
              </Col>
              );
            })
          }
          </Row>
        </Container>
      </center>
    );
  }


}

export default Shop;
