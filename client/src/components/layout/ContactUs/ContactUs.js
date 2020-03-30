import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class ContactUs extends Component {}

export function contactUs() {
  return (
    <div>
      <Popup
        trigger={<span style={{ cursor: "pointer" }}>联系我们</span>}
        modal
        closeOnDocumentClick
        position="center center"
      >
        <div className="contactQRcode">
          <div style={{ color: "orange" }}>
            <b>
              {"\n"}如有任何问题，请联系课友群助手哦～{"\n \n"}
            </b>
          </div>
          <img
            src={require("../ContactUs/qunAssistant.png")}
            alt=""
            width="35%"
            height="35%"
          />
        </div>
      </Popup>
    </div>
  );
}
