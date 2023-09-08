import { blogs } from "../utils/blogs";

const Sidebar = ({ slug }: { slug: string }) => {
  const relatedBlogs = blogs.filter((item) => item.link !== slug);

  return (
    <div className="col-lg-4">
      <div className="right-sidebar">
        <div className="widget">
          <div className="widget-content">
            <input
              type="text"
              className="widget-search-inp"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="widget">
          <p className="widget-title">Related Articles</p>
          <div className="widget-content">
            <ul className="category-ul">
              {relatedBlogs.map((item) => (
                <li>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
