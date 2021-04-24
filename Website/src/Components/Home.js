/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Card from "react-bootstrap/Card";
//import './Home.css';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class Home extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }

  render() {
    return (
      <div>
          <center>
            <Card style={{width: '40rem' , marginTop: '3rem', background: 'rgba(252, 252, 252, 0.6)'}}>
              <Card.Body>
                <Card.Text >
                  <h1><b>Welcome to Car4U</b></h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </center>
        </div>
    );
  }


}

export default Home;
