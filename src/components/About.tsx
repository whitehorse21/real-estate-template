const About = () => {
  return (
    <section className="about">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Green World Real Estate</h1>
              <h2 className="page-description">About</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="/img/house1.png" alt="product" className="w-100" />
            </div>
            <div className="col-lg-6">
              <div className="about-item">
                <div className="title">GW Real Estate</div>
                <div className="about-text">
                  With 35+ filters and custom keyword search, Green World Real
                  Estate can help you easily find a home or apartment for rent
                  that you'll love.
                </div>
                <div className="about-features">
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> Buy a home
                  </p>
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> Rent a home
                  </p>
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> See
                    neighborhoods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
