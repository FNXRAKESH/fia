import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import BlogItems from '../../components/blogItems/BlogItems';
import './Blogs.css'
import header from '/assets/blogs/header1.png'
const Blogs = () => {
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
      <div id="blogs" className="container py-5">
        <img src={header} alt="" className="img-fluid" />

        <div className="row py-5">
          <div className="col-md-10">
            <h1>
              Small business lending solutions <br />– A brief overview
            </h1>
            <p>
              Small business lending solutions refer to the various ways in
              which small businesses can access funds to finance their
              operations, expand their businesses or meet their financial needs.
            </p>
          </div>
          <div className="col-md-2 ">
            <div>
              <p className="m-0 text-end">15 Min Read</p>
              <p className="text-end">Posted on 12 Jan 2023</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <BlogItems />
      </div>
    );
}
 
export default Blogs;