import React from "react";

class Map extends React.Component {
  render() {
    return (
      <section>
        <div
          className="rd-google-map rd-google-map__model"
          data-zoom={15}
          data-y="40.643180"
          data-x="-73.9874068"
          data-styles="[]"
        >
          <ul className="map_locations">
            <li data-y="40.643180" data-x="-73.9874068">
              <dl>
                <dt>Address:</dt>
                <dd>4578 Marmora Road, Glasgow, D04 89GR</dd>
              </dl>
              <dl>
                <dt>Phones:</dt>
                <dd>
                  <a href="tel:#">(800) 123-0045</a>;{" "}
                  <a href="tel:#">(800) 123-0046</a>
                </dd>
              </dl>
              <dl>
                <dt>We are open:</dt>
                <dd>Mn-Fr: 10 am-8 pm</dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Map;
