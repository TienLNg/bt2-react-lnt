import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class Changeglass extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{
            backgroundImage: '/image/background.jpg'
        }}>
          <h1>TRY GLASSES ONLINE</h1>
            <img style={{ width: "100%" }} src="/image/model.jpg" alt="" />
          <div>

            <div className="row">
              <a className="col-3" style={{ width: "100%" }} >
                <img src="/image/g1.jpg" alt="" />
              </a>
              <a className="col-3" style={{ width: "100%" }}>
                <img src="/image/g1.jpg" alt="" />
              </a>
              <a className="col-3" style={{ width: "100%" }}>
                <img src="/image/g1.jpg" alt="" />
              </a>
              <a className="col-3" style={{ width: "100%" }}>
                <img src="/image/g1.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
