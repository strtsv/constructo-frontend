import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-corporate bg-gray-darker">
        <div className="container">
          <div className="footer-corporate__inner">
            <p className="rights">
              <span>Constructo</span>
              <span> </span>
              <span className="copyright-year" />. All Rights Reserved
            </p>
            <ul className="list-inline-xxs">
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-facebook"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-twitter"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-google-plus"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-vimeo"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-youtube"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-xxs icon-gray-darker fa fa-pinterest"
                  href="#"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
