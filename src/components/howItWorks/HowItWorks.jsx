import React from 'react';
import './HowItWorks.css'
import img1 from '/assets/howitworks.png'
import ph1 from '/assets/service/sp.png'
import ph2 from '/assets/service/da.png'
import ph3 from '/assets/service/si.png'
import ph4 from '/assets/service/so.png'
import ph5 from '/assets/service/ark.png'
import ph6 from '/assets/service/sc.png'
import ph7 from '/assets/service/pa.png'
import ph8 from '/assets/service/rc.png'
import email from '/assets/email.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faList } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    return (<div id='howItWorks' className='pb-5'>
            <h1 className='p-5 pt-0'>Here's how it<br className='d-none d-md-block'/> all comes together</h1>
                
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-6'>
                        <h2 className='title'>01. MCA Origination</h2>
                    <p className='py-3'><b>Simplifying the Mortgage Journey:</b> Our Process Takes Customers Through Pre-Qualification, Loan Application, Application Processing, Underwriting, Credit Decisioning, Quality Check, and Loan Funding.</p>
                    <div className='curve d-block d-lg-none mb-3'>
                        <img src={img1} className='img-fluid ' alt=''/>
                    </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='step stepOne'>
                                    <div className='ph'>
                                        <img src={ph1} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Streamlined Process</h5>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='step stepOne'>
                                <div className='ph'>
                                    <img src={ph2} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Data Accuracy</h5>
                                </div>
                            </div>
                    </div> 
                    <div className='row'>
                            <div className='col-md-6'>
                                <div className='step stepOne'>
                                <div className='ph'>
                                    <img src={ph3} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>System Integration</h5>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='step stepOne'>
                                <div className='ph'>
                                    <img src={ph4} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Scalable Options</h5>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className='col-lg-6 curve d-none d-lg-block'>
                        <img src={img1} className='img-fluid ' alt=''/>
                    </div>
                </div>
            <div className='row py-5'>
            <div className='col-lg-6 d-none d-lg-block'>
                        <img src={img1} className='img-fluid ' alt=''/>
                    </div>
                <div className='col-lg-6'>
                        <h2 className='title title2'>02.  MCA Collections</h2>
                        <p className='py-3'>Our process is designed to <b>ensure that the loan process is effectively managed</b> from the time funds are distributed to the borrower until the credit is settled off</p>
                     <div className='d-block d-lg-none mb-3'>
                        <img src={img1} className='img-fluid ' alt=''/>
                    </div>   
                    <div className='row'>
                            <div className='col-md-6'>
                                <div className='step stepTwo'>
                                <div className='ph'>
                                    <img src={ph5} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Accurate Record-Keeping</h5>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='step stepTwo'>
                                <div className='ph'>
                                    <img src={ph6} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Streamlined collections</h5>
                                </div>
                            </div>
                    </div> 
                    <div className='row'>
                            <div className='col-md-6'>
                                <div className='step stepTwo'>
                                <div className='ph'>
                                    <img src={ph7} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Processing Automation</h5>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='step stepTwo'>
                                <div className='ph'>
                                    <img src={ph8} className='img-fluid ' alt=''/>
                                    </div>
                                    <h5>Regulatory compliance</h5>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
            </div>         
            {/* <div id='questions' className='mt-5 p-5 row align-items-center justify-content-center'>
                <div className='col-md-3'>
                    <h2>Still have<br /> some doubts?</h2>
                </div>
                <div className='col-md-6'>
                    <p className='px-5'>Our process is designed to <b>ensure that the loan process is effectively managed</b></p>
                </div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column justify-content-between flex-grow-1'>
                    <div className='btnGroup'>
                            <button type='button' className='btn btn-outline-info btnFill'><span>Browse FAQs</span><FontAwesomeIcon icon={faList} /></button>
                    </div>
                        <div className='btnOutline'><button type='button' className='btn btn-outline-info ' ><span>Contact Us</span><FontAwesomeIcon icon={faEnvelopeCircleCheck} /></button></div>
                </div>
                </div>
        </div> */}
        </div>
    </div> );
}
 
export default HowItWorks;

