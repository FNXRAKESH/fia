import React from 'react';
import './Footer.css'
import logo from '/assets/logo.png'
import faceboook from '/assets/facebook.png'
import linkedin from '/assets/linkedin.png'
import instagram from '/assets/instagram.png'
const Footer = () => {
    return (
      <div id="footer">
        <div className="container py-5">
          <div id="divider" className="my-5"></div>
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="Levee" />

              <p className="py-3">
                Get Unmatched Support for Your Business with Our MCA Solution.
                Navigate Change and Advance Together with Our Continuous
                Improvement and Partnership.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="d-flex justify-content-around">
                    <div>
                      <h3>Company</h3>
                      <p>About us</p>
                      <p>Our Team</p>
                      <p>Why choose</p>
                      <p>Careers</p>
                      <p>Contact us</p>
                      <p>Blog</p>
                    </div>
                    <div>
                      <h3>Solutions</h3>
                      <p>Overview</p>
                      <p>Features</p>
                      <p>Releases</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-around">
                    <div>
                      <h3>Offerings</h3>
                      <p>Origination</p>
                      <p>Analysis</p>
                      <p>Integrations</p>
                      <p>Servicing</p>
                      <p>Deployment</p>
                    </div>
                    <div>
                      <h3>Legal</h3>
                      <p>Terms</p>
                      <p>Conditions</p>
                      <p>Privacy</p>
                      <p>Contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="divider" className="my-5"></div>
          <div className="d-flex align-items-start">
            <p className="flex-grow-1">
              <small>© 2023 Fiatechs. All Rights Reserved.</small>
            </p>
            <div className="social d-flex align-items-center mx-3">
              <img src={linkedin} alt="linkedIn" className="img-fluid" />
              <img src={faceboook} alt="faceboook" className="img-fluid" />
              <img src={instagram} alt="instagram" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Footer;
