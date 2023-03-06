import React from 'react';
import './Faq.css';
import hand from '/assets/hand.png';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Faq = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
          'Access-Control-Allow-Credentials': 'true'
        },

        body: JSON.stringify({
          oid: '00D2x000005O1U3',
          retURL: 'https://fiatechs.com/#/',
          last_name: 'test',
          email: 'test@test.com',
          company: 'testCompany',
          '00N2x000008gJ5p': 'testDesignation',
          phone: '9176837787'
        })
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div id="faq" className="pt-5">
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
              {/* <div className="accordion-item">
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
              </div> */}
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How do I reach out to you to discuss more?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    If you have an idea that you would like to discuss, please
                    feel free to reach out to us through our online form, email,
                    or phone (Make this part as CTA). We can schedule a meeting
                    to talk about your idea in more detail. To make the most of
                    our meeting, it will be helpful if you can provide as much
                    information about your idea as possible beforehand. This
                    will facilitate the discussion and enhance our future
                    collaboration.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What is the estimated timeline for delivering my Project?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    In order to provide you with a precise answer, we need to
                    create a project scope and plan. We have a base product that
                    is ready to launch, and any customizations on top of that
                    will extend the delivery time based on the estimated effort
                    required. Based on our past experience, a project with a
                    ready-to-go base product usually takes 2-3 months to deliver
                    with customizations.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    What measures do you have in place to ensure the quality of
                    your products?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    To ensure product quality, we evaluate our progress every
                    two weeks, conduct both development and acceptance testing,
                    present the results to you, and incorporate your feedback to
                    ensure that you are receiving the product that you are
                    paying for.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Will my input on the prototypes be reflected in the finished
                    product?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body">
                    Absolutely! We use the Agile Methodology, which allows us to
                    continuously iterate and improve the project as it is being
                    developed. Your feedback will be incorporated into the
                    product as it is being created.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="reachUs" className="col-md-4">
            <div className="reach p-5">
              <div className="hand">
                <img src={hand} alt="hand" />
              </div>
              <h4 className="pt-2">Have any Questions?</h4>
              <p>We’re available 24/7</p>

              <form action="https://formspree.io/f/xzbqeooe" method="POST">
                {/* <input type="hidden" name="oid" value="00D2x000005O1U3" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://fiatechs.com/#/"
                /> */}
                <div className="mb-3">
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="FullName"
                    name="FullName"
                    aria-describedby="FullName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                    required
                    minLength={10}
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    aria-describedby="Phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Email Address"
                  />
                </div>

                {/* <div className="d-none">
                  <input
                    id="lead_source"
                    name="lead_source"
                    value="fiatechs"
                    readOnly
                  />
                </div> */}
                <div className="mb-3">
                  <button type="submit" className="btn btn-success">
                    Request a Call Back
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center pt-5 alternate">
              <h6 className="fw-bold">Write to us</h6>
              <p>
                Alternatively, you can write us at our email address:&nbsp;
                <a href="mailto:contact@fiatechs.com">contact@fiatechs.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
