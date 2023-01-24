import React from 'react';
import './Offerings.css'

const Offerings = () => {
    return (<div id='offerings' className='container pb-5'>
        <div className='offer'>
             <h1 className='py-5'>FIA MCA Key<br /> Product Offerings</h1>
        <div className='row'>
            <div className='col-md-4 d-flex align-items-strech'>
                <div className='keys key1 px-3 py-5'>
                <h4>MCA Origination</h4>
                <p className='py-3'>We help you attract potential borrowers by <b>providing an easy &amp; reliable experience of application processing.</b></p>
                <button className='btn btn-outline-secondary'>Learn More</button>
                </div>
                </div>
            <div className='col-md-4 d-flex align-items-strech'>
                 <div className='keys key2 px-3 py-5'>
                 <h4>Credit Analysis</h4>
                <p className='py-3'>We analyze a business's creditworthiness and risk level to <b>determine their eligibility for an MCA loan.</b></p>
                <button className='btn btn-outline-secondary'>Learn More</button>
                </div>
                </div>
            <div className='col-md-4 d-flex align-items-strech'>
                 <div className='keys key3 px-3 py-5'>
                 <h4>Integrations</h4>
                <p className='py-3'>We assist you in <b>capturing and leveraging data available through third-party integrations.</b></p>
                <button className='btn btn-outline-secondary'>Learn More</button>
                </div>
                </div>
        </div> 
        <div className='row'>
            <div className='col-md-4 d-flex align-items-strech'>
                 <div className='keys key4 px-3 py-5'>
                <h4>MCA Servicing</h4>
                <p className='py-3'>We help you simplify the process of <b>maintaining regulatory compliance &amp; tracking and reconciling loans.</b></p>
                    <button className='btn btn-outline-secondary'>Learn More</button>
                    </div>
            </div>
            <div className='col-md-4 d-flex align-items-strech'>
                 <div className='keys key5 px-3 py-5'>
                 <h4>Reports</h4>
                <p className='py-3'><b>Track your financial health on a regular basis</b> &amp; take necessary corrective actions if needed through visualisation.</p>
                    <button className='btn btn-outline-secondary'>Learn More</button>
                    </div>
            </div>
            <div className='col-md-4 d-flex align-items-strech'>
                 <div className='keys key6 px-3 py-5'>
                 <h4>Post-deployment Support</h4>
                <p className='py-3'>We provide ongoing support <b>&amp; maintenance post product implementation</b> to ensure robustness.</p>
                <button className='btn btn-outline-secondary'>Learn More</button>
                </div>
                </div>
            </div> 
            </div>
        {/* <h1 className='text-center py-5'>Ready to start growing your business?</h1>
         <div className='d-flex justify-content-center'>
           <div className='btnGroup'>
                            <div className='outline'><span></span></div>
                            <button type='button' className='btnFill'>Start your journey here</button>
                        </div>
        </div> */}
    </div> );
}
 
export default Offerings;