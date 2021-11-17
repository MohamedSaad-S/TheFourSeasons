import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./Nav.scss";


class Nav extends Component {
  render() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4 col col-logo">
            <a href="#top" className="logo">{this.props.logoName}</a>
          </div>
          <div className="col-8 col col-links">
            <ul>
              <NavLink exact to="/" className="navlinks">Home</NavLink>
              {/* <NavLink exact to="/TigerSpeed/About" className="navlinks">About</NavLink> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default Nav;