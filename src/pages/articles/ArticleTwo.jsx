import React, { useEffect } from 'react';
import header from '/assets/blogs/header2.png';
import article1 from '/assets/blogs/article2.png';
import article1a from '/assets/blogs/article1a.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import BlogItems from '../../components/blogItems/BlogItems';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
const ArticleTwo = () => {
 const location = useLocation();
 useEffect(() => {
   console.log("====================================");
   console.log(location.pathname);
   console.log("====================================");
   ReactGA.send({
     hitType: "pageview",
     page: location.pathname,
   });
   window.scrollTo(0, 0);
 }, []);
  return (
    <div className="article container py-5">
      <h1 className="text-center pb-5">
        Salesforce-based Loan Collection System
      </h1>
      <img src={header} alt="blog" className="img-fluid" />
      <div id="content" className="container py-5 w-75">
        <div className="d-flex align-items-center">
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div>
            <h5 className="fw-bold">Abhijit Ingole</h5>
            <div className="d-flex align-items-center">
              <p className="pe-3 m-0">15 Min Read</p>
              <FontAwesomeIcon icon={faDotCircle} color="#D9D9D9" />
              <p className="ps-3 m-0">12 Jan 2023</p>
            </div>
          </div>
        </div>
        <div className="line mb-5"></div>
        <p>
          A Salesforce-based loan collection system is a software solution
          designed to help financial institutions manage the loan collections
          process using the Salesforce platform. This system provides a
          comprehensive and customizable framework for managing collections,
          allowing financial institutions to automate and streamline their
          collections operations.
        </p>
        <p>
          Loan collection solutions such as Fx-collection use Salesforce as the
          underlying platform, this loan collection system leverages the
          platform's powerful features, including workflow automation, reporting
          and analytics, security and compliance controls, and collaboration
          capabilities. The system can be customized to meet the unique needs of
          each financial institution. It can integrate with various external
          systems and data sources, such as payment processors, customer
          communication platforms, and credit bureaus.
        </p>

        <div className="line my-5"></div>

        <img src={article1} alt="" className="img-fluid" />

        <p className="pt-5">
          The loan collection system on Salesforce enables financial
          institutions to track delinquent loans, set up payment plans, and
          communicate with borrowers through various channels, such as email,
          phone, or SMS. It also provides tools for managing default risk,
          including account monitoring and escalation workflows.
        </p>

        <p>
          By automating and streamlining the collections process, financial
          institutions can improve the efficiency of their operations, reduce
          risk, and provide better customer experiences. The loan collection
          system on Salesforce can also help financial institutions comply with
          regulatory requirements, such as Fair Debt Collection Practices Act
          (FDCPA) and Consumer Financial Protection Bureau (CFPB) guidelines.
        </p>

        <p className="text-center fw-bold py-5">
          Tags:{" "}
          <span className="text-decoration-underline">product design</span>,{" "}
          <span className="text-decoration-underline">culture</span>
        </p>
        <div className="line my-5"></div>
        <h3 className="fw-bold text-center">Related Articles</h3>
        <BlogItems />
      </div>
    </div>
  );
};

export default ArticleTwo;
