/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
/* Website Pages */
import About from './Components/About';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Payment from './Components/Payment';
import ErrorPage from './Components/ErrorPage';

/* Images */
import backgroundImg from './Images/background.jpg'

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class App extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/payment" component={Payment} />
          <Route path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }


}

export default App;
