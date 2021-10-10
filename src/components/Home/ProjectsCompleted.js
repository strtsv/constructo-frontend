import React from "react";
import $ from "jquery";

import i from "../../assets/images/slider-slide-1-1920x1080.jpg";

class ProjectsCompleted extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section bg-gray-dark parallax-container"
        data-parallax-img={i}
      >
        <div className="parallax-content">
          <div className="section-lg text-center">
            <div className="container">
              <div className="row justify-content-md-center row-50">
                <div className="col-md-6 col-lg-3">
                  {}
                  <article className="box-counter">
                    <div className="box-counter__wrap">
                      <div className="counter">250</div>
                    </div>
                    <p className="box-counter__title">Projects Completed</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3">
                  {}
                  <article className="box-counter">
                    <div className="box-counter__wrap">
                      <div className="counter">302</div>
                    </div>
                    <p className="box-counter__title">Staff members</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3">
                  {}
                  <article className="box-counter">
                    <div className="box-counter__wrap">
                      <div className="counter">15</div>
                    </div>
                    <p className="box-counter__title">Million Man-hours</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3">
                  {}
                  <article className="box-counter">
                    <div className="box-counter__wrap">
                      <div className="counter">99</div>
                    </div>
                    <p className="box-counter__title">Awards won</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsCompleted;
