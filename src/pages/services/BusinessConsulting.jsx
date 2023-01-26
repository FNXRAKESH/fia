import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css'
import bg from '/assets/service/bg.png'
import s1 from '/assets/service/s1.png';
import s2 from '/assets/service/s2.png';
import s3 from '/assets/service/s3.png';
import s4 from '/assets/service/s4.png';
import s5 from '/assets/service/s5.png';
const BusinessConsulting = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    return (
      <div id="BusinessConsulting">
        <div className="bg py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <h6>Business Consulting</h6>
                <h1>Expert Financial Consulting for Finance Companies</h1>
              </div>
              <div className="col-6">
                <img src={bg} alt="bc" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pb-3 title">
                Our Team of Industry Experts Offers Professional Guidance and
                Practical Solutions to Help Your Business Achieve Its Goals.
              </h1>
              <button type="button" className="btn text-success p-0 mb-5">
                Learn More
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowDown} color="#2B9348" />
                </span>
              </button>
            </div>
            <div className="col-md-6">
              <p>
                As a business consulting firm, we specialize in providing expert
                guidance and advice on a wide range of lending solutions. We
                work closely with our clients to understand their unique needs
                and goals, and then help them navigate the complex world of
                lending.
              </p>
              <p>
                One of the most important services we offer is helping
                businesses understand the different types of lending available.
                We help businesses navigate the complex world of lending and
                choose the best options for their specific needs and goals.
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s1} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                We <span style={{ color: '#2B9348' }}>Understand</span> that
                your Business is Unique</h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s1} alt="bc" className="img-fluid" />
              </div>
              <p>
                Before providing any advice, we try to gain a deep understanding
                of the client's business, including their products, services,
                target market, and industry. We gather this information through
                research and meetings with the client.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-end d-flex justify-content-center flex-column">
              <h2>
                We will Identify Specific{' '}
                <span style={{ color: '#2B9348' }}>Problem Areas</span>
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s2} alt="bc" className="img-fluid" />
              </div>
              <p>
                Once we understand the client's business, we work with the
                client to identify specific problem areas that need to be
                addressed. This includes issues such as low profitability, poor
                cash flow, or lack of a clear strategy.
              </p>
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s2} alt="bc" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s3} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                We will Develop a Customized{' '}
                <span style={{ color: '#2B9348' }}>Solution</span>
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s3} alt="bc" className="img-fluid" />
              </div>
              <p>
                After identifying the specific problem areas, we develop a
                customized solution that addresses the client's specific needs.
                This includes developing a new business strategy, recommending
                changes to operations, or providing tools and resources to
                improve performance.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-end d-flex justify-content-center flex-column">
              <h2>
                We <span style={{ color: '#2B9348' }}>Communicate</span>{' '}
                Effectively
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s4} alt="bc" className="img-fluid" />
              </div>
              <p>
                We believe in transparent communication of our recommendations
                and the reasoning behind them. We make sure the client
                understands the problem and the proposed solution, and that they
                are on board with the plan.
              </p>
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s4} alt="bc" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s5} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                We Can Be a <span style={{ color: '#2B9348' }}>Supportive</span>{' '}
                Partner
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s5} alt="bc" className="img-fluid" />
              </div>
              <p>
                We strive to be a supportive partner to the client throughout
                the implementation process. We offer guidance and resources to
                help them implement the solution, and are available to answer
                questions and provide additional support as needed.
              </p>
            </div>
          </div>
        </div>
        <RequestCall />
        <Faq />
      </div>
    );
}
 
export default BusinessConsulting;