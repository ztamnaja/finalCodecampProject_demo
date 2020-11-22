import React, { Component } from "react";
import "antd/dist/antd.css";
import { Select, Steps } from "antd";

const { Step } = Steps;
export default function StepOne() {
  return (
    <div className="reserveCarStep">
      <Steps size="small" progressDot current={0}>
        <Step
          title="RESERVE A CAR"
          // className="site-navigation-steps"
          // type="navigation"
          // size="small"
          // current={current}
          // onChange={this.onChange}
        />
        <Step title="SELECT A CAR" />
        <Step title="YOUR INFOMATION" />
      </Steps>
    </div>
  );
}
