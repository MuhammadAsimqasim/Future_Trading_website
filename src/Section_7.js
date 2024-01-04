import React,{useState} from 'react';
import './Section_7.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Massage from './Assests/massage.png';
import {Formik, useFormik, } from 'formik';
import { signUpSchema } from './Schema/Index';



function Section_7() {

  const initialValues = {
    name:"",
    last_name:"",
    email:"",
    Country:"",
    Interested:"",
    Massage:"",
  }

  const {values,errors, touched,handleBlur,handleChange,handleSubmit , setFieldTouched } = useFormik({

 


    initialValues: initialValues,

    validationSchema:signUpSchema,
    onSubmit:(values,action) => {
      console.log(values);
      // action.resetForm();
     



      const emailbody = `
      name: ${values.name} 
      last_name: ${values.last_name}
      email: ${values.email} 
      Country: ${values.Country}
      Interested: ${values.Interested}
      Massage: ${values.Massage}
      ` ;



      const mailtoLink =`mailto:maq.asimqasim@gmail.com?subject=inquiry&body=${encodeURIComponent(emailbody)}`;


      window.location.href=mailtoLink;


    },
  });



  return (
    <Formik
    onSubmit={handleSubmit}
    validateOnChange={true}>




    <div className='section-7-two'>
<Container>

    <Row className='d-fl'> 
   
        <Col md={6}>
            <div className="section-7-image">
                <img src={Massage} alt=""  className='massage-image'/>
            </div>
        </Col>
        <Col md={6}>
          
            <div className='Inquiry'>
                <h1>Want an Inquiry? </h1>
            </div>
        {/* <Form onSubmit={handleSubmit}> */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail" className='email col-12 col-lg-6 col-md-12 col-sm-12'>
          <Form.Label >First Name*</Form.Label>
          <Form.Control
           name='name'
           type="email"
           id='Email' 
           value={values.name}
           onChange={handleChange}
           onBlur={handleBlur}
           placeholder="First Name" 
           className='placeholder'
           />
           { errors.name && touched.name ? (<p className='form-errors'>{errors.name}</p>) : null}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" className='col-12 col-lg-6 col-md-12 col-sm-12'> 
          <Form.Label className='email '>Last Name*</Form.Label>
          <Form.Control
           value={values.last_name}
           onChange={handleChange}
           onBlur={handleBlur}
          //  onBlur={ () => setFieldTouched( 'last_name' , true)}
           name='last_name'
           type="last_name"
           id='last_name'
           placeholder="Last Name"
           className='placeholder'
             />
             { errors.last_name && touched.last_name ? (<p className='form-errors'>{errors.last_name}</p>) : null}
            
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='email'>Your Email*</Form.Label>
        <Form.Control 
        name='email'
        id='Your Email'
        placeholder="Enter your email" 
        className='placeholder'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
           { errors.email && touched.email ? (<p className='form-errors'>{errors.email}</p>) : null}
      </Form.Group>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridState" className='col-12 col-md-6 col-sm-12'>
          <Form.Label className='email'>Country*</Form.Label>
          <Form.Select 
          name='Country'
          id='Country'
          defaultValue="Choose..."
          className='placeholder'
           value={values.Country}
           onChange={handleChange}
           onBlur={handleBlur}>
             <option value="" selected>select Country</option>
            <option> pakistan</option>
            <option>India</option>
          </Form.Select>
            { errors.Country && touched.Country ? (<p className='form-errors'>{errors.Country}</p>) : null}
        </Form.Group>



        <Form.Group as={Col} controlId="formGridState" className='col-12 col-md-6 col-sm-12'>
          <Form.Label  className='email'>Interested In*</Form.Label>
          <Form.Select
          id='Interested In'
          name='Interested'
          defaultValue="Choose..."
          className='placeholder'
           value={values.Interested}
           onChange={handleChange}
           onBlur={handleBlur}>
             
            <option>Discord</option>
            <option>abcd</option>
            <option>efgh</option>
            <option>ijkl</option>
            <option>wxyz</option>

          </Form.Select>
            { errors.Interested && touched.Interested ? (<p className='form-errors'>{errors.Interested}</p>) : null}
        </Form.Group>
        <label className='massage-lable'>Massage</label>
        <textarea
           value={values.Massage}
           onChange={handleChange}
           onBlur={handleBlur}
          //  onBlur={ () => setfe}
        name='Massage'
        id='Massage'
        className='massage-box'
        placeholder='Write message here...'>

        </textarea>
        { errors.Massage && touched.Massage ? (<p className='form-errors'>{errors.Massage}</p>) : null}

      </Row>

          <div class="section-7-btn">
            <a href="" onClick={handleSubmit}>Submit</a>
          </div>
    {/* </Form> */}
 
        </Col>
        
        
    </Row>
</Container>
</div>
 </Formik>
  );
}

export default Section_7
