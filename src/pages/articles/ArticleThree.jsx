import React, { useEffect } from "react";
import header from "/assets/blogs/header3.png";
import article3 from "/assets/blogs/article3.png";
import article3a from "/assets/blogs/article3a.png";
import "./index.css";
import BlogItems from "../../components/blogItems/BlogItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
const ArticleThree = () => {
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
        Microservices-based architecture in building a loan management system
      </h1>
      <img src={header} alt="blog" className="img-fluid" />
      <div id="content" className="container py-5 w-75">
        <div className="d-flex align-items-center">
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div>
            <div className="d-flex">
              <p className="pe-2">Content Sourced Online &amp; Moderated by</p>
              <h5 className="fw-bold">Krishna Kumar</h5>
            </div>
            <div className="d-flex align-items-center">
              <p className="pe-3 m-0">15 Min Read</p>
              <FontAwesomeIcon icon={faDotCircle} color="#D9D9D9" />
              <p className="ps-3 m-0">12 Jan 2023</p>
            </div>
          </div>
        </div>
        <div className="line mb-5"></div>
        <p className="pb-5">
          Microservices architecture has become increasingly popular in recent
          years for software development, and the lending industry is no
          exception. This approach to software design involves breaking down a
          complex application into smaller, independent components, each
          responsible for a specific business function. The lending software
          industry is no exception to this trend, and many lenders are now
          adopting microservices to improve the flexibility, scalability, and
          efficiency of their software platforms. With the growth of online
          lending platforms and the need for agility and scalability,
          microservices provide an excellent solution. In this blog post, we
          will explore what microservices are and how they are used in the
          lending software industry.
        </p>

        <img src={article3} alt="" className="img-fluid" />

        <div className="py-5">
          <h5 className="fw-bold pb-4">
            Benefits of Microservices Architecture in Lending Software
          </h5>
          <div className="d-flex align-items-center">
            <div className="circle"></div>

            <h6 className="fw-bold ps-2 mb-0">
              Increased Flexibility and Scalability:
            </h6>
          </div>
          <p className="py-3">
            By breaking down complex lending processes into smaller, independent
            components, microservices allow lenders to add new features or
            functionality more easily. These components can be developed,
            tested, and deployed independently, which allows for greater
            flexibility and scalability. For example, if a lender wants to add a
            new underwriting algorithm to their lending platform, they can
            develop and deploy this functionality without disrupting the rest of
            the system.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Improved Efficiency:</h6>
          </div>
          <p className="py-3">
            Microservices can help lenders streamline their lending processes
            and reduce the time it takes to approve and fund a loan. By breaking
            down processes into smaller components, lenders can optimize each
            step of the lending process, eliminating bottlenecks and reducing
            the overall time it takes to complete a loan application.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Better Customer Experience:</h6>
          </div>
          <p className="py-3">
            Microservices can help lenders provide a more personalized and
            streamlined customer experience. For example, by breaking down the
            loan application process into smaller components, lenders can
            provide borrowers with a more tailored experience that matches their
            specific needs and preferences.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Increased Resilience:</h6>
          </div>
          <p className="py-3">
            Microservices can help lenders build more resilient software
            platforms that can handle spikes in demand or unexpected failures.
            By designing components to be independent and fault-tolerant,
            lenders can ensure that their lending platforms remain available
            even in the face of unexpected events.
          </p>
        </div>

        <img src={article3a} alt="" className="img-fluid" />
        <div className="pt-5">
          <h5 className="fw-bold">
            Challenges of Microservices Architecture in Lending Software
          </h5>
          <p className="py-4">
            While microservices architecture offers many benefits, there are
            also several challenges that lenders may face when implementing this
            approach.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Increased Complexity:</h6>
          </div>
          <p className="py-3">
            Microservices can introduce additional complexity into the lending
            software platform, particularly in terms of deployment and
            management. Each component must be developed, tested, and deployed
            independently, which can require additional infrastructure and
            resources.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Integration Challenges:</h6>
          </div>
          <p className="py-3">
            Microservices can also introduce integration challenges,
            particularly when it comes to integrating with legacy systems.
            Lenders may need to invest in new integration tools or APIs to
            ensure that their microservices can communicate with other systems
            and components.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Security Concerns:</h6>
          </div>
          <p className="py-3">
            Microservices can increase the attack surface of a lending software
            platform, particularly if security is not built into each component
            from the ground up. Lenders must ensure that each component is
            secured properly and that data is protected across the entire
            lending process.
          </p>
          <div className="d-flex align-items-center">
            <div className="circle"></div>
            <h6 className="fw-bold ps-2 mb-0">Organizational Changes:</h6>
          </div>
          <p className="py-3">
            Microservices can require significant changes to the organizational
            structure of a lending institution. Lenders may need to adopt new
            development methodologies, such as DevOps, to ensure that components
            are developed and deployed efficiently.
          </p>
        </div>
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

export default ArticleThree;
