import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <section className="section-md bg-default" id="contacts">
        <div className="container">
          <div className="row row-50">
            <div className="col-md-5 col-lg-4">
              <h4 className="heading-decorated">Contact Details</h4>
              <ul className="list-sm contact-info">
                <li>
                  <dl className="list-terms-inline">
                    <dt>Address</dt>
                    <dd>4578 Marmora Road, Glasgow, D04 89GR</dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-inline">
                    <dt>Phones</dt>
                    <dd>
                      <ul className="list-semicolon">
                        <li>
                          <a href="tel:#">(800) 123-0045</a>
                        </li>
                        <li>
                          <a href="tel:#">(800) 123-0045</a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-inline">
                    <dt>We are open</dt>
                    <dd>Mn-Fr: 10 am-8 pm</dd>
                  </dl>
                </li>
                <li>
                  <ul className="list-inline-sm">
                    <li>
                      <a
                        className="icon-sm fa-facebook novi-icon icon"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon-sm fa-twitter novi-icon icon"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon-sm fa-google-plus novi-icon icon"
                        href="#"
                      />
                    </li>
                    <li>
                      <a className="icon-sm fa-vimeo novi-icon icon" href="#" />
                    </li>
                    <li>
                      <a
                        className="icon-sm fa-youtube novi-icon icon"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon-sm fa-pinterest-p novi-icon icon"
                        href="#"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="heading-decorated">Get in Touch</h4>
              {}
              <form
                className="rd-mailform rd-mailform_style-1"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap form-wrap_icon linear-icon-man">
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" htmlFor="contact-name">
                    Your name
                  </label>
                </div>
                <div className="form-wrap form-wrap_icon linear-icon-envelope">
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="contact-email">
                    Your e-mail
                  </label>
                </div>
                <div className="form-wrap form-wrap_icon linear-icon-feather">
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                    defaultValue={""}
                  />
                  <label className="form-label" htmlFor="contact-message">
                    Your message
                  </label>
                </div>
                <button className="button button-primary" type="submit">
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
