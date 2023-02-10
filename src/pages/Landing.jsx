import React, { useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';
import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Offerings from '../components/offerings/Offerings';
import RequestCall from '../components/requestCall/RequestCall';
import TabContent from '../components/tabContent/TabContent';

const Landing = () => {
     useEffect(() => {
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