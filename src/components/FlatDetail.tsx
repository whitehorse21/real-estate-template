import React from "react";
import ImageGallery from "react-image-gallery";
import { homes } from "../utils/homes";
import { useParams } from "react-router-dom";

const FlatDetail = () => {
  const params = useParams<{ slug: string }>();
  const selHome = homes.filter((item) => item.link === params.slug)[0];
  if (!selHome) {
    return <div>Not Found</div>;
  }

  const recentlyHomes = homes.filter(
    (item) => !selHome.gallery.includes(item.thumbnail)
  );

  const images = selHome.gallery.map((item) => {
    return {
      original: item,
      thumbnail: item,
    };
  });

  return (
    <div className="flat-detail">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">DETAIL</h1>
              <h2 className="page-description">{selHome.title}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">{selHome.title}</h3>
                <p className="fd-address">
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>
                  {selHome.location}
                </p>
              </div>
              <div>
                <span className="fd-price">{`$${selHome.price}`}</span>
              </div>
            </div>
            <ImageGallery
              flickThreshold={0.5}
              slideDuration={0}
              items={images}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <div className="row">
              <div className="col-lg-8">
                <div className="fd-item">
                  <h4>Description</h4>
                  <p>{selHome.description}</p>
                </div>
                <div className="fd-item fd-property-detail">
                  <h4>Property Details</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>Kitchen: </span>
                      <span>1</span>
                    </div>
                    <div className="col-lg-4">
                      <span>All Rooms: </span>
                      <span>5</span>
                    </div>
                    <div className="col-lg-4">
                      <span>Parking: </span>
                      <span>Available</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>Pet: </span>
                      <span>Available</span>
                    </div>
                    <div className="col-lg-4">
                      <span>Outdoor: </span>
                      <span>No Info</span>
                    </div>
                    <div className="col-lg-4">
                      <span>A/C: </span>
                      <span>Heating & Cooling</span>
                    </div>
                  </div>
                </div>
                <div className="fd-item fd-features">
                  <h4>Features</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>
                        On-site reception, management and security service
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>Printing services</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>Vending machine</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>Free bicycle storage</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>WIFI throughout building</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>Residents recreational facilities</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <i className="fa fa-check"></i>
                      <span>
                        Large lounge with large screen TV, sofas and chairs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="fd-item">
                  <h4>Maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107268.41084880604!2d-96.87956377649768!3d32.841601899197734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sru!4v1694161378995!5m2!1sen!2sru"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  {recentlyHomes.map((item) => (
                    <div className="recently-item">
                      <img src={item.thumbnail} alt="detail" width="50px" />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
