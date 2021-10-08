import React from "react";
import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/calvin-fitzerald-418x415.jpg";
import i2 from "../../assets/images/taylor-wilson-418x415.jpg";
import i3 from "../../assets/images/josh-wagner-418x415.jpg";
import i4 from "../../assets/images/luis-maxwell-418x415.jpg";
import i5 from "../../assets/images/ken-ferguson-418x415.jpg";
import i6 from "../../assets/images/edward-elliot-418x315.jpg";

const options = {
  loop: true,
  autoplay: true,
  smartSpeed: 450,
  dots: false,
  dotsEach: 1,
  nav: false,
  items: 4,
  navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
};

class Executive extends React.Component {
  render() {
    return (
      <section className="section-lg bg-default text-center">
        <div className="container">
          <h4 className="heading-decorated">Executive managers</h4>
          <div className="row row-70 offset-top-1">
            <div className="col-12">
              {}
              <div
                // className="owl-carousel"
                data-items={1}
                data-sm-items={2}
                data-md-items={2}
                data-lg-items={3}
                data-xl-items={3}
                data-dots="true"
                data-nav="false"
                data-stage-padding={15}
                data-loop="false"
                data-margin={30}
                data-mouse-drag="false"
              >
                <OwlCarousel {...options}>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i1}
                      alt
                      width={418}
                      height={415}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Calvin Fitzgerald</a>
                      </p>
                      <p className="thumb-flat__subtitle">President</p>
                      <p>
                        Calvin Fitzgerald is an established and well-respected
                        expert in the construction industry. With more than 35
                        years of practical experience in the business, Calvin
                        has built his career on bringing the most outlandish
                        conceptual visions from blueprints to a street next to
                        yours... His leadership skills cemented Construction's
                        dominating positions among our competitors.
                      </p>
                    </div>
                  </article>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i2}
                      alt
                      width={418}
                      height={415}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Taylor Wilson</a>
                      </p>
                      <p className="thumb-flat__subtitle">
                        Chief Executive Officer
                      </p>
                      <p>
                        Taylor's been involved in the construction business
                        since the 1970's... His profound experience in building
                        miscellaneous types of projects and his innovative
                        mindset makes him the leading force in our company. The
                        BIM and Db methods that he implemented are now the
                        lynchpins of our business operations with all of our
                        clients...
                      </p>
                    </div>
                  </article>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i3}
                      alt
                      width={418}
                      height={415}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Josh Wagner</a>
                      </p>
                      <p className="thumb-flat__subtitle">
                        Chief Design Officer
                      </p>
                      <p>
                        Josh leads our creative team of designers and
                        engineers...His proven ability to manage the most
                        complex projects and bring the craziest concepts to life
                        is what makes him as efficient as he is. Together, this
                        creative team can be the launchpad of any project,
                        giving it a head start at the earliest stages of the
                        construction project's planning.
                      </p>
                    </div>
                  </article>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i4}
                      alt
                      width={418}
                      height={415}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Luis Maxwell</a>
                      </p>
                      <p className="thumb-flat__subtitle">
                        Contractors Operations Head
                      </p>
                      <p>
                        While we do all the pre-construction planning and
                        sketching, scheduling and managing on an in-house basis,
                        we hire a lot of 3rd party contractors for the actual
                        on-site work. Luis Maxwell is the person to manage all
                        our contractors across all of our projects being
                        currently in development.
                      </p>
                    </div>
                  </article>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i5}
                      alt
                      width={418}
                      height={415}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Ken Ferguson</a>
                      </p>
                      <p className="thumb-flat__subtitle">
                        Chief Financial Officer
                      </p>
                      <p>
                        Ken's been working as a chief financial analyst for
                        Bechtel; Fluor Corp.; CB&I and Kiewit Corp. During those
                        years he excelled in this field, efficiently cutting the
                        side expenses that were bringing those top contractors
                        down. Few years ago we managed to get him onboard, and
                        not even a full year later we've had a our returns in a
                        form of an optimized expenses budget!
                      </p>
                    </div>
                  </article>
                  <article className="thumb-flat">
                    <img
                      className="thumb-flat__image"
                      src={i6}
                      alt
                      width={418}
                      height={315}
                    />
                    <div className="thumb-flat__body">
                      <p className="heading-6">
                        <a href="#">Edward Elliott</a>
                      </p>
                      <p className="thumb-flat__subtitle">
                        Vice President of Operations
                      </p>
                      <p>
                        Previously Edward owned his own mid-sized contracting
                        company. That kind of a first hand, entrepreneurial
                        experience in managing all the processes and operations
                        for a construction company got our attention. Last year
                        we invited him to join our team, which he fortunately
                        did...
                      </p>
                    </div>
                  </article>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Executive;
