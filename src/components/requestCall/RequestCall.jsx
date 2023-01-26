import React from 'react';
import './RequestCall.css'
const RequestCall = () => {
    return (
      <div id="requestCall" className="container">
         
          <div className="ctaGroup px-2 mb-5">
            <h1>
              Improve Your Small Business Lending with Our Dynamic Solutions
            </h1>
            <div class="row justify-content-center my-4">
              <div class="col-md-3 col-6">
                <button className="btn btn-light">Request a Demo</button>
              </div>
              <div class="col-md-3 col-6">
                <button className="btn btnRequest">Request a Call Back</button>
              </div>
            </div>

            <p>
              Alternatively, you can reach out ot us using our email address:
              <br />
              <a href="mailto:contact@fiatechs.com">contact@fiatechs.com</a>
            </p>
          </div>
        </div>
      
    );
}
 
export default RequestCall;