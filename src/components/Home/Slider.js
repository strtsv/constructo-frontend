import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/parallax-1.jpg";
import i2 from "../../assets/images/parallax-2.jpg";
import i3 from "../../assets/images/parallax-3.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      speed: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
    });
  }
  render() {
    return (
      <section id="home">
        <div
          className="swiper-container swiper-slider swiper-slider_fullheight bg-gray-dark"
          data-simulate-touch="false"
          data-loop="true"
          data-autoplay={4500}
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              // style={{ backgroundImage: "url(" + i1 + ")" }}
              data-slide-bg={i1}
            >
              <div className="swiper-slide-caption text-center">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                      <h1
                        className="heading-decorated"
                        data-caption-animate="fadeInUpSmall"
                      >
                        Construction
                      </h1>
                      <h4
                        className="text-boxed"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        See how a 10-stories TOWER IS being built, in a
                        time-lapse!
                      </h4>
                      <a
                        className="button button-primary"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={350}
                        href="#modal"
                        data-toggle="modal"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide text-center"
              // style={{ backgroundImage: "url(" + i2 + ")" }}
              data-slide-bg={i2}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                      <h1
                        className="heading-decorated"
                        data-caption-animate="fadeInUpSmall"
                      >
                        Discounts
                      </h1>
                      <h4
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        Summer discounts for big construction projects!
                      </h4>
                      <a
                        className="button button-primary"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={350}
                        href="#modal"
                        data-toggle="modal"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide text-center"
              // style={{ backgroundImage: "url(" + i3 + ")" }}
              data-slide-bg={i3}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                      <h1
                        className="heading-decorated"
                        data-caption-animate="fadeInUpSmall"
                      >
                        Projects
                      </h1>
                      <h4
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        This year we took more complex constructions than ever
                        before...
                      </h4>
                      <a
                        className="button button-primary"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={350}
                        href="#modal"
                        data-toggle="modal"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="swiper-pagination" />
          {}
          <div className="swiper-button-prev linear-icon-chevron-left" />
          <div className="swiper-button-next linear-icon-chevron-right" />
        </div>
      </section>
    );
  }
}

export default Slider;
