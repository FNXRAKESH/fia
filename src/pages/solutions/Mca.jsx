import { faArrowDown, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css';
import bg from '/assets/solutions/mca.png';
import s1 from '/assets/solutions/s1.png';
import s2 from '/assets/solutions/s2.png';
import s3 from '/assets/solutions/s3.png';
import s4 from '/assets/solutions/s4.png';
import s5 from '/assets/solutions/s5.png';
import service from '/assets/landing/service.png';
import support from '/assets/landing/support.png';
import fa from '/assets/solutions/fa.png';
import rt from '/assets/solutions/rt.png';
import analysisIcon from '/assets/solutions/analysis.png';
import sc from '/assets/solutions/sc.png';
import ncu from '/assets/solutions/ncu.png';
import fd from '/assets/solutions/fd.png';

const Mca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="mca">
      <div className="bg pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h6>Effortless Lending Operations</h6>
              <h1>
                Revolutionizing Lending Operations with Small Business Lending
                SaaS Solutions
              </h1>
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
              Streamlining and Automating Lending Operations with the Power of
              the Cloud: Unleashing Improved Efficiency and Increased
              Productivity for Businesses
            </h1>

            <button type="button" className="btn text-success p-0 mb-5">
              Read more about Small Business Lending in our blog
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
              </span>
            </button>
          </div>
          <div className="col-md-6">
            <p>
              Our Small Business Lending solutions can be particularly
              beneficial for small to medium-sized businesses and start-ups that
              are looking to automate their lending operations without investing
              in expensive on-premises software or IT infrastructure. This
              solution also helps businesses to reduce operational costs,
              improve their lending decision-making, and increase their customer
              engagement.
            </p>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="invFactSteps">
          <h1 className="pb-5">
            <span>Key Features</span> of Small Business Lending Solution
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key1 px-3 py-5">
              <div className="imgContainer">
                <img src={fa} alt="solutions" />
              </div>
              <h4 className="py-3">Fully Automated</h4>
              <p className="m-0">
                Automated loan application and approval process, such as credit
                scoring, underwriting, and more.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key2 px-3 py-5">
              <div className="imgContainer">
                <img src={rt} alt="solutions" />
              </div>
              <h4 className="py-3">Real-time</h4>
              <p className="m-0">
                Real-time visibility into lending operations, such as loan
                balances, payments, and delinquencies.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key3 px-3 py-5">
              <div className="imgContainer">
                <img src={analysisIcon} alt="solutions" />
              </div>
              <h4 className="py-3">Analysis</h4>
              <p className="m-0">
                The ability to track and analyze loan performance, such as
                default rates and ROI
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key4 px-3 py-5">
              <div className="imgContainer">
                <img src={sc} alt="solutions" />
              </div>
              <h4 className="py-3">Scalability</h4>
              <p className="m-0">
                Scalability and flexibility, as the solutions can be accessed
                from anywhere on the go.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key5 px-3 py-5">
              <div className="imgContainer">
                <img src={ncu} alt="solutions" />
              </div>
              <h4 className="py-3">No Cost Upgrades</h4>
              <p className="m-0">
                The ability to update and upgrade the system without incurring
                additional costs.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-strech">
            <div className="keys key6 px-3 py-5">
              <div className="imgContainer">
                <img src={fd} alt="solutions" />
              </div>
              <h4 className="py-3">Funding Dashboard</h4>
              <p className="m-0">
                Provides you with all the data like amount requested, maximum
                approval amount, terms etc.
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row mt-5 align-items-center ">
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={s1} alt="bc" className="img-fluid" />
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-flex justify-content-center flex-column">
            <h2>Digital Portal</h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s1} alt="bc" className="img-fluid" />
            </div>
            <p>
              A digital portal for a lending solution is an online platform that
              enables borrowers to apply for loans, submit documentation, and
              track their application status.
            </p>
            <hr />
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Custom Branding</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Seamless Access</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Secure Login</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Real- time Tracking</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Seamless Uploads</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Repayment Management</p>
              </div>
            </div>
          </div>
        </div>
        <div id="mcaOrigination" className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <h2>Small Business Lending Origination</h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s2} alt="bc" className="img-fluid" />
            </div>
            <p>
              Provides you the most efficient and huge working space. It is
              designed especially for Small Lending Companies. It is built to
              make your jobs a lot easier with Automated verifications of the
              Applicant (Business) and Co-Applicant (Owners) which reduces a lot
              of labour work and the product also offer Document verification
              with Third party Integration and with in-built Calculations for
              offers to the Customer. 
            </p>
            <hr />
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Flexible Rules</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Integrated Partners</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Party verification</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Document Management</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Pricing and Offers</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Task Generation</p>
              </div>
            </div>
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
            <h2>Credit Underwriting</h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s3} alt="bc" className="img-fluid" />
            </div>
            <p>
              Small Business Lending credit underwriting has been digitized with
              the use of software for analyzing financial information and credit
              reports, leading to faster approval times and more consistent
              decision making. Borrowers can also submit their application
              online, making the process more convenient and efficient.
              Underwriting can be done by both humans and software, with the
              latter becoming more prevalent in recent years.
            </p>
            <hr />
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Credit Assessment</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Income Verification</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Collateral Review</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Risk assessment</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Auto Underwriting</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Compliance Checking</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <h2>Small Business Lending servicing</h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s4} alt="bc" className="img-fluid" />
            </div>
            <p>
              Small Business Lending servicing is a process that uses digital
              tools and technologies to manage and administer a Small Business
              Lending loan after it has been disbursed. The process includes
              tasks such as collecting payments, monitoring the borrower's
              account, and providing customer service.
            </p>
            <hr />
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Small Business Lending Performance</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Payment Tracking</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Loan Status Access</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Auto Billing</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Service Integration</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Financial Reports</p>
              </div>
            </div>
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
            <h2>Small Business Lending Collections</h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s5} alt="bc" className="img-fluid" />
            </div>
            <p>
              The use of digital tools and technologies can improve the
              efficiency and effectiveness of the Small Business Lending
              collections process. This can include automation of tasks and the
              use of a secure and user-friendly online platform for borrowers to
              access and make payments, view their account status, and
              communicate with the lender.
            </p>
            <hr />
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Payment Reminders</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Delinquency Management</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-3">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">AI Risk Mitigation</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Payments Tracking</p>
              </div>
            </div>
            <div className="points row flex-wrap justify-content-between mb-5">
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">User Friendly platform</p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <span>
                  <FontAwesomeIcon icon={faCheck} color="#2B9348" />
                </span>
                <p className="m-0 ps-3">Account monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequestCall title="Transformative Small Business Lending with Cloud-Based Solutions" />
      <Faq />
    </div>
  );
};

export default Mca;
