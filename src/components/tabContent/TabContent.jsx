import React from "react";
import tab from '/assets/landing/tab3.png'
import './TabContent.css'
const TabContent = () => {
    return (
      <div id="tabContent" className="container py-5">
        <ul
          class="nav nav-pills justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="mca-tab"
              data-bs-toggle="tab"
              data-bs-target="#mca-tab-pane"
              type="button"
              role="tab"
              aria-controls="mca-tab-pane"
              aria-selected="true"
            >
              Merchant Cash Advance
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="if-tab"
              data-bs-toggle="tab"
              data-bs-target="#if-tab-pane"
              type="button"
              role="tab"
              aria-controls="if-tab-pane"
              aria-selected="false"
            >
              Invoice Financing
            </button>
          </li>
        </ul>
        <div class="tab-content" id="tabInnerContent">
          <div
            class="tab-pane fade show active"
            id="mca-tab-pane"
            role="tabpanel"
            aria-labelledby="mca-tab"
            tabindex="0"
          >
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
              <div className="imgContainer">
                <img src={tab} alt="" className="img-fluid" />
              </div>
              <div className="content">
                <h2 className="fw-bold">
                  Revolutionizing Lending Operations with MCA SaaS Solutions
                </h2>
                <p className="py-2">
                  Get the FIA technologies MCA solution which is particularly
                  designed for small to medium-sized business lending. Each of
                  our SaaS solutions can be perfectly customised to fit your
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="if-tab-pane"
            role="tabpanel"
            aria-labelledby="if-tab"
            tabindex="0"
          >
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
              <div className="imgContainer">
                <img src={tab} alt="" className="img-fluid" />
              </div>
              <div className="content">
                <h2 className="fw-bold">
                  Automate each step of invoice financing process
                </h2>
                <p className="py-2">
                  We have automated each step in the invoice financing process
                  right from the company registration till invoice submission,
                  validation and funding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default TabContent;