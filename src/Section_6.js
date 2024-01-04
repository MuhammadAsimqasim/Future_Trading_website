import React from 'react';
import './Section_6.css';
import { Col, Container, Row } from 'react-bootstrap';
import Zaiper from './Assests/zaiper.png';
import Parson from './Assests/parson.png';
import Second_parson from './Assests/second_parson.png'
import Airtable from './Assests/airtable.png';

function Section_6() {
  return (
    <div className="section-6-containt">
    <Container>
        <Row>
            <div className="testimonial">
                <h2 >Testimonail</h2>
            </div>
            <Col lg={6}>
                <div className="testi-section">
                         <div className="testi-container">
                            <div className="testi-card  mt-lg-5 mt-sm-2">

                                <img src={Zaiper} alt="" className='zaiper-image'/>
                                <p>Lorem, ipsum dolor sit amet consectetur recusandae ipsa vitae voluptate eos eum repudiandae  autem.</p>

                                     <div className="test-person">
                                    <img src={Parson} alt="" className='parson-image'/>
                                       <div className="name-person">
                                        <h4>Mike Warren</h4>
                                    <p>Product Manager at Zapier</p>
                                </div>
                         </div>
                            </div>
                         </div>
                </div>
            </Col>

            <Col lg={6}>
                <div className="testi-section">
                         <div className="testi-container">
                            <div className="testi-card  mt-lg-5 mt-sm-2">

                                <img src={Zaiper} alt="" className='zaiper-image'/>
                                <p>Lorem, ipsum dolor sit amet consectetur recusandae ipsa vitae voluptate eos eum repudiandae  autem.</p>

                                     <div className="test-person">
                                    <img src={Second_parson} alt="" className='parson-image'/>
                                       <div className="name-person">
                                        <h4>Adam Smith</h4>
                                        <p>Web Designer at Airtable</p>
                                </div>
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

export default Section_6
