import React from "react";

import i from "../../assets/images/home-1-652x491.jpg";

class History extends React.Component {
  render() {
    return (
      <section className="section-md bg-gray-lighter" id="about">
        <div className="container">
          <div className="row justify-content-md-center row-30 row-md-50">
            <div className="col-md-11 col-lg-10 col-xl-6">
              <h4 className="heading-decorated">About Us</h4>
              <p className="heading-6 text-width-1">
                Our construction company has been founded 10 years ago, at the
                very peak of the building frenzy in the US...
              </p>
              <p>
                Since then we've built hundreds of commercial, government and
                private buildings and facilities. It may not sound like a lot,
                but if you estimate the manpower, working hours, materials,
                planning and correlating that were all involved in completing
                each separate project, then our productivity is immense!{" "}
              </p>
              <a
                className="button button-primary"
                href="#modal"
                data-toggle="modal"
              >
                Contact Us
              </a>
            </div>
            <div className="col-md-11 col-lg-10 col-xl-6">
              <img src={i} alt width={652} height={491} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default History;
