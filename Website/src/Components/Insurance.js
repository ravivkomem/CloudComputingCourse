/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { Form } from 'react-bootstrap';
import {carsData} from '../Data/CarsData';

import Row from 'react-bootstrap/Row'
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Link} from 'react-router-dom';



/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */

class Insurance extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
    this.currentPrice = carsData[0].price;

    this.state={
      startDate : moment(),
      endDate : moment(),
      requiredInsurance : false,
      extendedInsurance : false,
      thirdSideInsurance : false,
    }
    
 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log("Option Selected!!");
    
    this.currentPrice = e.target.value;
    this.forceUpdate();
  }

  getFullPrice = () => {
      var price = 0;
      if (this.state.requiredInsurance === true)
      {
        price += 10000;
      }

      if (this.state.extendedInsurance === true)
      {
        price += this.currentPrice * 0.005 * (this.state.endDate.diff(this.state.startDate, 'days') + 1);
      }

      if (this.state.thirdSideInsurance === true)
      {
        price += this.currentPrice * 0.01 * (this.state.endDate.diff(this.state.startDate, 'days') + 1);
      }

      return price;
  }

  render() {
    return (
     <div className = "insurance">
      <h1>Car insurance</h1>
      <Form>
        <Row>
          <h6>Select your car</h6>
        </Row>
        <Row>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom onChange={this.handleChange}>
            {
              carsData.map((car, key) => {
                return (
                  <option value={car.price} key={key}>{car.name}</option>
                );
              })
            }
            </Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <h6>Kind of Insurance</h6>
        </Row>
        <Row>
            
        <div className="checkbox">
          <div key='checkbox' >
            <Form.Check inline label="Required Insurance" name="group1" type='checkbox' id='1' onChange={(e) => {this.setState({requiredInsurance: e.target.checked})}}/>
            <Form.Check inline label="Comprehensive insurance" name="group1" type='checkbox' id='2' onChange={(e) => {this.setState({extendedInsurance: e.target.checked})}}/>
            <Form.Check inline label="Third party insurance " name="group1" type='checkbox' id='3' onChange={(e) => {this.setState({thirdSideInsurance: e.target.checked})}}/>
          </div>
        </div>
        </Row>
        
        <Row>
          {/* Date Selection */}
          <div className = "Date">
            <h6>Duration of insurance</h6>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            /> 
          </div>
        </Row>
          
        <Row>
          <h6>Complete Price</h6>
        </Row>
        <Row>
          <div>
            {this.getFullPrice() === 0 ? "N/A" : this.getFullPrice() + "$"}
          </div>
        </Row>
      </Form>


      <div className = "Button">
        <Link to={this.getFullPrice() === 0 ? "#" : "/checkout/"+this.getFullPrice()+"/insurance"} className="btn btn-primary btn-sm">Purchase</Link>
      </div> 
    </div>
    );
  }


}

export default Insurance;
