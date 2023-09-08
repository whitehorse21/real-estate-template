const TeamItem = ({
  avatar,
  name,
  position,
}: {
  avatar: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="col-lg-4">
      <div className="team">
        <div className="team-img">
          <img src={avatar} alt="team" className="zoom-image" />
        </div>
        <div className="team-info">
          <h5 className="team-name">{name}</h5>
          <h6 className="team-position">{position}</h6>
          <div className="social-links">
            <div className="social-item">
              <i className="fab fa-facebook"></i>
            </div>
            <div className="social-item">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="social-item">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-item">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
