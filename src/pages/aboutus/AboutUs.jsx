import React, { useEffect } from 'react';
import './AboutUs.css'
import bg from '/assets/aboutus/header.png';
import bg1 from '/assets/aboutus/bg.png';
 
import dive from '/assets/aboutus/dive.png';
import s3 from '/assets/aboutus/s3.png';
import RequestCall from '../../components/requestCall/RequestCall';
import Carousel from '../../components/carousel/Carousel';
import Faq from '../../components/faq/Faq';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
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
      <div id="aboutUs">
        <div className="bg pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <h6>About Us</h6>
                <h1 className="py-3">
                  Helping Businesses Succeed Through Our Lending Solutions
                </h1>
                <p className="d-none d-md-block">
                  We pride ourselves on being a leading provider of small
                  business lending solutions, we have a wealth of experience and
                  knowledge in the field of Small Business Lending and invoice
                  financing. We have a reputation for providing efficient,
                  transparent and reliable service, which has made us a trusted
                  partner for many small business lenders.
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <img src={bg} alt="bc" className="img-fluid" />
              </div>
            </div>
            <p className="d-block d-md-none">
              Our Small Business Lending solutions can be particularly
              beneficial for small to medium-sized businesses and start-ups that
              are looking to automate their lending operations without investing
              in expensive on-premises software or IT infrastructure. This
              solution also helps businesses to reduce operational costs,
              improve their lending decision-making, and increase.
            </p>
          </div>
        </div>
        <div className="bgGreen">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1 style={{ color: '#2B9348' }}>Simple</h1>
                <p>
                  User freindly and easy to use SaaS solution for your lending
                  operations, person using it just need to have basic computer
                  knwoledge
                </p>
              </div>

              <div className="col-md-4">
                <h1 style={{ color: '#2B9348' }}>Fast</h1>
                <p>
                  Quality and speed are just values of the same thing, the pace.
                  we have created a perfect balance between quality and the
                  speed
                </p>
              </div>
              <div className="col-md-4">
                <h1 style={{ color: '#2B9348' }}>Efficient</h1>
                <p>
                  Financial Information Automation(FIA) Technologies's solutions
                  are some of the most efficent and flexible tools available in
                  the market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg1} alt="" className="img-fluid" />
        <div className="container">
          <h1 className="text-center py-5 fw-normal">
            “As a leading lending solution provider for small business lenders,
            we specialize in providing Small Business Lending (Merchant Cash
            Advance) and invoice financing solutions to small businesses.”
          </h1>
          <hr className="mt-2 mb-3" />
          <h1 className="text-center pt-5 pb-3">
            Our Core <span style={{ color: '#2B9348' }}>Values</span>
          </h1>
          <p className="text-center px-5 pb-5">
            At Financial Information Automation (FIA) technologies we are not
            just a technology company but a team of dedicated professionals and
            experts who strive to be the best in what they do everyday. Our core
            values inspire us to constantly innovate, evolve and put the
            client's interests ahead of our own.
          </p>
          <img src={dive} alt="" className="img-fluid" />
          <hr className="my-5" />

          <div id="whyChoose" className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s3} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                Why Choose Financial Information Automation(FIA) as Your
                Business Solution Provider?
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s3} alt="bc" className="img-fluid" />
              </div>
              <p>
                Our lending solutions are designed to be quick, easy and
                flexible, with minimal paperwork and a simple application
                process. We understand that small businesses operate on tight
                timelines and strive to provide funding as quickly as possible.
              </p>
            </div>
          </div>
        </div>
        <RequestCall title="Improve Your Small Business Lending with Our Dynamic Solutions" />
        <Carousel />
        <Faq />
      </div>
    );
}
 
export default AboutUs;