import React from 'react';
import './Faq.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import hand from '/assets/hand.png'
import chat from '/assets/chat.png'
import mail from '/assets/mail.png'
import call from '/assets/call.png'
import { faArrowUpRightFromSquare, faCommentAlt, faCommentDots, faEnvelope, faMailReply, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const listOfData = [
    { id: 1, title: 'Dedicated to delivering excellence' },
    { id: 2, title: 'Striving for constant improvement' },
    { id: 3, title: 'Constantly evolving to meet your needs' },
    { id: 4, title: 'Committed to staying at the forefront of our industry' },
     { id: 1, title: 'Dedicated to delivering excellence' },
    { id: 2, title: 'Striving for constant improvement' },
    { id: 3, title: 'Constantly evolving to meet your needs' },
    {id:4, title:'Committed to staying at the forefront of our industry'}
]

const Faq = () => {
    const [width, setWidth] = useState(0)
    
    const carousel = useRef()
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (<div id='faq' className='py-5'>
   
    
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-5'>
                  <h1 className='title'>What Makes<br /> Us Stand Out</h1>
                </div>
                <div className='col-md-7'>
                     <p className='scroll'>We understand that the <b>business world is constantly changing</b>, and that's why we are <b>dedicated to staying ahead of the curve</b> with our MCA solution. We are committed to <b>continuous improvement</b> and are always looking for ways to <b>enhance our product</b> and services.</p>
                </div>
            </div>
            <div id='curve'></div>
            <motion.div  ref={carousel} className='carousel py-5'>    
                <motion.div drag="x" dragConstraints={{right:0, left:-width}} className='inner-carousel'>
                    <div className='card'>
                            <h5><span>Dedicated</span> to delivering excellence</h5>
                    </div>
                    <div className='card'>
                            <h5>Striving for constant <span>improvement</span></h5>
                    </div>
                    <div className='card'>
                            <h5>Constantly <span>evolving</span> to meet your needs</h5>
                    </div>
                    <div className='card'>
                            <h5><span>Committed</span> to staying at the forefront of our industry</h5>
                    </div>
                     <div className='card'>
                            <h5>Keeping your <span>Product</span> at its best</h5>
                    </div>
                </motion.div>
            </motion.div>
            <div id='divider' className='d-flex justify-content-center my-5'>
                <div className='square'></div>
                <div className='line'></div>
            </div> 
            <div className='row'>
                <div className='col-md-8'>
          <h1>Frequently Asked Questions</h1>
          <div className='d-flex align-items-center'>
            <p className='flex-grow-1'>Have Questions? We’re here to help</p>
            {/* <div>
            <p><small>More FAQs&nbsp;</small>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></p>
            </div> */}
          </div>
                    <div className="accordion" id="faqs">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Is there a free trial available?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqs">
      <div className="accordion-body">
        Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What else you can help me with?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqs">
      <div className="accordion-body">
        Our services include consulting, customization of solutions, feature upgrades, system integrations, and design of graphics and user experiences. In addition to this , we can help you ensure that your product meets quality standards through continuous monitoring and various types of testing such as unit, integration, system, and acceptance testing.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Can you help us source vendors for integrating with other external services?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqs">
      <div className="accordion-body">
       Yes, we can certainly help you find the best vendors for your business needs. We have a list of vendors that we have worked with in the past or have collaborated with on product development, and we would be happy to provide more information about these options as well.
      </div>
    </div>
                        </div>
                          
</div>
                </div>
        <div className='col-md-4'>
          <div className='reach p-5'>
            <div className='hand'>
            <img src={hand} alt='hand'  />
            </div>
            <h4 className='pt-2'>Reach out to us</h4>
            <p >We’re available 24/7</p>
             <div className='d-flex flex-column justify-content-between flex-grow-1'>
                    <div className='btnGroup'>
                <button type='button' className='btnFill btn btn-outline-info'><span>Chat with Us</span><FontAwesomeIcon icon={faCommentAlt} /></button>
                
                    </div>
                    <div className='btnOutline my-3'><button type='button' className='btn btn-outline-info'><span>Send us Email</span><FontAwesomeIcon icon={faEnvelope} /></button></div>
                    <div className='btnOutline'><button type='button' className='btn btn-outline-info'><span>Give us a Call</span><FontAwesomeIcon icon={faPhone} /></button></div>
                </div>
          </div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Faq;
