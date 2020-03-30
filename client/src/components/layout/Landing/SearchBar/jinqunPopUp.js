import React, { Component } from "react";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class JinQunPopUp extends Component {
  render() {
    const showQR = window.innerWidth < 600 ? "90%" : "50%";
    const QRcodeCheck = QRname => {
      try {
        return require(`./courseQRcodes/${QRname}.JPG`);
      } catch (err) {
        return null;
      }
    };

    return (
      <div>
        {this.props.course.value ? (
          <Popup
            contentStyle={{ width: showQR }}
            trigger={
              <Button variant="contained" color="primary" size="large">
                进群
              </Button>
            }
            modal
            closeOnDocumentClick
            position="center center"
          >
            {this.props.auth.isAuthenticated ? (
              <div className="QRpopup">
                {QRcodeCheck(this.props.course.value) ? (
                  <div>
                    <div className="QR-text">
                      扫描下图二维码，就可以进入{`${this.props.course.label}`}
                      课群哦～
                    </div>
                    <div></div>
                    <img
                      src={require(`./courseQRcodes/${this.props.course.value}.JPG`)}
                      alt=""
                      className="QRimg"
                    />
                    <div>
                      <Popup
                        contentStyle={{ width: showQR }}
                        trigger={
                          <span
                            style={{
                              fontSize: "15px",
                              color: "blue",
                              cursor: "pointer"
                            }}
                          >
                            无法进群?
                          </span>
                        }
                        modal
                        closeOnDocumentClick
                        position="center center"
                      >
                        <div>
                          <div style={{ fontSize: "20px", color: "orange" }}>
                            <b>添加课群小助手，拉你进课群哦～</b>
                          </div>
                          <img
                            src={require("./qunAssistant.png")}
                            alt=""
                            className="qunAssistant"
                          />
                        </div>
                      </Popup>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <div style={{ fontSize: "20px", color: "orange" }}>
                        <div>
                          <b>群尚未建立！</b>
                        </div>
                        <div>
                          <b>请联系课群小助手建立此刻群哦～</b>
                        </div>
                      </div>
                      <img
                        src={require("./qunAssistant.png")}
                        alt=""
                        className="qunAssistant"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="loginInText">
                <Link to="/register">
                  <img
                    src={require(`./loginSign.png`)}
                    alt=""
                    className="loginInImg"
                  />
                </Link>
              </div>
            )}
          </Popup>
        ) : (
          <Button variant="contained" color="primary" size="large">
            进群
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(JinQunPopUp));
