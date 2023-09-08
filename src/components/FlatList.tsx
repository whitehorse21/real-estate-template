import Title from "./Title";
import FlatItem from "./FlatItem";

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
          <FlatItem slug="lorem-ipsum-1" thumbnail="/img/house1.png" />
          <FlatItem slug="lorem-ipsum-2" thumbnail="/img/house2.png" />
          <FlatItem slug="lorem-ipsum-3" thumbnail="/img/house3.png" />
          <FlatItem slug="lorem-ipsum-4" thumbnail="/img/house4.png" />
          <FlatItem slug="lorem-ipsum-5" thumbnail="/img/house5.png" />
          <FlatItem slug="lorem-ipsum-6" thumbnail="/img/house6.png" />
        </div>
      </div>
    </section>
  );
};

export default FlatList;
