import React from "react";

import i1 from "../../assets/images/home-post-1-418x315.jpg";
import i2 from "../../assets/images/home-post-2-418x315.jpg";
import i3 from "../../assets/images/home-post-3-418x315.jpg";

class Posts extends React.Component {
  render() {
    return (
      <section className="section-md bg-gray-lighter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="heading-decorated">Recent News </h4>
            </div>
          </div>
          <div className="row row-60">
            <div className="col-md-6 col-xl-4">
              {}
              <article className="post-classic post-minimal">
                <img src={i1} alt width={418} height={315} />
                <div className="post-classic-title">
                  <h6>
                    <a href="#">Future proofing hospitals</a>
                  </h6>
                </div>
                <div className="post-meta">
                  <div className="group">
                    <a href="#">
                      <time dateTime={2017}>Jan.20, 2017</time>
                    </a>
                    <a className="meta-author" href="#">
                      by Brian Williamson
                    </a>
                  </div>
                </div>
                <div className="post-classic-body">
                  <p>
                    By improving the physical layout of hospitals and medical
                    facilities, we can enhance and increase safety mechanisms,
                    improve care, and…
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-4">
              {}
              <article className="post-classic post-minimal">
                <img src={i2} alt width={418} height={315} />
                <div className="post-classic-title">
                  <h6>
                    <a href="#">Bike parts warehouse, DE</a>
                  </h6>
                </div>
                <div className="post-meta">
                  <div className="group">
                    <a href="#">
                      <time dateTime={2017}>Jan.20, 2017</time>
                    </a>
                    <a className="meta-author" href="#">
                      by Brian Williamson
                    </a>
                  </div>
                </div>
                <div className="post-classic-body">
                  <p>
                    Delaware proved to be a very friendly place to work at…
                    While invited there for completing a mid-sized warehouse
                    for…
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-4">
              {}
              <article className="post-classic post-minimal">
                <img src={i3} alt width={418} height={315} />
                <div className="post-classic-title">
                  <h6>
                    <a href="#">Joy Hotel & Casino</a>
                  </h6>
                </div>
                <div className="post-meta">
                  <div className="group">
                    <a href="#">
                      <time dateTime={2017}>Jan.20, 2017</time>
                    </a>
                    <a className="meta-author" href="#">
                      by Brian Williamson
                    </a>
                  </div>
                </div>
                <div className="post-classic-body">
                  <p>
                    This hotel & casino complex is our most recent completed
                    building… The whole structure that took us 6 months to…
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
