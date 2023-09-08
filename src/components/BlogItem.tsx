import { Link } from "react-router-dom";

interface BlogItemProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  date: string;
  commentAmount: number;
}

const BlogItem = ({
  title,
  link,
  thumbnail,
  description,
  date,
  commentAmount,
}: BlogItemProps) => {
  return (
    <div className="col-lg-4">
      <div className="blog-item">
        <div className="blog-img">
          <img src={thumbnail} alt="product" className="w-100 h-100" />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">
            <Link to={`/blog/${link}`}>{title}</Link>
          </h2>
          <div className="blog-info">
            <div className="blog-info-item">
              <i className="far fa-calendar-alt "></i>
              <span>{date}</span>
            </div>
            <div className="blog-info-item">
              <i className="far fa-comments"></i>
              <span>{`${commentAmount} Comments`}</span>
            </div>
          </div>
          <div className="blog-text">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
