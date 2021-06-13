/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { Form } from 'react-bootstrap';
import {carsData} from '../Data/CarsData';

//import './Home.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Calendar from 'react-calendar'
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';


//import datepicker from './DatePicker'

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */

class Insurance extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
    this.currentPrice = 0;
    
    this.state={
      startDate : null,
      endDate : null
    }
    
 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log("Option Selected!!");
    
    this.currentPrice = e.target.value;
    console.log("Price is: " + this.currentPrice)
    this.forceUpdate();
    // this.setState({ price: e.target.value });
  }

  render() {
    return (
      
     <div className = "insurance">
        <div className = "InsuranceTitle"> 
        <h1>Car insurance</h1>
       
     <div className = "checkbox">
     
        
         <Form>
        <Row>
          <Col>
          <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select your car</Form.Label>
          <Form.Control as="select" custom onChange={this.handleChange}>
          {
            carsData.map((car, key) => {
              return (
                <option value={car.price}>{car.name}</option>
              );
            })
          }
         {/* <option>Maserati Levante</option>
         <option>Pagani Huayra Roadster</option>
         <option>Merceds Benz S Class</option>
         <option>Rolls Royce Phantom</option>
         <option>Bugatti Chiron</option>
         <option>Ferrari SF90</option>
         <option>Tesla Model 3</option> */}
         </Form.Control>

         </Form.Group>
         </Col>
         <Col>
        <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Kind of purchse</Form.Label>
         <Form.Control as="select" custom>
         <option>Rent</option>
         <option>Buy</option>
        
         </Form.Control>

         </Form.Group>
         </Col>
         <Col>
         
<div class = "Radio">
         <h6>Kind of Insurance</h6>
         {['checkbox'].map((type) => (
    <div key={`inline-${type}`} >
      <Form.Check inline label="Insurance" name="group1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="Comprehensive insurance" name="group1" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Third party insurance " name="group1" type={type} id={`inline-${type}-3`}/>
      
    </div>
  ))}
  
  
  
  </div>
  </Col>
         <Col>
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

</Col>

  </Row>
  
<div className = "Pricetext">
<Form.Group as={Row} controlId="formPlaintextPrice">
    <Form.Label column sm="5">
      Price
    </Form.Label>
    <Col sm="10">
    
   
 
    {this.currentPrice*0.01*((this.state.endDate-this.state.startDate)/86400000)}
    
     
      
    </Col>
  </Form.Group>
  </div>
        </Form>
        
      
     </div>
      <div className = "Button">
     
     <Link to="/checkout" className="btn btn-primary btn-sm">Purchase</Link>
     </div> 
     
     </div>
     </div>
    );
  }


}

export default Insurance;
