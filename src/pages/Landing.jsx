import React, { useEffect } from 'react';
import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Offerings from '../components/offerings/Offerings';
import WithUs from '../components/withUs/WithUs';

const Landing = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (<>
        <Header />
        <HowItWorks />
        <Offerings />
        {/* <WithUs /> */}
        <Faq />
       
    </>)
}

export default Landing