import React from "react";
import $ from "jquery";

import i1 from "../../assets/images/project-1-480x361.jpg";
import i2 from "../../assets/images/project-1-480x361.jpg";
import i3 from "../../assets/images/project-2-480x361.jpg";
import i4 from "../../assets/images/project-2-480x361.jpg";
import i5 from "../../assets/images/project-3-480x361.jpg";
import i6 from "../../assets/images/project-3-480x361.jpg";
import i7 from "../../assets/images/project-4-480x361.jpg";
import i8 from "../../assets/images/project-4-480x361.jpg";
import i9 from "../../assets/images/project-5-480x361.jpg";
import i10 from "../../assets/images/project-5-480x361.jpg";
import i11 from "../../assets/images/project-6-480x361.jpg";
import i12 from "../../assets/images/project-6-480x361.jpg";
import i13 from "../../assets/images/project-7-480x361.jpg";
import i14 from "../../assets/images/project-7-480x361.jpg";
import i15 from "../../assets/images/project-8-480x361.jpg";
import i16 from "../../assets/images/project-8-480x361.jpg";

class Projects extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section className="bg-default" id="projects">
        <div className="container-fluid container-flex">
          <div className="row no-gutters">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i1}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>COMMERCIAL</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i2}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">COMMERCIAL</a>
                      </h6>
                      <p>
                        It’s probably the most diverse category of construction
                        to work in. But we’ve got experience…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i3}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>CULTURAL / LIFESTYLE</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i4}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">CULTURAL / LIFESTYLE</a>
                      </h6>
                      <p>
                        Working on a socially important building, such as a park
                        involves additional landscape construction expertise.…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i5}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>DATA / TECHNOLOGY</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i6}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">DATA / TECHNOLOGY</a>
                      </h6>
                      <p>
                        While constructing a headquarters building for an IT
                        company is relatively easy, we’ve also…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i7}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>EDUCATIONAL</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i8}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">EDUCATIONAL</a>
                      </h6>
                      <p>
                        Educational institutions can be much more creative than
                        your regular school or a college campus!…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i9}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>GOVERNMENT / MILITARY</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i10}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">GOVERNMENT / MILITARY</a>
                      </h6>
                      <p>
                        The US military and States governments used our
                        expertise and manpower to build numerous military-grade…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i11}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>HEALTHCARE</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i12}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">HEALTHCARE</a>
                      </h6>
                      <p>
                        We can build any type of healthcare buildings. From a
                        small private medical clinic to…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i13}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>MANUFACTURING / INDUSTRIAL</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i14}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">MANUFACTURING / INDUSTRIAL</a>
                      </h6>
                      <p>
                        Building a manufacturing facility or a factory house can
                        be much more challenging than building…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              {}
              <div className="thumb-creative">
                <div className="thumb-creative__inner">
                  <div className="thumb-creative__front">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i15}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6>WAREHOUSE / LOGISTICS</h6>
                    </div>
                  </div>
                  <div className="thumb-creative__back">
                    <figure className="thumb-creative__image-wrap">
                      <img
                        className="thumb-creative__image"
                        src={i16}
                        alt
                        width={480}
                        height={361}
                      />
                    </figure>
                    <div className="thumb-creative__content">
                      <h6 className="thumb-creative__title">
                        <a href="#">WAREHOUSE / LOGISTICS</a>
                      </h6>
                      <p>
                        While building a warehouse for an e-store is no easy
                        feat itself, think about building…
                      </p>
                      <a className="button button-link" href="#">
                        View projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
