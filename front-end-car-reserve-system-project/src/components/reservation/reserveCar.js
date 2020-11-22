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
    console.log("App - Constructor", this.props);
    this.state = {
      isLoading: null,
      pickup_locationName: "Select your pick-up location...",
      pickup_Date: "",
      pickup_Time: "",
      return_locationName: "Select your return location...",
      return_Date: "",
      return_Time: "",
      List: [],
    };
    this.handleLocationChange_pickup = this.handleLocationChange_pickup.bind(
      this
    );
    this.handleLocationChange_return = this.handleLocationChange_return.bind(
      this
    );
    this.handleDateChange_pickup = this.handleDateChange_pickup.bind(this);
    this.handleDateChange_return = this.handleDateChange_return.bind(this);
    this.handleTimeChange_pickup = this.handleTimeChange_pickup.bind(this);
    this.handleTimeChange_return = this.handleTimeChange_return.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get list item from location db. <to select location>
  async componentDidMount() {
    console.log("Location items List");
    const httpResponse = await axios.get("http://localhost:8000/Location");
    console.log("List httpResponse :", httpResponse.data);
    this.setState({ List: httpResponse.data });
    console.log("List after state:", typeof httpResponse.data);
  }

  handleLocationChange_pickup(event) {
    console.log("List", this.state.List);
    console.log("event:", event);
    // cannot get from event.target.value ??? donot know why?
    this.setState({
      pickup_locationName: event,
    });
  }
  handleLocationChange_return(event) {
    console.log("List", this.state.List);
    console.log("event:", event);
    // cannot get from event.target.value ??? donot know why?
    this.setState({
      return_locationName: event,
    });
  }

  handleDateChange_pickup = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Date: moment(date).format("DD-MM-YYYY"),
    });
  };
  handleDateChange_return = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      return_Date: moment(date).format("DD-MM-YYYY"),
    });
  };
  handleTimeChange_pickup = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Time: moment(date).format("HH:mm"),
    });
  };
  handleTimeChange_return = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      return_Time: moment(date).format("HH:mm"),
    });
  };

  handleSubmit = (event) => {
    // event.preventDefault(); // not reload when onclick submit.
    // console.log("click SELECT A CAR", event);

    this.setState({ isLoading: true });
    // let reserveCarData = {
    //   pickup_locationName: this.state.pickup_locationName,
    //   pickup_Date: this.state.pickup_Date,
    //   pickup_Time: this.state.pickup_Time,
    //   return_locationName: this.state.return_locationName,
    //   return_Date: this.state.return_Date,
    //   return_Time: this.state.return_Time,
    // };
    // console.log("reserveCarData in reservation page:", reserveCarData);
    
    localStorage.setItem("pickup_locationName", this.state.pickup_locationName);
    localStorage.setItem("pickup_Date", this.state.pickup_Date);
    localStorage.setItem("pickup_Time", this.state.pickup_Time);
    localStorage.setItem("return_locationName", this.state.return_locationName);
    localStorage.setItem("return_Date", this.state.return_Date);
    localStorage.setItem("return_Time", this.state.return_Time);

    //validate all params before seding change page route
    let localStorageItems = ['pickup_locationName', 'pickup_Date', 'pickup_Time', 'return_locationName', 'return_Date', 'return_Time']
    let validatePass = 'failed'
    for (const item of localStorageItems) {
      console.log('item',item)
      console.log('localStorage.setItem(item)', localStorage.setItem(item))
      // if item is undefind or falsy
    //   if (!localStorage.setItem(item)) {
    //     console.error(`plaese choose your ${item}`);
    //     notification.error({ message: `plaese choose your ${item}` });
    //   }
    //   validatePass = "pass";
    // }
    // if (validatePass == "pass") {
    //   this.props.history.push("/reservation/selectcar");
    }
    // console.log("localStorage.setItem", localStorage.(setItem));

    // send items and go to next page.
  };

  render() {
    return (
      <div>
        {/* <Row justify="center">
          <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}> */}
            <Navbar />
            <StepOne />
            <ReserveCarFunc />
            <Footer style={{ background: "#383838", top: "715px" }}>
              <div>
                <h3>Codecamp Final Project ©2020 Created by zTamnaja</h3>
              </div>
            </Footer>
          {/* </Col>
        </Row> */}
      </div>
    );
  }
}
export default withRouter(ReserveCar);
