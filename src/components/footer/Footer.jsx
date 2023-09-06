import React from 'react';
import './Footer.css'
import logo from '/assets/logo.png'
import faceboook from '/assets/facebook.png'
import linkedin from '/assets/linkedin.png'
import instagram from '/assets/instagram.png'
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  let location = useLocation();
    return (
      <div id="footer">
        <div className="container py-5">
          {location.pathname == "/contact" ? null : (
            <div id="divider" className="my-5"></div>
          )}
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex align-items-center flex-wrap w-100">
                <div className="me-4">
                  <img src={logo} alt="FIA" className="img-fluid" />
                </div>
                <p className="fw-bold name pb-0" style={{ cursor: "auto" }}>
                  Financial
                  <br className="d-none d-md-block" />{' '}
                  Information
                  <br />{' '}Automation
                </p>
              </div>

              <p className="py-3">
                At Financial Information Automation (FIA) Technologies, We build
                modern Salesforce based workflows that save time, make lending
                efficient, and create satisfied borrowers.
              </p>
            </div>
            <div className="col-lg-8 fLinks">
              <div className="mb-4 d-flex justify-content-center">
                <div>
                  <h3>Company</h3>
                  <p>
                    <HashLink to="/aboutus">About us</HashLink>
                  </p>

                  <p>
                    <HashLink to="/aboutus#whyChoose">Why choose</HashLink>
                  </p>
                  {/* <p>Careers</p> */}
                  <p>
                    <HashLink to="/contact">Contact us</HashLink>
                  </p>
                  {/* <p>Blog</p> */}
                </div>
                {/* <div>
                      <h3>Solutions</h3>
                      <p>Overview</p>
                      <p>Features</p>
                      <p>Releases</p>
                    </div> */}
              </div>
              <div className="mb-4 d-flex justify-content-center">
                <div>
                  <h3>
                    <HashLink to="/aboutus#offers">Offerings</HashLink>
                  </h3>
                  <p>
                    <HashLink to="/mca#mcaOrigination">Origination</HashLink>
                  </p>
                  <p>
                    <HashLink to="/#Analysis">Analysis</HashLink>
                  </p>
                  <p>
                    <HashLink to="/#Integrations">Integrations</HashLink>
                  </p>
                  <p>
                    <HashLink to="/#Servicing">Servicing</HashLink>
                  </p>
                  <p>
                    <HashLink to="/#Deployment">Deployment</HashLink>
                  </p>
                </div>
              </div>

              {/* <div className="d-flex justify-content-center">
                <div>
                  <h3>Legal</h3>
                  <p>Terms &amp; Conditions</p>

                  <p>Privacy</p>
                </div>
              </div> */}
            </div>
          </div>

          <div id="divider" className="my-5"></div>
          <div className="d-flex align-items-start">
            <p className="flex-grow-1">
              <small>© 2023 Fiatechs. All Rights Reserved.</small>
            </p>
            <div className="social d-flex align-items-center mx-3">
              <a
                href="https://www.linkedin.com/company/fiatechnologies/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedIn" className="img-fluid" />
              </a>
              <img src={faceboook} alt="faceboook" className="img-fluid" />
              <img src={instagram} alt="instagram" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Footer;
