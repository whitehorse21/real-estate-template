import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [search, setSearch] = useState<String[]>([]);
  const [find, setFind] = useState<String[]>([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    setSearch(["a", "b", "test", "mb"]);
  }, []);

  const findSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    const filteredCountries = search.filter((item) =>
      item.indexOf(e.target.value) > -1 ? item : null
    );
    e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
  };

  const findResult = () => {
    if (find.length === 0 && word.length > 0) {
      return <div className="find-search">Not Found</div>;
    }
    if (find.length > 0) {
      return (
        <div className="find-search">
          {find.map((item, index) => {
            return (
              <Link key={index} to="#">
                {item}
              </Link>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div
      className="banner d-flex align-items-center"
      style={{ backgroundImage: `url(${"/img/banner.jpg"})` }}
    >
      <div className="bg-custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="banner-area text-center pt-4 pb-4">
                <p>Explore homes with us ...</p>
                <h2 className="mt-2 mb-4 banner-title">
                  <strong>Green World</strong>
                </h2>
                <div className="search-area">
                  <input
                    value={word}
                    onChange={(e) => findSearch(e)}
                    type="text"
                    className="inp-search"
                    placeholder="Search"
                  />
                  <button className="btn-search m-2">Search All</button>
                </div>
                {findResult()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
