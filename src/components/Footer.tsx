import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <i className="fas fa-home"></i>
            <span className="footer-other-text d-block mt-3 mb-3">
              With over 1 million+ homes for sale available on the website,
              Green World Real Estate can match you with a house you will want
              to call home.
            </span>
            <div className="footer-social">
              <div className="footer-social-item">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="footer-social-item">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="footer-social-item">
                {" "}
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <p className="footer-title">Menu</p>
            <ul className="footer-ul">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div>
              <p className="footer-title">Categories</p>
              <ul className="footer-ul">
                <li>Cheap Apartments for Rent Near Me</li>
                <li>Pet Friendly Apartments Near Me</li>
                <li>Townhomes for Rent Near Me</li>
                <li>Condos for Sale Near me</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <p className="footer-title">Contact</p>
            <ul className="footer-ul">
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-clock"></i>
                </div>{" "}
                <span>09:00-20:00</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-envelope"></i>
                </div>{" "}
                <span>whitehorse9021@gmail.com</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-map-marker-alt"></i>
                </div>{" "}
                <span>Dallas, TX, USA </span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-phone-alt"></i>
                </div>{" "}
                <span>+1(234)-567-9012</span>
              </li>
            </ul>
          </div>
          {/*<div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Footer;
