import React from 'react';
import { useLocation } from 'react-router-dom';
import './RequestCall.css';
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';

const RequestCall = () => {
  let location = useLocation();
  const [loc, setLoc] = useState(location.pathname + '#reachUs');
  return (
    <div id="requestCall" className="container">
      <div className="ctaGroup px-2 mb-5">
        <h1>Improve Your Small Business Lending with Our Dynamic Solutions</h1>
        <div className="row justify-content-center my-4">
          <div className="col-md-3 col-6">
            <button className="btn btn-light">Request a Demo</button>
          </div>
          <div className="col-md-3 col-6">
            <NavHashLink to={loc} className="btn btnRequest">
              Request a Call Back
            </NavHashLink>
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
};

export default RequestCall;
