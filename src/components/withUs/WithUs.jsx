import React from 'react';
import './WithUs.css'
import img1 from '/assets/howitworks.png'

const WithUs = () => {
    return (<div id='withUs' className='pt-5'>
        
        <div className='container pb-5'>
            <h1 className='pt-5'>Why go with us?</h1>
            <div id='glow' className='row py-5 mb-5 align-items-center'>
                <div className='col-md-6 image'>
                    <img src={img1} alt='' className='img-fluid'/>
                </div>
                <div className='col-md-6 description '>
                    <div className='circle'></div>
                    <div className='desc'>
                        <h6>Business Consulting</h6>
                        <p>Expertise by Your Side: Our Team of Industry Experts Offers Professional Guidance and Practical Solutions to Help Your Business Achieve Its Goals</p>
                    </div>
                    <div className='desc my-2'>
                        <h6>Solution Implementation</h6>
                        <p>Transform Your Business: Our Solutions are Designed to Deliver Maximum Impact, and Our Implementation is Seamless and Hassle-Free</p>
                    </div>
                    <div className='desc'>
                        <h6>Maintenance Support</h6>
                        <p>Keeping Your Product at Its Best: We Offer Continuous Maintenance and Enhancements. We Offer Regular Updates to Keep Your System Ahead of the Game</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div> );
}
 
export default WithUs;