import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Section_2.css';
import Watch from './Assests/watch.png';
import Coin from './Assests/coin-Big.png';
import BigIcon from './Assests/big-icon.png';
import BigIcon1 from './Assests/big-icon-2.png';
import BigIcon2 from './Assests/big-icon-3.png';


function Section_2() {
  return (
    <div className="section-2-containt">
        <Container>
            <Row>
            <div className='section-2-heading'>
                <h2>The Power of Online Training</h2>
        </div>
            </Row>
    <Row>

        <Col md={6}>
            <div className='lestside-image'>
                <img src={Watch} alt="" className='watch-image'/>
                <img src={Coin} alt="" className='leftside-coin'/>
                <img src={Coin} alt="" className='small-coin'/>
            </div>
        </Col>
        <Col md={6}>
            <div className='rideside mt-5'>
                <div className="rideside-icon">
                    <img src={BigIcon} alt=""  className='bigicon1'/>
                    <div className="ridesidecontaint">
                        <h1>Personalized Experience</h1>
                        <p>Trading is an individual journey, that for some, may be a new venture.
                         We want to tailor your trading journey to fit around your current lifestyle. </p>
                        
                    </div>
                </div>

                <div className='rideside-one'>
                <div className="rideside-icon">
                    <img src={BigIcon1} alt=""  className='bigicon1'/>
                    <div className="ridesidecontaint">
                        <h1>Ongoing Support</h1>
                        <p>Whether you’re a brand new trader wanting to learn, 
                            or an experienced veteran wanting to develop existing skills, with PFT, you’re gaining access to a whole community.  </p>
                        
                    </div>
                </div>
                </div>

                <div className='rideside-one'>
                <div className="rideside-icon">
                    <img src={BigIcon2} alt=""  className='bigicon1'/>
                    <div className="ridesidecontaint">
                        <h1>Experienced Coaches</h1>
                        <p>With over 10 years combined experience, our coaches are dedicated to help you build a skillset that you can carry with you for life.  </p>
                        
                    </div>
                </div>
                </div>

            </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Section_2
