import React, { Component, Fragment } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import JinQunPopUp from "./jinqunPopUp";

import { courseOptions } from "./courseData";

class CourseSelect extends Component {
  // initialization of dropdown course list state
  constructor() {
    super();
    this.state = {
      isClearable: true,
      isDisabled: false,
      isSearchable: true,
      selectOption: ""
    };
  }

  handleChange = selectOption => {
    this.setState({ selectOption });
  };

  render() {
    const { isClearable, isDisabled, isSearchable, selectOption } = this.state;

    return (
      <div>
        <div className="jinqun">
          <JinQunPopUp
            course={this.state.selectOption ? this.state.selectOption : ""}
          ></JinQunPopUp>
        </div>
        <div className="dropDown">
          <Fragment>
            <Select
              value={selectOption}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isSearchable={isSearchable}
              onChange={this.handleChange}
              name="courseName"
              options={courseOptions}
              placeholder="找 Winter 2020 课友群吗？先点这里"
              blurInputOnSelect="true"
            />
          </Fragment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(CourseSelect));
