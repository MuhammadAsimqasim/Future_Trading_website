import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Section_1.css';
import {Row,Col, Container} from 'react-bootstrap';
import Rideside_image from './Assests/section-1-rideside-image.png';
import Coin from './Assests/coin-Big.png';

function Section_1() {
  return ( 
    <div className='rightside-containt'>
    <Container>
    <Row>
        <Col md={6}>
        <div className='rightside-Heading mt-5'>
            <h4>PROSPERITY FUTURE TRADING</h4>
            <h3>Building Profitable</h3>
            <h1>Futures Traders</h1>
            <p>Your personalized community for trading futures. We hold your hand every step of the way,
             no questions go unanswered. Our program has helped many traders with entry and exit strategies in these volatile markets.</p>
             <button className='button-section-1'>Get Started</button>
        </div>
        </Col>
        <Col md={6}>
        <div className='section-1-rideside-image'>
            <img src={Rideside_image} alt="" className='rideside-image'/>
            <img src={Coin} alt="" className='coin-image' />
            <img src={Coin} alt="" className='small-coin-image'/>
            <img src={Coin} alt="" className='small-coin-image-1'/>
        </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Section_1
