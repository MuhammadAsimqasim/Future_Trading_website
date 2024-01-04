import React from 'react';
import './Section_3.css';
import { Col, Container, Row } from 'react-bootstrap';
import CheckIcon from './Assests/check.png';
import Trade from './Assests/Trade.png';
import Coin from './Assests/coin-Big.png';

function Section_3() {
  return (
    <div className="section-3-containt">
<Container>
    <Row>
    <div className='section-3-heading'>
            <h2>Prosperity Sniper Software</h2>
            <p>Our personal software & platform with all the necessary tools you need to become a profitable trader.</p>
        </div>
    </Row>
    <Row>

        <Col md={6}>
            <div className='price mt-5'>
                <h1>$7,799 USD</h1>
                <div className="rightside-icon">
                    <img src={CheckIcon} alt=""  className='Check-icon'/>
                    <div className="ridesidecontaint">
                        <p>Laptop included </p>
                        
                    </div>
                </div>

                <div className="rightside-icon">
                    <img src={CheckIcon} alt=""  className='Check-icon'/>
                    <div className="ridesidecontaint">
                        <p>Custom coded onto your ninja trader platform</p>
                        
                    </div>
                </div>

                <div className="rightside-icon">
                    <img src={CheckIcon} alt=""  className='Check-icon'/>
                    <div className="ridesidecontaint">
                        <p>3 Month one-to-one mentorship to educate you on futures trading</p>
                        
                    </div>
                </div>

                <div className="rightside-icon">
                    <img src={CheckIcon} alt=""  className='Check-icon'/>
                    <div className="ridesidecontaint">
                        <p>Access to the premium discord for 3 months (signals)</p>
                        
                    </div>
                </div>

                <div className="rightside-icon">
                    <img src={CheckIcon} alt=""  className='Check-icon'/>
                    <div className="ridesidecontaint">
                        <p>Psychology sessions with our 6 figure coaches</p>
                        
                    </div>
                </div>

                <button className='button-section-2'>Learn More</button>
            </div>

        </Col>
        <Col md={6}>
            <div className='trade-image'>
                <img src={Trade} alt="" className='trade-left-image'/>
                <img src={Coin} alt="" className='section-3-coin'/>
            </div>
        </Col>
    </Row>
</Container>
</div>
  )
}

export default Section_3
