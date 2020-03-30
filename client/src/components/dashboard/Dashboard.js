import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  homeClick = e => {
    this.props.history.push("/");
  };

  render() {
    // const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                textAlign: "center"
              }}
              onClick={this.homeClick}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3"
            >
              <b>回到主页面</b>
            </button>
          </div>
          <div className="landing-copy col s12 center-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                textAlign: "center"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              <b>注销</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
