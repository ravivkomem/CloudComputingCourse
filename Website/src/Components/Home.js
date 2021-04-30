
  
import React from 'react';
import {Link} from 'react-router-dom';
import Section from './../HOC/Sec';
import bgImage from './../HOC/backGround3.jpg';



const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
          
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
             Car4U - You Are Going To Love It
            </h2>
            <Link to={'/About'}>
                 <button style={{height: 40,
                    width:160,
                    borderRadius:10,
                    fontFamily: 'Helvetica',
                    backgroundColor : "white",
                    color: "black",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20}} > Learn More </button>
            </Link>
            <Link to={'/Contact'}>
                 <button style={{height: 40,
                    width:160,
                    borderRadius:10,
                    fontFamily: 'Helvetica',
                    backgroundColor: "white",
                    color: "black",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20}}> Contact us </button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
