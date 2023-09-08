import BlogItem from "./BlogItem";
import { blogs } from "../utils/blogs";

const Blog = () => {
  return (
    <section className="blog">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Green World Real Estate</h1>
              <h2 className="page-description">Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            {blogs.map((item) => (
              <BlogItem
                link={item.link}
                title={item.title}
                thumbnail={item.thumbnail}
                description={item.description}
                date={item.date}
                commentAmount={item.commentAmount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
