import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default class Sucessful extends Component {
  render() {
    return (
      <div>
        <Result
          status="success"
          title="Successfully Reserved A Car!"
          subTitle="Order number: xxxxx Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Link to="/home" key="home">
              <Button type="primary" key="console">
                Go HomePage
              </Button>
              ,
            </Link>,
            <Link to="/reservation" key="reservation">
              <Button key="buy">Reserve Again</Button>,
            </Link>,
          ]}
        />
      </div>
    );
  }
}
