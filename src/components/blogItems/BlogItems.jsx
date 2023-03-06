import React from 'react';
import blog1 from '/assets/blogs/blog1.png';
import blog2 from '/assets/blogs/blog2.png';
import blog3 from '/assets/blogs/blog3.png';
import './BlogItems.css'
import { useNavigate } from 'react-router-dom';
 


const blogs = [
  {
    img: blog1,
    title: 'Small business lending solutions – A brief overview',
    time: '15 Min Read',
    posted: 'Posted on 12 Jan 2023'
  },
  // {
  //   img: blog2,
  //   title: 'Salesforce-based Loan Collection System',
  //   time: '15 Min Read',
  //   posted: 'Posted on 12 Jan 2023'
  // },
  // {
  //   img: blog3,
  //   title:
  //     'Microservices-based Architecture in Building a Loan Management System',
  //   time: '15 Min Read',
  //   posted: 'Posted on 12 Jan 2023'
  // }
];
const BlogItems = (props) => {
 const navigate = useNavigate();
    return (<div id='blogItems' className='py-5'>
        {blogs.map((blog,index) => {
          return (
            <div
              key={blog.title}
              onClick={() => navigate(`/blogs/article${index + 1}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={blog.img} className="img-fluid" alt={blog.title} />
              <h3 className="py-3">{blog.title}</h3>
              <div className="d-flex">
                <p>{blog.time}</p>
                <p> - </p>
                <p>{blog.posted}</p>
              </div>
            </div>
          );
        })}
    </div> );
}
 
export default BlogItems;