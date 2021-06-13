/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Website Pages */
import About from './Components/About';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Payment from './Components/Payment';
import Insurance from './Components/Insurance';
import CheckoutForm from './Components/CheckoutForm';
import ErrorPage from './Components/ErrorPage';
/* Components */
import HeaderSection from './Components/HeaderSection';
import FooterSection from './Components/FooterSection';
/* Styles */
import './App.css';
/* Images */
import background from '../src/Images/Cars/back2.jpg'
/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
var sectionStyle = {
  backgroundImage: `url(${background})`
}
class App extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      <div style = {sectionStyle}>
      <>
      
        <HeaderSection></HeaderSection>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/payment" component={Payment} />
          <Route path="/contact" component={Contact} />
          <Route path="/Insurance" component={Insurance} />
          <Route path="/checkout/:price/:name" component={CheckoutForm} />
          <Route component={ErrorPage} />
        </Switch>
        <FooterSection/>
        
      </>
      </div>
    );
  }


}

export default App;
