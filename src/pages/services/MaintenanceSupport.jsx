import React, { useEffect } from 'react';
import './index.css';

const MaintenanceSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="MaintenanceSupport">
      <div className="bg py-5">
        <div className="container">
          <h1>Maintenance Support</h1>
          <p>Keeping Your Product at Its Best</p>
        </div>
      </div>
      <div className="container">
        <div className="pt-5">
          <p>
            We Offer Continuous Maintenance and Enhancements. We Offer Regular
            Updates to Keep Your System Ahead of the Game.
          </p>
          <p>
            We understand the importance of providing ongoing support to our
            clients. Once a lending solution has been implemented, we work with
            our clients to provide ongoing maintenance and support.
          </p>
        </div>
        <ul className="servicePointers">
          <li>
            Regular check-ins: Regularly check in with clients to ensure that
            the lending solution is working as intended and address any issues
            that may arise.
          </li>
          <li>
            Evaluating the effectiveness: Evaluate the effectiveness of the
            solution over time, and make any necessary adjustments to ensure
            that it continues to meet clients' needs and goals.
          </li>
          <li>
            Training and support: Provide training and support to ensure that
            clients are able to use the lending solution efficiently, and can
            make the most of the financing they have obtained.
          </li>
          <li>
            Compliance: Keep up to date with the latest regulations and
            compliance requirements, and ensure that the lending solution is in
            line with the current laws and standards.
          </li>
          <li>
            Reporting: Help clients to set up, and monitor reporting and
            monitoring tools, and provide guidance on how to use the financing
            to achieve their business objectives.
          </li>
          <li>
            Problem-solving: Help clients to solve any operational, technical or
            financial problems that they may encounter while using the lending
            solution.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaintenanceSupport;
