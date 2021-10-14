import React from "react";
import $ from "jquery";

import i from "../../assets/images/project-category-healthcare.jpg";

import i1 from "../../assets/images/deborah-quagmire-120x120.jpg";
import i2 from "../../assets/images/benedict-arnold-120x120.jpg";

class Testimonials extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section parallax-container"
        data-parallax-img={i}
        data-img-src={i}
        id="testimonials"
      >
        <div className="parallax-content">
          <section className="section-lg context-dark">
            <div className="container">
              <div className="row row-50">
                <div className="col-md-6">
                  {}
                  <div className="quote-default quote-default_left">
                    <div className="quote-default__image">
                      <img src={i1} alt width={120} height={120} />
                    </div>
                    <svg
                      className="quote-default__mark"
                      version="1.1"
                      baseProfile="tiny"
                      xmlns="https://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30.234px"
                      height="23.484px"
                      viewBox="0 0 30.234 23.484"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M12.129,0v1.723c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959              c0,0.445,0.07,0.773,0.211,0.984c0.093,0.141,0.199,0.211,0.316,0.211c0.117,0,0.293-0.082,0.527-0.246              c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.519,0.545,3.551,1.635c1.031,1.09,1.547,2.385,1.547,3.885              c0,1.57-0.592,2.953-1.775,4.148c-1.184,1.195-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              C0.715,19.441,0,17.274,0,14.555c0-3.164,0.972-6,2.918-8.508C4.863,3.539,7.933,1.524,12.129,0z M29.039,0v1.723              c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959c0,0.445,0.07,0.773,0.211,0.984              c0.094,0.141,0.199,0.211,0.316,0.211s0.293-0.082,0.527-0.246c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.52,0.545,3.551,1.635              s1.547,2.385,1.547,3.885c0,1.57-0.592,2.953-1.775,4.148s-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              s-2.145-3.785-2.145-6.504c0-3.164,0.973-6,2.918-8.508C21.773,3.539,24.844,1.524,29.039,0z" />
                      </g>
                    </svg>
                    <div className="quote-default__text">
                      <p className="q">
                        As an official from North Dakota's state government, I
                        want to thank your construction company. On behalf of
                        the citizens of the state, we're so grateful for this
                        new, innovative building! This allows North Dakota to
                        hold its legislative operations in a contemporary,
                        progressive architectural environment!
                      </p>
                    </div>
                    <p className="quote-default__cite text-primary">
                      Deborah Quagmire
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  {}
                  <div className="quote-default quote-default_left">
                    <div className="quote-default__image">
                      <img src={i2} alt width={120} height={120} />
                    </div>
                    <svg
                      className="quote-default__mark"
                      version="1.1"
                      baseProfile="tiny"
                      xmlns="https://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30.234px"
                      height="23.484px"
                      viewBox="0 0 30.234 23.484"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M12.129,0v1.723c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959              c0,0.445,0.07,0.773,0.211,0.984c0.093,0.141,0.199,0.211,0.316,0.211c0.117,0,0.293-0.082,0.527-0.246              c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.519,0.545,3.551,1.635c1.031,1.09,1.547,2.385,1.547,3.885              c0,1.57-0.592,2.953-1.775,4.148c-1.184,1.195-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              C0.715,19.441,0,17.274,0,14.555c0-3.164,0.972-6,2.918-8.508C4.863,3.539,7.933,1.524,12.129,0z M29.039,0v1.723              c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959c0,0.445,0.07,0.773,0.211,0.984              c0.094,0.141,0.199,0.211,0.316,0.211s0.293-0.082,0.527-0.246c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.52,0.545,3.551,1.635              s1.547,2.385,1.547,3.885c0,1.57-0.592,2.953-1.775,4.148s-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              s-2.145-3.785-2.145-6.504c0-3.164,0.973-6,2.918-8.508C21.773,3.539,24.844,1.524,29.039,0z" />
                      </g>
                    </svg>
                    <div className="quote-default__text">
                      <p className="q">
                        This bridge project was funded by small and medium
                        business of Rhode Island, as well as by its private
                        citizens. After the hurricane hit our shores recently,
                        we all were concerned for the Okaloppo river not having
                        a proper landline connection. But now, after
                        Construction company finished the project, the county
                        can enjoy its new, beautiful infrastructure!
                      </p>
                    </div>
                    <p className="quote-default__cite text-primary">
                      Benedict Arnold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Testimonials;
