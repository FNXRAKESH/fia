import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Carousel.css'

const Carousel = () => {
    const [width, setWidth] = useState(0);

    const carousel = useRef();
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
      <div id="carousel" className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="title">
              What Makes
              <br /> Us Stand Out
            </h1>
          </div>
          <div className="col-md-7">
            <p className="scroll">
              We understand that the{' '}
              <b>business world is constantly changing</b>, and that's why we
              are <b>dedicated to staying ahead of the curve</b> with our MCA
              solution. We are committed to <b>continuous improvement</b> and
              are always looking for ways to <b>enhance our product</b> and
              services.
            </p>
          </div>
        </div>
        <motion.div ref={carousel} className="carousel py-5">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            <div className="card">
              <h5>Dedicated to Delivering Excellence</h5>
            </div>
            <div className="card">
              <h5>Striving for Constant Improvement</h5>
            </div>
            <div className="card">
              <h5>Constantly Evolving to Meet Your Needs</h5>
            </div>
            <div className="card">
              <h5>Constant Pursuit of Industry Excellence</h5>
            </div>
            <div className="card">
              <h5>Leading the Way with Innovative Solutions</h5>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
}
 
export default Carousel;