import React, { useEffect } from "react";
import header from "/assets/blogs/header4.png";
import article1 from "/assets/blogs/article4.png";
import article1a from "/assets/blogs/article4a.png";
import article4b from "/assets/blogs/article4b.png";
import article4c from "/assets/blogs/article4c.png";
import article4d from "/assets/blogs/article4d.png";
import article4e from "/assets/blogs/article4e.png";
import article4f from "/assets/blogs/article4f.png";
import "./index.css";
import BlogItems from "../../components/blogItems/BlogItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
const ArticleFour = () => {
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
    <div className="article container pt-5">
      <h1 className="text-center pb-5">
        Breaking Down Small Business Lending: Challenges, Facts, Figures and
        Technology’s Impact
      </h1>
      <img src={header} alt="blog" className="img-fluid" />
      <div id="content" className="container pt-5 w-75">
        <div className="d-flex align-items-center">
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div>
            <h5 className="fw-bold">Abhijit Ingole</h5>
            <div className="d-flex align-items-center">
              <p className="pe-3 m-0">15 Min Read</p>
              <FontAwesomeIcon icon={faDotCircle} color="#D9D9D9" />
              <p className="ps-3 m-0">12 Jan 2023</p>
            </div>
          </div>
        </div>
        <div className="line mb-5"></div>
        <p>
          Small businesses are the backbone of any economy and play a crucial
          role in creating jobs and driving economic growth. However, small
          businesses often face significant challenges when it comes to
          accessing capital. In this article, we will explore some interesting
          facts about the small business lending scenario in the US, Canada, and
          around the globe, and discuss how technology can help these businesses
          achieve greater heights.
        </p>
        <h3 className="py-3">Small Business Lending in the US:</h3>
        <p className="pb-5">
          In the US, small businesses account for 99.9% of all businesses and
          employ 47.1% of the private workforce. Despite this, small businesses
          face significant challenges when it comes to accessing capital.
          According to the Small Business Administration (SBA), around 80% of
          small business loan applications are rejected by traditional banks.
          This is due to a variety of factors, including strict lending
          criteria, high-interest rates, and a lack of collateral.
        </p>

        <img src={article1} alt="" className="img-fluid" />
        <ul className="py-5">
          <li>
            In the US, small businesses have historically struggled to obtain
            financing from traditional banks, especially those that are just
            starting out. This has led to the growth of alternative lending
            options such as online lenders and peer-to-peer lending platforms.
          </li>
          <li>
            The Small Business Administration (SBA) in the US offers various
            loan programs to small businesses, including the Paycheck Protection
            Program (PPP) which was established in response to the COVID-19
            pandemic. 
          </li>
          <li>
            Despite the challenges faced by small businesses in the US, the
            country still has the largest market for small business lending in
            the world. Interestingly, the rise of alternative lending platforms,
            such as peer-to-peer lending, has provided small businesses with
            more options for accessing capital. These platforms use technology
            to connect borrowers with investors, cutting out traditional banks
            and allowing for more flexible lending terms. In 2020, the
            alternative lending market in the US was valued at $21.4 billion.
            [1]
          </li>
          <li>
            The highest share of approvals of loan applications from small
            businesses in the United States as of June 2021 was by alternative
            lenders. They approved approximately one-fourth of the loan
            applications received. Institutional lenders followed had a similar
            approval rate for loans to small businesses, while big banks had the
            lowest approval rate. [2]
          </li>
        </ul>
        <img src={article1a} alt="" className="img-fluid" />
        <h3 className="py-5">
          The approval rate of small businesses loans in the United States in
          September 2021 and September 2022, by lender type
        </h3>
        <img src={article4b} alt="" className="img-fluid" />
        <ul className="py-5">
          <li>
            Globally.27% of businesses surveyed by the NSBA claimed that they
            were not able to receive the funding they needed. For those 1-in-4
            businesses, the most frequent primary impact that a lack of funding
            had was preventing them from growing their business.
          </li>
          <li>
            46% of all small businesses use personal credit cards. Many small
            businesses fail to separate business and personal expenses,
            according to research conducted by MasterCard.
          </li>
          <li>
            According to the NSBA Small Business Access to Capital Study, 20% of
            small business loans are denied due to business credit.
          </li>
          <li>
            In the first 6 months of 2013, according to Creditera, Dun &
            Bradstreet had 45 million business credit report requests and
            Equifax Commercial had 35 million.
          </li>
          <li>
            The Nav American Dream Gap Survey, 2015 revealed of small business
            owners surveyed, 45% did not know they have a business credit score,
            72% did not know where to find information on their business credit
            score and 82% didn’t know how to interpret their score.
          </li>
          <li>
            Many lenders consider a business credit score of 75 as “acceptable”
            making it harder for those with a lower score to get a small
            business loan according to Small Business by Demand Media 2015.
          </li>
          <li>
            The average business needs 12-18 months to improve its business
            credit score according to Cardhub in 2015.
          </li>
          <li>
            Bolt Insurance stated that one in three small business owners borrow
            money from family and friends, while 75 percent of young firms’
            funds come from bank loans and business credit.
          </li>
          <li>
            Dun & Bradstreet states 90% of the Fortune 500™, and companies of
            every size around the world, rely on their data, insights, and
            analytics to streamline operations, manage risk, improve targeting,
            find quality leads, boost customer relationships, and most important
            of all – grow.
          </li>
          <li>
            Mercator Advisory Group research finds that small business credit
            cards account for $430 billion in spending or about 1 in every 6
            dollars spent on general-purpose cards [3]
          </li>
        </ul>
        <h3 className="pb-4">Small business lending in Canada:</h3>
        <img src={article4c} alt="" className="img-fluid" />
        <ul className="py-5">
          <li>
            In Canada, small businesses account for over 97% of all businesses
            and employ over 8 million people. Small business lending in Canada
            is also important for the growth and success of these businesses.
            [4]
          </li>
          <li>
            The Business Development Bank of Canada (BDC) offers financing
            solutions to small businesses in Canada, including loans and lines
            of credit.
          </li>
          <li>
            In Canada, small businesses are responsible for over 40% of the
            country's GDP and employ over 8 million people. The Canadian
            government offers a range of funding programs and services to
            support small business growth and innovation. [5]
          </li>
          <li>
            In Canada, small businesses have better access to financing than in
            the US. This is due in part to government programs such as the
            Canada Small Business Financing Program, which provides loans to
            small businesses through partnering financial institutions.
          </li>
        </ul>
        <p>
          However, small businesses in Canada also face significant challenges
          when it comes to accessing capital. According to a report by the
          Canadian Federation of Independent Business (CFIB), over 30% of small
          businesses in Canada have been denied a loan in the past year.
        </p>
        <p className="py-3">
          To address this issue, the Canadian government has established several
          loan programs designed specifically for small businesses, including
          the Canada Small Business Financing Program and the Business
          Development Bank of Canada. Additionally, alternative lenders and
          fintech companies have also emerged in Canada, offering alternative
          sources of funding for small businesses. Despite this, small
          businesses face similar challenges when it comes to accessing capital.
        </p>
        <p>
          According to a survey by the Canadian Federation of Independent
          Business, only 36% of small businesses that applied for a loan from a
          large bank were approved.
        </p>
        <h3 className="py-3">Small business lending around the Globe:</h3>
        <p>
          The challenges faced by small businesses when it comes to accessing
          financing are not unique to North America. According to a report by
          the International Finance Corporation, there is a $5.2 trillion global
          credit gap for small and medium-sized enterprises (SMEs).
        </p>
        <p className="py-3">
          The credit gap is most significant in emerging markets, where SMEs
          account for a significant portion of economic activity. In many of
          these markets, traditional lenders are either unable or unwilling to
          lend to SMEs due to operations in the informal economy, lack the
          documentation and lack of credit information, or inadequate
          collateral.​ [6]
        </p>
        <p>
          The IFC estimates that only about 30% of formal MSMEs in emerging
          markets have access to credit.
        </p>
        <img src={article4d} alt="" className="img-fluid" />
        <ul className="py-5">
          <li>
            Globally, small business lending is a critical source of financing
            for entrepreneurs and small business owners. According to the World
            Bank, there are over 500 million small businesses in the world, and
            they account for over half of all jobs worldwide.
          </li>
          <li>
            To address this issue, various organizations have been established
            to provide financing solutions to small businesses around the world,
            including the International Finance Corporation and the Small
            Enterprise Assistance Funds. Additionally, some countries have
            implemented policies and programs to support small business lending,
            such as tax incentives and loan guarantees.
          </li>
          <li>
            It is nearly impossible to sustain a business without access to
            capital. Estimates suggest that women-owned entities represent just
            over thirty percent of formal, registered businesses worldwide. Yet,
            seventy percent of formal women-owned Small and Medium Enterprises
            (SMEs) in developing countries are either shut out by financial
            institutions or are unable to receive financial services on adequate
            terms to meet their needs. This results in a nearly $300 billion
            annual credit deficit to formal women-owned SMEs. Lack of networks,
            knowledge, and links to high-value markets further constrain female
            entrepreneurship [7]
          </li>
          <li>
            However, there are several innovative solutions that are emerging to
            address this gap. For example, in Kenya, the mobile money platform
            M-PESA has enabled small businesses to access microloans quickly and
            easily. In India, the government-backed Micro Units Development and
            Refinance Agency (MUDRA) provides loans of up to $14,000 to micro
            and small enterprises.
          </li>
        </ul>
        <h3 className="py-3">
          The current state of affairs and how technology can help:
        </h3>
        <p>
          The small business lending process at most banks today is highly
          manual and conducted across a multitude of unintegrated systems. This
          results in a small business lending operation that is inefficient,
          inconsistent, and expensive. Small businesses also face a unique set
          of challenges that make the process of getting credit difficult,
          including lack of knowledge of their credit risk and how they can
          improve their business credit standing, the opacity of banks’ credit
          assessment process, expectations, inconsistent requirements among
          banks in terms of the lending process, necessary data, and
          documentation. [8]
        </p>
        <img src={article4e} alt="" className="img-fluid" />
        <h3 className="clrGreen">
          Drawbacks of the Current Small Business Lending System:
        </h3>
        <ul className="py-5">
          <li>
            <h6>Inflexible Lending Criteria:</h6>
            <p>
              Traditional lenders have inflexible lending criteria, making it
              challenging for small businesses to meet their requirements.
            </p>
          </li>
          <li>
            <h6>Long Application Process:</h6>
            <p>
              The application process for small business loans can be lengthy
              and time-consuming, often requiring extensive documentation and
              personal guarantees.
            </p>
          </li>
          <li>
            <h6>Limited Options:</h6>
            <p>
              Small businesses often have limited options for accessing capital,
              as traditional lenders are often reluctant to lend to them.
            </p>
          </li>
          <li>
            <h6>Bias Against New Businesses:</h6>
            <p>
              New businesses often face bias from traditional lenders who are
              hesitant to lend to businesses without a proven track record of
              success.
            </p>
          </li>
          <li>
            <h6>Limited Access to Capital:</h6>
            <p>
              Small businesses often struggle to access the capital they need to
              start or grow their businesses, particularly if they have a
              limited credit history or lack collateral.
            </p>
          </li>
        </ul>
        <h3 className="clrGreen">
          In order to cater to the growing demand for small business capital
          requirements, the current system should consider the following
          changes:
        </h3>
        <ul className="py-5">
          <li>
            <h6>Embrace Technology:</h6>
            <p>
              Traditional lenders should adopt technology to streamline the
              lending process and reduce the costs associated with lending. This
              includes using algorithms and big data to assess the
              creditworthiness of borrowers and assigning them a risk rating.
            </p>
          </li>
          <li>
            <h6>Increase Access to Credit:</h6>
            <p>
              The current system should explore ways to increase access to
              credit for small businesses, including alternative lending
              platforms, peer-to-peer lending, mobile lending, and crowdfunding.
            </p>
          </li>
          <li>
            <h6>Simplify the Application Process:</h6>
            <p>
              The application process for small business loans should be
              simplified and made more accessible. This includes making the
              application process available online and reducing the amount of
              paperwork required.
            </p>
          </li>
          <li>
            <h6>Encourage Collaboration:</h6>
            <p>
              The current system should encourage collaboration between
              traditional lenders, alternative lenders, and other
              technology-based platforms to improve access to capital for small
              businesses.
            </p>
          </li>
          <li>
            <h6>Provide Support:</h6>
            <p>
              Small businesses often require support beyond just access to
              capital. The current system should provide support in the form of
              mentorship, education, and networking opportunities to help small
              businesses succeed.
            </p>
          </li>
          <li>
            <h6>Alternative credit scoring:</h6>
            <p>
              Many small businesses struggle to meet the strict lending criteria
              of traditional banks, which often rely on a borrower's credit
              score. Alternative credit scoring methods, such as analyzing a
              business's social media presence and online reviews, can provide a
              more accurate picture of a borrower's creditworthiness.
            </p>
          </li>
          <li>
            <h6>Automated Underwriting:</h6>
            <p>
              Automated underwriting systems can help lenders quickly process
              loan applications, reducing the time it takes for small businesses
              to access funding. By using algorithms and data analysis, these
              systems can quickly assess credit risk and provide lenders with
              real-time loan recommendations.
            </p>
          </li>
          <p>
            <i>
              <b>
                By implementing these changes, the current system can evolve to
                better cater to the growing demand of small business capital
                requirements and help small businesses succeed in today's
                rapidly changing business landscape.
              </b>
            </i>
          </p>
        </ul>
        <h3 className="pb-3">Technology has Got a Bigger Role to Play:</h3>
        <img src={article4f} alt="" className="img-fluid" />
        <p className="py-5">
          In recent years, there has been a trend toward greater collaboration
          between traditional lenders and fintech companies to improve access to
          capital for small businesses. This has led to the development of
          innovative financing models that leverage technology and data to
          assess creditworthiness and reduce risk.
        </p>
        <p className="pb-3">
          Alternative lending options such as crowdfunding, peer-to-peer
          lending, and online lenders have emerged as viable options for small
          businesses seeking financing. These platforms offer streamlined
          application processes, quick funding, and flexible repayment terms.
        </p>
        <p className="pb-3">
          Technology can play a crucial role in helping small businesses access
          the capital they need to grow and thrive. For example, fintech
          companies are using innovative technologies such as artificial
          intelligence and machine learning to develop more efficient and
          accurate credit scoring models. This makes it easier for small
          businesses to access financing, as lenders can make more informed
          lending decisions based on a broader range of data.
        </p>
        <p className="pb-3">
          Additionally, technologies, such as blockchain and smart contracts,
          have the potential to revolutionize small business lending by reducing
          the need for intermediaries, such as banks and credit unions.
          Blockchain technology can play big a role in developing more secure
          and efficient ways of processing transactions. This can help small
          businesses reduce transaction costs and improve cash flow, which can
          help them grow and expand.
        </p>
        <p className="pb-3">
          Some Online lending platforms use algorithms to analyze a variety of
          data points, including social media activity and accounting data, to
          determine a small business's creditworthiness. These platforms provide
          small businesses with quick access to financing, often within 24
          hours. Additionally, they can offer loans to small businesses that
          would be deemed too risky by traditional lenders.
        </p>
        <p>
          Fortunately, advancements in technology have begun to bridge this gap
          by providing innovative ways for small businesses to access capital.
          Some of the innovative ideas that can be used across the globe to make
          financing more accessible to entrepreneurs could be:
        </p>
        <ul className="py-5">
          <li>
            <h6>Peer-to-peer lending platforms:</h6>
            <p>
              Peer-to-peer (P2P) lending platforms connect small business owners
              with individual investors. These platforms use sophisticated
              algorithms to assess the creditworthiness of borrowers and match
              them with investors who are willing to lend money at competitive
              rates.
            </p>
          </li>
          <li>
            <h6>Digital credit scoring:</h6>
            <p>
              Digital credit scoring is a technology that uses data analytics to
              assess the creditworthiness of small business owners. It can
              include factors such as business performance data, social media
              activity, and other non-traditional data points to evaluate a
              business's creditworthiness.
            </p>
          </li>
          <li>
            <h6>Simplify the Application Process:</h6>
            <p>
              The application process for small business loans should be
              simplified and made more accessible. This includes making the
              application process available online and reducing the amount of
              paperwork required.
            </p>
          </li>
          <li>
            <h6>Online loan applications:</h6>
            <p>
              Online loan applications allow small business owners to apply for
              loans quickly and easily from the comfort of their own computers
              or mobile devices. These applications typically require less
              paperwork than traditional loan applications and can be processed
              much more quickly.
            </p>
          </li>
          <li>
            <h6>Mobile lending platforms:</h6>
            <p>
              Mobile lending platforms enable small business owners to access
              loans through their mobile phones. These platforms use digital
              credit scoring and other innovative technologies to assess
              creditworthiness and disburse loans in a matter of minutes.
            </p>
          </li>
          <li>
            <h6>Crowdfunding:</h6>
            <p>
              Crowdfunding platforms allow small business owners to raise money
              from a large number of individual investors. These platforms
              typically use social media and other digital marketing tools to
              promote crowdfunding campaigns and can be an effective way for
              small businesses to access funding.
            </p>
          </li>
          <li>
            <h6>Blockchain-based lending platforms:</h6>
            <p>
              Blockchain technology is a decentralized ledger that records
              transactions securely and transparently. It has the potential to
              revolutionize small business lending by providing a more secure
              and efficient way to manage loan applications, payments, and other
              financial transactions.
            </p>
            <p className="pt-3">
              One example of a blockchain-based small business lending platform
              is Bitbond. This platform uses blockchain technology to create a
              global marketplace where borrowers and lenders can connect and
              transact securely and transparently.
            </p>
          </li>
          <li>
            <h6>Online Marketplaces:</h6>
            <p>
              Online marketplaces can connect small businesses with multiple
              lenders, providing them with more loan options and competitive
              rates. These marketplaces can also streamline the loan application
              process, reducing the time and effort required to secure funding. 
            </p>
          </li>
          <li>
            <h6>Artificial intelligence-based lending:</h6>
            <p>
              Artificial intelligence (AI) can be used to analyze large amounts
              of data and make lending decisions quickly and accurately. This
              can be particularly useful for small businesses that have limited
              credit histories or are unable to provide traditional collateral.
            </p>
          </li>
        </ul>
        <p>
          Overall, these technology solutions have the potential to transform
          the small business lending sector by making it more efficient,
          accessible, and affordable for small business owners around the world.
        </p>
        <p className="py-3">
          In conclusion, small businesses around the world face significant
          challenges when it comes to accessing funds. However, the rise of
          technology has created new opportunities for small businesses to
          access the capital they need to grow and thrive. By leveraging online
          lending platforms and other innovative lending solutions, small
          businesses can overcome the traditional barriers to funding and
          achieve greater success.
        </p>
        <form
          className="commentForm p-5 my-5"
          action="https://formspree.io/f/mrgvowjn"
          method="POST"
        >
          <h3 class="mb-3">Leave a comment below</h3>
          <div class="mb-3">
            <input
              required
              name='email'
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="mb-3">
            <textarea
              name='comment'
              type="text"
              required
              class="form-control"
              id="comment"
              placeholder="Enter your comments here"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
        <h3 className="py-3">Bibliography</h3>
        <p>
          [1] Market Research Future, “Title: Alternative Lending Market to
          Witness Huge Growth by 2025 |,” August 2020.
        </p>
        <p>
          [2] Statista, “Value of small business lending in the United States
          from 2013 to 2023 (in billion U.S. dollars),” March 2023. [Online].
          Available:
          <a
            href="https://www.statista.com/statistics/1101151/small-business-lending-value-us/"
            target="_blank"
          >
            https://www.statista.com/statistics/1101151/small-business-lending-value-us/
          </a>
          .
        </p>
        <p>
          [3] SBA, [Online]. Available:
          <a
            href="https://www.sba.gov/blog/10-stats-explain-why-business-credit-important-small-business"
            target="_blank"
          >
            https://www.sba.gov/blog/10-stats-explain-why-business-credit-important-small-business
          </a>
          .
        </p>
        <p>
          [4] Government of Canada. (2021), “Government of Canada. (2021).
          Support for Small Business.,” [Online]. Available:
          <a
            href="https://www.ic.gc.ca/eic/site/icgc.nsf/eng/h_07078.html"
            target="_blank"
          >
            https://www.ic.gc.ca/eic/site/icgc.nsf/eng/h_07078.html
          </a>
          .
        </p>
        <p>
          [5] Government of Canada, "Small Business Statistics", , “Government
          of Canada, "Small Business Statistics",,” [Online]. Available:
          <a
            href="https://www.ic.gc.ca/eic/site/061.nsf/eng/h_03018.html"
            target="_blank"
          >
            https://www.ic.gc.ca/eic/site/061.nsf/eng/h_03018.html
          </a>
          .
        </p>
        <p>
          [6] International Finance Corporation (IFC) , “(International Finance
          Corporation (IFC) report r 2018 "Creating Markets in Creditworthy
          Small and Medium Enterprises"),” [Online].
        </p>
        <p>
          [7] World Bank Group. (2021). Women Entrepreneurs Finance Initiative
          (We-Fi). , [Online]. Available:
          <a
            href="https://www.worldbank.org/de/programs/women-entrepreneurs"
            target="_blank"
          >
            https://www.worldbank.org/de/programs/women-entrepreneurs
          </a>
          .
        </p>
        <p>
          [8] moodysanalytics, [Online]. Available:
          <a
            href="https://www.moodysanalytics.com/risk-perspectives-magazine/convergence-risk-finance-accounting-cecl/principles-and-practices/future-of-small-business-lending"
            target="_blank"
          >
            https://www.moodysanalytics.com/risk-perspectives-magazine/convergence-risk-finance-accounting-cecl/principles-and-practices/future-of-small-business-lending
          </a>
          .
        </p>
        <p className="text-center fw-bold pt-5">
          Tags:{" "}
          <span className="text-decoration-underline">product design</span>,{" "}
          <span className="text-decoration-underline">culture</span>
        </p>
        <div className="line my-5"></div>
        <h3 className="fw-bold text-center">Related Articles</h3>
        <BlogItems />
      </div>
    </div>
  );
};

export default ArticleFour;
