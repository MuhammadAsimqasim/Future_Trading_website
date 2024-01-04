import React, { useState } from 'react';
import './Section_8.css';
import { Col, Container, Row } from 'react-bootstrap';
import Rocket from './Assests/rocket.png'


function Section_8() {
    const faqData = [
        { id: 1, question: 'How will the Prosperity sniper software be added to my ninja trader?', answer: 'This FAQ section provides answers to commonly asked questions about our service.' },
        { id: 2, question: 'Do I need the coded software to join the monthly or weekly premium discord?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
        { id: 3, question: 'How do I cancel my subscription?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
        { id: 4, question: 'Can I get a refund for my software or subscription?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
        // Add more FAQ items as needed
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
    <div className='section-8'> 
    <Container>
        <Row>
        <div className='Frequently'>
                <h1>Frequently Asked Questions</h1>
            </div>
        </Row>
            
            <Row>
            <Col md={6}>
            <div className="faq-container mt-lg-5 mt-md-5  mt-sm-3">
      {faqData.map((item) => (
        <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
          <div className="question d-flex justify-content-between">{item.question}
          <div className='plus d-flex '>
            <h3 className='m-0'>+</h3>
          </div>
          </div>
          {activeIndex === item.id && 
          <div className='d-flex justify-content-between'>
          <div className="answer">{item.answer}

           </div>
           <div>
           <h3 className='m-0 mines'>-</h3>
           </div>
           </div>
           }
          <hr className='white-line'/>
        </div>
      ))}
    </div>
            </Col>
            <Col md={6}>
                <div className='section-8-leftside mt-lg-5 mt-md-5 mt-sm-3'>
                    <img src={Rocket} alt="" className='rocket-image'/>
                </div>
            </Col>
            </Row>
            <div className='last-pera mt-lg-5 mt-md-5  mt-sm-5'>
                <p>Disclaimer: We do not guarantee success or profitability. We and our affiliates are not verified or certified professionals. We are not financial advisors. We never give any advice here, only educated and individualized opinions. Our Discord server is intended for educational and entertainment purposes only.</p>
            </div>
            
           
        
    </Container>
    </div>
  )
}

export default Section_8
