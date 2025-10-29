// import React from 'react'

// function Signup() {
//   return (
//     <div className='container'>
//         <div className='row text-center mt-5'>
//             <div className='col-'>
//                 <h2>Open a free demat and trading account online</h2>
//                 <p className='fs-3'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
//             </div>
//         </div>
//         <div className='col-6 mt-5 mb-5' style={{margin : "0"}}>
//                 <img src='media/images/signuppage.png' alt='Signup'></img>
//         </div>
//     </div>
//   )
// }

// export default Signup


import React from "react";
import OpenAccount from "../OpenAccount"
function Signup() {
  return (
    <div className="container mt-5 mb-5">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Open a free demat and trading account online</h2>
        <p className="fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      {/* Main Content Section */}
      <div className="row align-items-center justify-content-center">
        {/* Left Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/signuppage.png"
            alt="Signup Illustration"
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Signup Box */}
        <div className="col-md-4">
          <div className="p-4  rounded-3 ">
            <h5 className="mb-3 fs-3">Signup now</h5>
            <p className="text-muted small ">
              Or track your existing application
            </p>

            <div className="input-group mb-3">
              <span className="input-group-text bg-light">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
                maxLength="10"
              />
            </div>

            <button className="btn btn-primary w-100 mb-3">Get OTP</button>

            <p className="small text-muted">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-decoration-none">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-decoration-none">
                privacy policy
              </a>
              .
            </p>

            <p className="small mt-3">
              Looking to open NRI account?{" "}
              <a href="#" className="text-primary text-decoration-none">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
        {/* -------------------- INVESTMENT OPTIONS SECTION -------------------- */}
      <div className="text-center p-5 mt-5 ">
        <h4 className="fw-semibold mb-4">
          Investment options with Zerodha demat account
        </h4>

        <div className="row justify-content-center mt-5 g-4">
          {/* Stocks */}
          <div className="col-md-5 d-flex align-items-start">
            <img
              src="media/images/stocks.png"
              alt="Stocks"
              className="me-3"
              style={{ width: "100px" }}
            />
            <div className="text-start">
              <h5 className="fw-bold">Stocks</h5>
              <p className="text-muted mb-0">Invest in all exchange-listed securities</p>
            </div>
          </div>

          {/* Mutual Funds */}
          <div className="col-md-5 d-flex align-items-start">
            <img
              src="media/images/mutualfunds.png"
              alt="Mutual Funds"
              className="me-3"
              style={{ width: "100px" }}
            />
            <div className="text-start">
              <h5 className="fw-bold">Mutual funds</h5>
              <p className="text-muted mb-0">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>

          {/* IPO */}
          <div className="col-md-5 d-flex align-items-start">
            <img
              src="media/images/IPO.png"
              alt="IPO"
              className="me-3"
              style={{ width: "100px" }}
            />
            <div className="text-start">
              <h5 className="fw-bold">IPO</h5>
              <p className="text-muted mb-0">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>

          {/* Futures & Options */}
          <div className="col-md-5 d-flex align-items-start">
            <img
              src="media/images/Futures&options.png"
              alt="Futures & Options"
              className="me-3"
              style={{ width: "100px" }}
            />
            <div className="text-start">
              <h5 className="fw-bold">Futures & options</h5>
              <p className="text-muted mb-0">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <button className="btn btn-primary mt-5 px-4 py-2 fs-5">
          Explore Investments
        </button>
      </div>
        {/* -------------------- STEPS SECTION -------------------- */}
      <div className="mt-5 py-5 bg-light-fill bg-grey rounded-3">
        <div className="text-center mb-4">
          <h4 className="fw-semibold">
            Steps to open a demat account with Zerodha
          </h4>
        </div>

        <div className="row align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="media/images/steps.png"
              alt="Steps to open account"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Right Steps List */}
          <div className="col-md-4">
            <ul className="list-unstyled fs-5">
              <li className="mb-3">
                <strong className="rounded-pill border p-1">01</strong> &nbsp; Enter the requested details
              </li>
              <li className="mb-3">
                <strong className="rounded-pill border p-1">02</strong> &nbsp; Complete e-sign & verification
              </li>
              <li>
                <strong className="rounded-pill border p-1">03</strong> &nbsp; Start investing!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="media/images/pricingsection.png" alt="pricing section "></img>
            <h4>Benefits of opening a Zerodha demat account</h4>
          </div>
          <div className="col-6">
            <div className="mb-5">
            <h5>Unbeatable pricing</h5>
            <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
          </div>
          <div className="mb-5">
            <h5>Best investing experience</h5>
            <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
          </div>
          <div className="mb-5">
            <h5>No spam or gimmicks</h5>
            <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
          </div>
          <div className="mb-5">
            <h5>The Zerodha universe</h5>
            <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
          </div>
          </div>
        </div>
      </div>
       {/* -------------------- ACCOUNT TYPES SECTION -------------------- */}
      <div className="container mt-5 text-center">
        <h4 className="fw-semibold mb-4">Explore different account types</h4>
        <div className="row justify-content-center g-4 mt-4">
          {[
            {
              title: "Individual Account",
              desc: "Invest in equity, mutual funds and derivatives",
              icon: "👤",
            },
            {
              title: "HUF Account",
              desc: "Make tax-efficient investments for your family",
              icon: "👪",
            },
            {
              title: "NRI Account",
              desc: "Invest in equity, mutual funds, debentures, and more",
              icon: "🌐",
            },
            {
              title: "Minor Account",
              desc: "Teach your little ones about money & invest for their future with them",
              icon: "🧒",
            },
            {
              title: "Corporate / LLP / Partnership",
              desc: "Manage your business surplus and investments easily",
              icon: "🏢",
            },
          ].map((account, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="border rounded-3 p-4 h-100 shadow-sm hover-shadow">
                <div className="fs-2 mb-3">{account.icon}</div>
                <h6 className="fw-bold">{account.title}</h6>
                <p className="text-muted small mb-0">{account.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
            {/* -------------------- FAQ SECTION -------------------- */}
      <div className="container mt-5 mb-5">
        <h4 className="fw-semibold mb-4 ">FAQs</h4>

        <div className="accordion" id="faqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item mb-3 border-0 border-bottom">
            <h2 className="accordion-header" id="faqOne">
              <button
                className="accordion-button collapsed bg-white shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is a Zerodha account?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="faqOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">
                A Zerodha account allows you to invest and trade in stocks, mutual funds,
                and other financial instruments through an online demat and trading account.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item mb-3 border-0 border-bottom">
            <h2 className="accordion-header" id="faqTwo">
              <button
                className="accordion-button collapsed bg-white shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What documents are required to open a demat account?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">
                You’ll need a PAN card, Aadhaar card, a valid bank account, and proof of
                address. You also need a mobile number linked with Aadhaar for e-signing.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item mb-3 border-0 border-bottom">
            <h2 className="accordion-header" id="faqThree">
              <button
                className="accordion-button collapsed bg-white shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is Zerodha account opening free?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faqThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">
                Zerodha offers free account opening for investors during special promotional
                periods. Otherwise, nominal charges may apply for equity and commodity accounts.
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item mb-3 border-0 border-bottom">
            <h2 className="accordion-header" id="faqFour">
              <button
                className="accordion-button collapsed bg-white shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Are there any maintenance charges for a demat account?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="faqFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">
                Yes, Zerodha charges a small annual maintenance fee for demat accounts.
                This covers account servicing and depository charges.
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="accordion-item mb-3 border-0 border-bottom">
            <h2 className="accordion-header" id="faqFive">
              <button
                className="accordion-button collapsed bg-white shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Can I open a demat account without a bank account?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="faqFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted">
                No, a linked bank account is required to open a demat account as it facilitates
                fund transfers for your investments and withdrawals.
              </div>
            </div>
          </div>
        </div>
      </div>
          <OpenAccount></OpenAccount>
    </div>
  );
}

export default Signup;
