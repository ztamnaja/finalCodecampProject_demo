import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./reserveCar.css";
import axios from "axios";
import moment from "moment";
import StepOne from "./stepOne";
import ReserveCarFunc from "./reserveCarFunc";
// import Navbar from "../navbar";
import Navbar from "../pages/navbar";
import { Layout, notification, Row, Col } from "antd";
import {createBrowserHistory} from "history";
const layout = {
  // for reponsive web
  labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
  wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

export const browserHistory = createBrowserHistory();
const { Header, Content, Footer } = Layout;

class ReserveCar extends Component {
  constructor(props) {
    super(props);
    console.log("input reservation form");
    this.state = {
      List: [],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="reserveInfo">
          <StepOne />
        </div>
        <ReserveCarFunc />
      </div>
    );
  }
}
export default withRouter(ReserveCar);
