import React from "react";
import $ from "jquery";
import "../../assets/js/jquery.easing.1.3.js";
import "../../assets/js/tmstickup.js";
import "../../assets/js/parallax.js";
import { WOW } from "../../assets/js/wow.js";
import "../../assets/js/tmstickup.js";
import "../../assets/js/jquery.ui.totop.my.js";

import i1 from "../../assets/images/logo-inverse-304x39.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar_transparent rd-navbar_boxed rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-sm-device-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-static"
            data-lg-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-stick-up-clone="false"
            data-sm-stick-up="true"
            data-md-stick-up="true"
            data-lg-stick-up="true"
            data-md-stick-up-offset="115px"
            data-lg-stick-up-offset="35px"
            data-body-class="rd-navbar-absolute"
          >
            {}
            <div className="rd-navbar-top-panel">
              <div className="rd-navbar-top-panel__main">
                <div
                  className="rd-navbar-top-panel__toggle rd-navbar-fixed__element-1 rd-navbar-static--hidden"
                  data-rd-navbar-toggle=".rd-navbar-top-panel__main"
                >
                  <span />
                </div>
                <div className="rd-navbar-top-panel__content">
                  <div className="rd-navbar-top-panel__left">
                    <ul className="rd-navbar-items-list">
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit__left">
                            <span className="icon icon-sm icon-primary linear-icon-map-marker" />
                          </div>
                          <div className="unit__body">
                            <p>
                              <a href="#">
                                Address: 4578 Marmora Road, Glasgow, D04 89GR
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit__left">
                            <span className="icon icon-sm icon-primary linear-icon-telephone" />
                          </div>
                          <div className="unit__body">
                            <ul className="list-semicolon">
                              <li>
                                <a href="tel:#">(800) 123-0045</a>
                              </li>
                              <li>
                                <a href="tel:#">(800) 123-0045</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-navbar-top-panel__right">
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
                          className="icon icon-xxs icon-gray-darker fa fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="rd-navbar-inner rd-navbar-search-wrap">
              {}
              <div className="rd-navbar-panel rd-navbar-search-lg_collapsable">
                <button
                  className="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                >
                  <span />
                </button>
                {}
                <div className="rd-navbar-brand">
                  <a className="brand-name" href="index.html">
                    <img src={i1} alt width={304} height={39} />
                  </a>
                </div>
              </div>
              {}
              <div className="rd-navbar-nav-wrap rd-navbar-search_not-collapsable">
                <div className="rd-navbar-search_collapsable">
                  <ul className="rd-navbar-nav">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#contacts">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
