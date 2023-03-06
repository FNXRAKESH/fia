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
      <>
        <div id="header" className="container">
          <div id="title" className="row pt-5">
            <div className="col-md-6">
              <h5 id="top">Empower your business!</h5>
              <h1 className="heading py-3">
                The Complete Salesforce Based Lending Solution
              </h1>
              <p>
                At Financial Information Automation (FIA) Technologies, We build
                modern Salesforce based workflows that save time, make lending
                efficient, and create satisfied borrowers.
              </p>
              <div className="d-none d-lg-block">
                <div className="points row flex-wrap justify-content-between mt-5 mb-3">
                  <div className="col-6 d-flex align-items-center">
                    <span>
                      <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                    </span>
                    <p className="m-0 ps-3">
                      Simplify Customer Journey
                    </p>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span>
                      <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                    </span>
                    <p className="m-0 ps-3">
                      One platform for everything
                    </p>
                  </div>
                </div>
                <div className="points row flex-wrap justify-content-between mb-5">
                  <div className="col-6 d-flex align-items-center">
                    <span>
                      <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                    </span>
                    <p className="m-0 ps-3">Modular in design</p>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <span>
                      <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                    </span>
                    <p className="m-0 ps-3">Ease of integration</p>
                  </div>
                </div>
                <div className=" d-flex mb-5">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#demoModal"
                    type="button"
                    className="btn btn-success btnFill me-4"
                  >
                    Book a Demo
                  </button>
                  <button
                    type="button"
                    className="btn text-success"
                    onClick={() => navigate('mca')}
                  >
                    Learn More
                    <span className="ms-2">
                      <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                    </span>
                  </button>
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
                <p className="m-0 ps-3">
                  One platform for everything
                </p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Modular in design</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Ease of integration</p>
              </div>
            </div>
            <div className=" d-flex mb-5 justify-content-center">
              <button type="button" className="btn btn-success btnFill me-4">
                Book a Demo
              </button>
              <button
                type="button"
                className="btn text-success"
                onClick={() => navigate('mca')}
              >
                Learn More
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                </span>
              </button>
              {/* <div className='btnOutline ms-3'><button type='button' className='btn btn-outline-success' onClick={()=>navigate('services')}>Why choose?</button></div> */}
            </div>
          </div>
        </div>
        <div className="icons py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 divider">
                <div className="d-flex align-items-center ">
                  <img src={reward} alt="" className="m-0" />
                  <p className="m-0 ps-3 fw-bold">
                    Dedicated to delivering excellence
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 divider">
                <div className="d-flex align-items-center ">
                  <img src={refresh} alt="" />
                  <p className="m-0 ps-3 fw-bold">
                    Striving for constant updates
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 divider">
                <div className="d-flex align-items-center ">
                  <img src={lightbulb} alt="" />
                  <p className="m-0 ps-3 fw-bold">
                    Constantly evolving to meet your needs
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="d-flex align-items-center">
                  <img src={system} alt="" />
                  <p className="m-0 ps-3  fw-bold">
                    Staying at the forefront of your industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default Header