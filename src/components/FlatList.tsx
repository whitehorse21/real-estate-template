import Title from "./Title";
import FlatItem from "./FlatItem";
import { homes } from "../utils/homes";

const FlatList = () => {
  const title = {
    text: "Discover a place",
    description: "you'll love to live",
  };
  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          {homes.map((item) => (
            <FlatItem
              slug={item.link}
              thumbnail={item.thumbnail}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
