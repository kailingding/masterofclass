import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CourseSelect from "./SearchBar/Dropdown";
import { contactUs } from "../ContactUs/ContactUs";

import "./mainPage.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Change in icon on the top right corner depends on whether the user is logged in
  profileChange = e => {
    if (this.props.auth.isAuthenticated) {
      return (
        <Link
          to="/register"
          style={{ color: "#FFFFFF", textDecoration: "none" }}
          className="logout"
        >
          <img
            src={require("./logout.png")}
            alt=""
            cursor="pointer"
            width="40px"
            height="40px"
          />
        </Link>
      );
    } else {
      return (
        <Link
          to="/login"
          style={{
            color: "#FFFFFF",
            textDecoration: "none"
          }}
          className="loginreg"
        >
          <span style={{ cursor: "pointer" }}>登陆 / 注册</span>
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="landing-page">
        <div className="navi-bar">
          <div className="navi-bar96385142">
            <div className="navi-bar1a4160cf"></div>
            <div className="logo">
              <div className="img4505"></div>
              <div className="logoname">
                <Link
                  to="/"
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                >
                  课友群助手
                </Link>
              </div>
            </div>
            {/*<div className="product">学霸秘籍</div>*/}
            {/*<div className="about">加入我们</div>*/}
            <div className="contact">{contactUs()}</div>
          </div>
          <div>{this.profileChange()}</div>
        </div>
        <div className="sketch010"></div>
        <div className="search-v1"></div>
        <div className="search-v2">
          <CourseSelect />
        </div>
        <div className="rightsReserved">
          <b>Copyright©2019, 霸课, All Rights Reserved</b>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(Landing));
