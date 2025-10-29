import React from 'react';

function Team() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Section Heading */}
        <div className="col-12 mb-4">
          <h3 className="text-center">People</h3>
        </div>

        {/* Left Column - Image and Info */}
        <div className="col-md-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="team member"
            className="img-fluid rounded-circle shadow"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              marginBottom: '15px',
            }}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p className="text-secondary">Founder & CEO</p>
        </div>

        {/* Right Column - Description */}
        <div className="col-md-7 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{' '}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
