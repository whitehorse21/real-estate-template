import Sidebar from "./Sidebar";
import { blogs } from "../utils/blogs";
import { useParams } from "react-router-dom";
interface BlogDetailProps {
  thumbnail: string;
}

const BlogDetail = () => {
  const params = useParams<{ slug: string }>();
  const selBlog = blogs.filter((item) => item.link === params.slug)[0];

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-detail">
            <img className="w-100" src={selBlog.thumbnail} alt="product" />
            <span className="blog-detail-category">BLOG</span>
            <h1 className="blog-detail-title">{selBlog.title}</h1>
            <span className="blog-detail-date">{selBlog.date}</span>
            <p className="blog-detail-content">{selBlog.description}</p>
            {/*<h2 className="blog-detail-alttitle">Lorem ipsum dolor sit amet</h2> */}
            <p className="blog-detail-content">
              If the high prices and fast pace of the long-running seller’s
              market have delayed your home-buying plans, we’ve got good news:
              there are signs that a little relief is on the way. According to
              our research, there’s a national trend towards price cuts, homes
              selling below asking, and homes staying on the market a little
              longer than breakneck speed. Though we found that the market is
              shifting in favor of buyers in 50 out of the 100 largest metros (a
              tenfold increase compared to a year ago), there are some caveats.
              For one, “shifting” does not mean a market has completely shifted
              in favor of buyers—just that there are some signs of change. And
              even where it’s present, the trend isn’t metro-wide. The shift
              away from a seller’s market varies greatly by neighborhood, and it
              doesn’t always mean lower prices. For example, in Atlanta, some
              ZIP codes saw days on the market increase by 12.1% and had a
              median home value of $299,400. But other ZIP codes had days on the
              market decrease by 12.7%, but had a lower median home value of
              $227,800. This data also supports another finding from our
              research, which is that more expensive neighborhoods had the more
              noticeable shift towards a buyers market. What’s the takeaway? To
              find the best markets for home buyers right now, you’ve got to
              look neighborhood by neighborhood. Curious about which ones are
              starting to give buyers an advantage? Here are six standout ZIP
              codes that are “on sale” now in major metro areas.
            </p>
          </div>
        </div>
        <Sidebar slug={params.slug!} />
      </div>
    </div>
  );
};
export default BlogDetail;
