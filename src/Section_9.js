import React from 'react';
import './Section_9.css';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import FooterLogo from './Assests/Logo.png';
import {Formik, useFormik, } from 'formik';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { mail } from './Schema/Index';

import { faFacebookF ,faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Section_9() {

    const initialValues = {
        email:"",

      }

      
      const { values,errors, touched,handleBlur,handleChange,handleSubmit , setFieldTouched } = useFormik({

        initialValues: initialValues,
        validationSchema:mail,
        onSubmit:(values) => {
        console.log(values)


        const emailbody = `
        email: ${values.email} 

        ` ;
  
  
  
        const mailtoLink =`mailto:maq.asimqasim@gmail.com?subject=subscribe&body=${encodeURIComponent(emailbody)}`;
  
  
        window.location.href=mailtoLink;

        }
    });




  return (

    <>
    
    <div className="sub-footer">
<Container>
    <Row>
       
        <Col lg={6}>
            <div className="footer-logo">
                <img src={FooterLogo} alt="" className='main-logo'/>
                <div className='parent-link'>
                <div className='facebook'>
                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF}  style={{color: "#000000",}} /></a>
                </div>
                <div className='facebook'>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}  style={{color: "#000000",}} /></a>
                </div>
                <div className='facebook'>
                <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter}  style={{color: "#000000",}} /></a>
                </div>
                </div>
            </div>
        </Col>
        <Col lg={2}>
            <div className='sub-footer-lable'>
            <ul>
                <li><h4>Community</h4></li>
                <li className='mt-2'><a href="#">Discord</a></li>
                <li><a href="#">Software</a></li>
            </ul>

            </div>
        </Col>
    <Formik>

        <Col lg={4}>
        <div className='sub-footer-lable'>
            <ul>
                <li><h4>Subscribe to Newsletter</h4></li>
                <li><p>Sign up today for our exclusive newsletter giving helpful knowledge, tips, and more for your trading journey.</p></li>
                <li>
                <InputGroup className="mb-3">
                <Form.Control 
                placeholder="Email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='sub-footer-input'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                           
                <Button className='input-button' onClick={handleSubmit}>Subscribe</Button>

                </InputGroup>
                
                </li>
                { errors.email && touched.email ? (<p className='mail-errors'>{errors.email}</p>) : null}
            </ul>

            </div>
        </Col>
</Formik>
       
    </Row>
</Container>
</div>
<div className='footer-top'>
<Container>
    <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
        <div className='footer'>
            <p className='m-0'>© 2023.All Rights Reserved</p>
    </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
        <div className="foter-main">
            <p> <a href="#"> Terms & Conditions</a></p>
            <span className='sub'>•</span>
            <p> <a href="#">Privacy Policy</a> </p>
        </div>
        </Col>
    </Row>
</Container>
</div>
</>
  )
}

export default Section_9
