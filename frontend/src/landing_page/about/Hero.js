import React from 'react'

function Hero() {
  return (
    <div className=' container mt-5 text-center'>
      <h4>We pioneered the discount broking model in India.</h4>
      <h4>Now, we are breaking ground with our technology.</h4>
      <hr className="border  border-thin w-75 mx-auto my-4 mt-5" />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Left Column */}
          <div className="col-md-5 text-start fs-5 mt-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and “Rodha”, the Sanskrit
              word for barrier.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p>
              Over 1.6+ crore clients place billions of orders every year through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-5 text-start fs-5 mt-5">
            <p>
              In addition, we run a number of popular open online educational and
              community initiatives to empower retail traders and investors.
            </p>

            <p>
              <a href="#" className="text-primary text-decoration-none fw-normal">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a href="#" className="text-primary text-decoration-none fw-normal">
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="#" className="text-primary text-decoration-none fw-normal">
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="#" className="text-primary text-decoration-none fw-normal">
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero