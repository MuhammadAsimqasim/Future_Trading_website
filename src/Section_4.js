import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Section_4.css';
import CheckIcon from './Assests/check.png';
import Dimond from './Assests/dimond.png'
function Section_4() {
  return (
    <div className="section-4-containt">
   <Container>
    <Row>
    <div className='section-4-heading'>
            <h2>Our<span className='trading'>Trading</span>Community</h2>
            <p>Our personal software & platform with all the necessary tools you need to become a profitable trader.</p>
        </div>
    </Row>
    <Row>

    <Col lg={4}>
        <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
            <div class="Monthly mt-5">
                <div class="daimond-heading">
                    <div class="daimond">
                        <img src={Dimond} class="img-fluid" alt=""/>
                    </div>
                    <div class="heading">
                        <h2 class="m-0">Weekly Subscription</h2>
                    </div>
                </div>
                <div class="mothly-value">
                    <h4 class="m-0"><span class="value">$300 </span> / Month</h4>
                </div>
                <div class="monthly-content">
                    <div class="icon-content">
                        <div class="icon-mon">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">2 weeks FREE with first month subscription!</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">Access to premium discord server (signals)</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 Month mentorship included</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 single psychology session included</p>
                        </div>
                    </div>
                    <div class="monthly-btn">
                        <a href="#">Join Now</a>
                    </div>
                </div>
            </div>
            </div>

    </Col>
    <Col lg={4}>
    <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
    <div class="Monthly box mt-5">
                <div class="daimond-heading">
                    <div class="daimond">
                        <img src={Dimond} class="img-fluid" alt=""/>
                    </div>
                    <div class="heading-2">
                        <h2 class="m-0">Monthly Subscription</h2>
                    </div>
                </div>
                <div class="mothly-value">
                    <h4 class="m-0"><span class="value">$295 </span> / Month</h4>
                </div>
                <div class="monthly-content">
                    <div class="icon-content">
                        <div class="icon-mon">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">2 weeks FREE with first month subscription!</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">Access to premium discord server (signals)</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 Month mentorship included</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 single psychology session included</p>
                        </div>
                    </div>
                    {/* <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">Weekly education sessions (Monday/Wednesday)</p>
                        </div>
                    </div> */}
                    {/* <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">Prosperity Sniper Software preview session</p>
                        </div>
                    </div> */}
                    <div class="monthly-btn">
                        <a href="#">Join Now</a>
                    </div>
                </div>
            </div>
            </div>
    </Col>
    <Col lg={4}>
    <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
    <div class="Monthly mt-5">
                <div class="daimond-heading">
                    <div class="daimond">
                        <img src={Dimond} class="img-fluid" alt=""/>
                    </div>
                    <div class="heading">
                        <h2 class="m-0">Yearly Subscription</h2>
                    </div>
                </div>
                <div class="mothly-value">
                    <h4 class="m-0"><span class="value">$300 </span> / Month</h4>
                </div>
                <div class="monthly-content">
                    <div class="icon-content">
                        <div class="icon-mon">
                            <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">2 weeks FREE with first month subscription!</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">Access to premium discord server (signals)</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 Month mentorship included</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <img src={CheckIcon} alt="" />
                        </div>
                        <div class="contnt">
                            <p class="m-0">1 single psychology session included</p>
                        </div>
                    </div>
                    <div class="monthly-btn">
                        <a href="#">Join Now</a>
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

export default Section_4
