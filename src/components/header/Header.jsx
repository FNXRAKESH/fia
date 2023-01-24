import React from 'react';
import './Header.css'
import header from '/assets/landing/header.png';
import lightbulb from '/assets/landing/lightbulb.png';
import refresh from '/assets/landing/refresh.png';
import reward from '/assets/landing/reward.png';
import system from '/assets/landing/system.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const navigate = useNavigate()
    return (
      <div id="header" className="container">
        <div id="title" className="row ">
          <div className="col-md-6">
            <h5 id="top">Empower your business!</h5>
            <h1 className="heading py-3">
              Dynamic Small Business Lending Solutions
            </h1>
            <p>
              <small>
                Get Unmatched Support for Your Business with Our MCA Solution.
                Navigate Change and Advance Together with Our Continuous
                Improvement and Partnership.
              </small>
            </p>
            <div className="d-none d-lg-block">
              <div className="points row flex-wrap justify-content-between mt-5 mb-3">
                <div className="col-6 d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                  </span>
                  <p className="m-0 ps-3">Simplify Customer Journey</p>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                  </span>
                  <p className="m-0 ps-3">Manage Loan Process Efficiently</p>
                </div>
              </div>
              <div className="points row flex-wrap justify-content-between mb-5">
                <div className="col-6 d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                  </span>
                  <p className="m-0 ps-3">Post Deployment Support</p>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                  </span>
                  <p className="m-0 ps-3">Third-party Integrations</p>
                </div>
              </div>
              <div className=" d-flex mb-5">
                <button type="button" className="btn btn-success btnFill me-4">
                  Book a Demo
                </button>
                <button type="button" className="btn text-success">
                  Learn More
                  <span className="ms-2">
                    <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                  </span>
                </button>
                {/* <div className='btnOutline ms-3'><button type='button' className='btn btn-outline-success' onClick={()=>navigate('services')}>Why choose?</button></div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="headerImg">
              <img src={header} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="d-md-block d-lg-none w-100">
          <div className="points row flex-wrap justify-content-between mt-5 mb-3">
            <div className="col-6 d-flex align-items-center">
              <span>
                <FontAwesomeIcon icon={faCheck} color="#2B9348" />
              </span>
              <p className="m-0 ps-3">Simplify Customer Journey</p>
            </div>
            <div className="col-6 d-flex align-items-center">
              <span>
                <FontAwesomeIcon icon={faCheck} color="#2B9348" />
              </span>
              <p className="m-0 ps-3">Manage Loan Process Efficiently</p>
            </div>
          </div>
          <div className="points row flex-wrap justify-content-between mb-5">
            <div className="col-6 d-flex align-items-center">
              <span>
                <FontAwesomeIcon icon={faCheck} color="#2B9348" />
              </span>
              <p className="m-0 ps-3">Post Deployment Support</p>
            </div>
            <div className="col-6 d-flex align-items-center">
              <span>
                <FontAwesomeIcon icon={faCheck} color="#2B9348" />
              </span>
              <p className="m-0 ps-3">Third-party Integrations</p>
            </div>
          </div>
          <div className=" d-flex mb-5 justify-content-center">
            <button type="button" className="btn btn-success btnFill me-4">
              Book a Demo
            </button>
            <button type="button" className="btn text-success">
              Learn More
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
              </span>
            </button>
            {/* <div className='btnOutline ms-3'><button type='button' className='btn btn-outline-success' onClick={()=>navigate('services')}>Why choose?</button></div> */}
          </div>
        </div>
        {/* <h5 className='pt-5 pb-3'>Trusted by <u><span className='gradient'>120+ businesses worldwide</span></u></h5>
           <div className='logos d-flex justify-content-around w-100 flex-wrap'>
                <img src={logo1} alt='logo' />
                <img src={logo2} alt='logo' />
                <img src={logo3} alt='logo' />
                <img src={logo4} alt='logo' />
                <img src={logo5} alt='logo' />
            </div> */}
      </div>
    );
}


export default Header