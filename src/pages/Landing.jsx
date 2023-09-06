import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Carousel from '../components/carousel/Carousel';
import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Offerings from '../components/offerings/Offerings';
import RequestCall from '../components/requestCall/RequestCall';
import TabContent from '../components/tabContent/TabContent';
import ReactGA from "react-ga4";

const Landing = () => {
  const location = useLocation();
  useEffect(() => {
       console.log("====================================");
       console.log(location.pathname);
       console.log("====================================");
       ReactGA.send({
         hitType: "pageview",
         page: window.location.pathname,
       });
       window.scrollTo(0, 0);
     }, []);
    return (
      <>
        <Header />
        <TabContent />
        <HowItWorks />
        <Offerings />
        <RequestCall title="Improve Your Small Business Lending with Our Dynamic Solutions" />
        <Carousel />
        <Faq />
      </>
    );
}

export default Landing