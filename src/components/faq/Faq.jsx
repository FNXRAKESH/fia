import React from 'react';
import './Faq.css'
import hand from '/assets/hand.png'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Faq = () => {
    
  return (
    <div id="faq" className="py-5">
      <div className="container">
       
        <div id="divider" className="my-5"></div>
        <div className="row py-5">
          <div className="col-md-8">
            <h1>Frequently Asked Questions</h1>
            <div className="d-flex align-items-center">
              <p className="pe-3">Have Questions?</p>
              <div className="moreFaqs">
                <p>
                  <small className="pe-2">Browse more FAQ’s</small>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </p>
              </div>
            </div>
            <div className="accordion" id="faqs">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is there a free trial available?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    Yes, you can try us for free for 30 days. If you want, we'll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What else you can help me with?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    Our services include consulting, customization of solutions,
                    feature upgrades, system integrations, and design of
                    graphics and user experiences. In addition to this , we can
                    help you ensure that your product meets quality standards
                    through continuous monitoring and various types of testing
                    such as unit, integration, system, and acceptance testing.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can you help us source vendors for integrating with other
                    external services?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    Yes, we can certainly help you find the best vendors for
                    your business needs. We have a list of vendors that we have
                    worked with in the past or have collaborated with on product
                    development, and we would be happy to provide more
                    information about these options as well.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reach p-5">
              <div className="hand">
                <img src={hand} alt="hand" />
              </div>
              <h4 className="pt-2">Have any Questions?</h4>
              <p>We’re available 24/7</p>

              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    aria-describedby="FullName"
                    placeholder="Full Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="Company"
                    class="form-control"
                    id="Company"
                    aria-describedby="Comapany"
                    placeholder="Company"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="Designation"
                    class="form-control"
                    id="Designation"
                    aria-describedby="Designation"
                    placeholder="Designation"
                  />
                </div>
                <div class="mb-3">
                  <button type="submit" className="btn btn-success">
                    Request a Call Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Faq;
