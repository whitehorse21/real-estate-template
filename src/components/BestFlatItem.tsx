import { Link } from "react-router-dom";

interface BestFlatItemProps {
  flatState: string;
  thumbnail: string;
}

const BestFlatItem = ({ flatState, thumbnail }: BestFlatItemProps) => {
  return (
    <div className="best-estate">
      <div className="best-estate-item">
        <div className="best-estate-img-area">
          <img className="best-estate-img" src={thumbnail} alt="flat" />
          <div
            className={`best-estate-state ${
              flatState === "For Rent" ? "bg-green" : "bg-red"
            }`}
          >
            {flatState}
          </div>
        </div>
        <div className="best-estate-content">
          <h4>
            <Link to="/">765 Market St</Link>
          </h4>
          <span>
            <Link to="/">San Francisco, CA</Link>
          </span>
        </div>
        <div className="best-estate-features">
          <div className="d-flex">
            <div className="best-estate-feature">
              <i className="fas fa-check-circle"></i>
              <span>3 Beds</span>
            </div>
            <div className="best-estate-feature">
              <i className="fas fa-check-circle"></i>
              <span>2 Bathrooms</span>
            </div>
          </div>
          <h5 className="best-estate-price">$650</h5>
        </div>
      </div>
    </div>
  );
};

export default BestFlatItem;
