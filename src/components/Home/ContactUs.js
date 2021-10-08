import React from "react";

class ContactUs extends React.Component {
  render() {
    return (
      <section className="section-md bg-accent text-center">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-9 col-xl-8">
              <h4 className="heading-decorated">
                IF YOU CAN ENVISION IT, THEN WE CAN BUILD IT!{" "}
                <br className="d-none d-lg-inline" /> TELL US MORE ABOUT YOUR
                PROJECT{" "}
              </h4>
              <a
                className="button button-primary"
                href="#modal"
                data-toggle="modal"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
