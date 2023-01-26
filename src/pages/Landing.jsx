import React, { useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';
import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Offerings from '../components/offerings/Offerings';
import RequestCall from '../components/requestCall/RequestCall';
import WithUs from '../components/withUs/WithUs';

const Landing = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (<>
        <Header />
        <HowItWorks />
        <Offerings />
        <RequestCall />
        <Carousel />
        <Faq />
    </>)
}

export default Landing