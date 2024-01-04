import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Section_5.css';
import Logo from './Assests/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faVideo ,faEarthAfrica } from '@fortawesome/free-solid-svg-icons'

function Section_5() {

const [value , onChange] =useState( new Date());

const [selectedTimezone, setSelectedTimezone] = useState('Asia/Karachi');
const [currentTime, setCurrentTime] = useState('Loading...');

const timezones = [
  { value: 'Asia/Karachi', label: 'Pakistan Time' },
  { value: 'Indian/Maldives', label: 'Maldives Time' },
];

const updateTime = () => {
  const newTime = new Date().toLocaleString('en-US', { timeZone: selectedTimezone });
  setCurrentTime(newTime);
};

useEffect(() => {
  

  updateTime();
}, [selectedTimezone]);

  return (
    <div className="section-5">
    <div className='calendar-body section-padding d-flex justify-content-center align-items-center'>
    <div className='calendar-main  '>
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                      <div className='col-md-6 col-12 col-sm-12'>
                        <div className='left-side-main'>
                          <div className='container'>
                          <div className='logo-heading'>
                            <div className='pft-logo'>
                            <img src={Logo} alt='logo'/>
                            </div>
                            <div className='heading-pft'>
                              <h5>PFT Admin</h5>
                            </div>
                          </div>
                          <hr />
                          <div className='Prosperity'>
                            <div className='Prosperity-heading'>
                              <h4>Prosperity Trading Meeting</h4>
                            </div>
                            <div className='Prosperity-content'>
                              <div className='icon-content-pro d-flex gap-3'>
                                <div className='icon-pro'>
                                <FontAwesomeIcon icon={faClock} size="sm" style={{color: "#8c8c8c",}} />
                                </div>
                                <div className='pro-content'>
                                  <p>15 mins</p>
                                </div>
                                
                              </div>
                              <div className='icon-content-pro d-flex gap-3'>
                                <div className='icon-pro'>
                                <FontAwesomeIcon icon={faVideo} size="sm" style={{color: "#8c8c8c",}} />
                                </div>
                                <div className='pro-content'>
                                  <p>Video conferencing details provided upon confirmation</p>
                                </div>
                                
                              </div>
                            </div>



                            <div className='pro-btn'>
                              <a href='#' >Cookie Settings</a>
                            </div>


                          </div>
                        </div>
                        </div>
                      </div>
                      <div className='col-md-6 col-12 col-sm-12'> 
                      <div className='rideside-header'>
                  <h4>Select a Date and Time</h4>
                      </div>

                        <Calendar onChange={onChange} value={value} />

                        <div className='rideside-drop d-flex gap-2'>
                        
                               <i><FontAwesomeIcon icon={faEarthAfrica} size="sm" style={{color: "#4b5363",}} /></i>
                                  <select
                                    id="timezone"
                                    value={selectedTimezone}
                                    
                                    onChange={(e) => setSelectedTimezone(e.target.value)}
                                  >
                                    {timezones.map((timezone) => (
                                      <option key={timezone.value} value={timezone.value}>
                                        {timezone.label}
                                        {currentTime}
                                      </option>
                                    ))}
                                  </select>
    
                      </div>
                      </div>
              </div>
          </div>
     </div>
     </div>
     </div>
  )
}

export default Section_5