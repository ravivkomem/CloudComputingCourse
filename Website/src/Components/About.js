/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Layout from '../layout/index';

//import './Home.css';

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class About extends React.Component {

  constructor(props) 
  {
    super(props);
    sessionStorage.clear();
  }
  
  render() {
    return (
    <Layout>
        <article className="entry">
          <div className="container">
            <div className="entry-inner">
              <div className="entry-content">
                <div className="container-sm">
                  <header className="entry-header">
                    <h2 className="entry-title">Who We Are</h2>
                  </header>
  
                  <div className="entry-body">
                    <p>
                    Available 24/7, We offer fast and professional service, for the right price, whenever you need it. We are committed to providing complete customer satisfaction and high-quality service. If for any reason you are not completely satisfied or have any concerns, please contact us and we will make sure to live up to your expectations. If you have any questions, please reach out to us. If you are in need of immediate assistance, call us now!
                    </p>
                    <p>
                    
                    </p>
                    <hr />
                    <p>
                      Our Clip:{' '}
                      <a href="https://www.youtube.com/watch?v=fmiLboUgIfo&ab_channel=TechVision">
                      https://www.youtube.com/watch?v=fmiLboUgIfo&ab_channel=TechVision
                      </a>
                    </p>
                    <hr />
                   
                  </div>
                </div>
              </div>
              <div className="entry-media">
                <img src="https://placehold.it/420x640" alt="" />
              </div>
            </div>
          </div>
        </article>
        </Layout>
     
    );
  }
  

}

export default About;








