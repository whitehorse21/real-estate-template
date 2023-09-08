import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import BestFlatItem from "./BestFlatItem";

export default class BestFlatList extends Component {
  render() {
    const title = {
      text: "Best Places",
      description: "You will love them here",
    };

    const settings = {
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoPlay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <section className="section-best-estate">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Title title={title.text} description={title.description} />
              <Slider {...settings}>
                <BestFlatItem
                  flatState="For Rent"
                  thumbnail="/img/house7.png"
                />
                <BestFlatItem
                  flatState="For Sale"
                  thumbnail="/img/house8.png"
                />
                <BestFlatItem
                  flatState="For Rent"
                  thumbnail="/img/house9.png"
                />
                <BestFlatItem
                  flatState="For Rent"
                  thumbnail="/img/house10.png"
                />
                <BestFlatItem
                  flatState="For Sale"
                  thumbnail="/img/house11.png"
                />
                <BestFlatItem
                  flatState="For Rent"
                  thumbnail="/img/house12.png"
                />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
