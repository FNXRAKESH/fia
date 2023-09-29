import { HashRouter, useLocation, Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import BusinessConsulting from './pages/services/BusinessConsulting';
import Landing from './pages/Landing';

import SolutionImplementation from './pages/services/SolutionImplementation';
import MaintenanceSupport from './pages/services/MaintenanceSupport';
import InvFactoring from './pages/solutions/InvFactoring';
import Mca from './pages/solutions/Mca';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import BookDemo from './components/bookDemo/BookDemo';
import BlogItems from './components/blogItems/BlogItems';
import Blogs from './pages/blogs/Blogs';
import ArticleOne from './pages/articles/ArticleOne';
import ArticleTwo from './pages/articles/ArticleTwo';
import ArticleThree from './pages/articles/ArticleThree';
import ArticleFour from './pages/articles/ArticleFour';
import Products from "./pages/products/Products";
 


function App(props) {
  
  
  return (
    <div>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* <Route path="BusinessConsulting" element={<BusinessConsulting />} /> */}
          {/* <Route path="MaintenanceSupport" element={<MaintenanceSupport />} /> */}
          {/* <Route
            path="SolutionImplementation"
            element={<SolutionImplementation />}
          /> */}
          <Route path="invFactoring" element={<InvFactoring />} />
          <Route path="small-business-lending" element={<Mca />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blogItems" element={<BlogItems />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/blogs/article1" element={<ArticleOne />} />
          <Route path="/blogs/article2" element={<ArticleTwo />} />
          <Route path="/blogs/article3" element={<ArticleThree />} />
          <Route path="/blogs/article4" element={<ArticleFour />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </HashRouter>
      <div
        className="modal fade"
        id="demoModal"
        tabIndex="-1"
        aria-labelledby="demoModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="demoModalLabel">
                Book a Demo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <BookDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
