import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./reserveCar.css";
import axios from "axios";
import {
  Input,
  Select,
  DatePicker,
  TimePicker,
  notification,
  Form,
} from "antd";
import moment from "moment";
import StepOne from "./stepOne";
import { createBrowserHistory } from "history";
export const browserHistory = createBrowserHistory();


const { Option } = Select;
class ReserveCarFunc extends Component {
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

  // put data to reservation table

  handleSubmit = (event) => {
    this.setState({ isLoading: true });

    localStorage.setItem("pickup_locationName", this.state.pickup_locationName);
    localStorage.setItem("pickup_Date", this.state.pickup_Date);
    localStorage.setItem("pickup_Time", this.state.pickup_Time);
    localStorage.setItem("return_locationName", this.state.return_locationName);
    localStorage.setItem("return_Date", this.state.return_Date);
    localStorage.setItem("return_Time", this.state.return_Time);
    // this.props.history.push("/reservation/selectcar");

    //validate all params before seding change page route
    let localStorageItems = [
      "pickup_locationName",
      "pickup_Date",
      "pickup_Time",
      "return_locationName",
      "return_Date",
      "return_Time",
    ];
    let validatePass = "failed";
    for (const item of localStorageItems) {
      console.log("item", item);
      console.log("localStorage.getItem(item)", localStorage.getItem(item));
      var pickupDate = moment(this.state.pickup_Date, "DD/MM/YYYY");
      var returnDate = moment(this.state.return_Date, "DD/MM/YYYY");

      // if item is undefind or falsy
      if (!localStorage.getItem(item)) {
        console.error(`plaese choose your ${item}`);
        notification.error({ message: `plaese choose your ${item}` });
        validatePass = "failed";
      } else if (!pickupDate.isAfter(returnDate)) {
        validatePass = "pass";
      } else {
        notification.error({ message: `cannot return backward pickup date!` });
        validatePass = "failed";
      }
    }
    console.log("validatePass", validatePass);
    if (validatePass == "pass") {
      this.props.history.push("/reservation/selectcar");
    }
  };

  render() {
    return (
      <div>
        <Form>
          <div className="InputForm">
            <Input.Group className="InputElement" compact>
              <Select
                value={this.state.pickup_locationName}
                style={{ width: "50%" }}
                defaultValue="Select your pick-up location..." // set at state
                onChange={this.handleLocationChange_pickup}
              >
                {this.state.List.map((item) => (
                  <Option key={item.locationId} value={item.locationId}>
                    {item.locationName}
                  </Option>
                ))}
              </Select>
              <DatePicker
                style={{ width: "30%" }}
                defaultValue={moment(new Date(), "dddd, MMMM Do YYYY")}
                selected={this.state.pickup_Date}
                name="pickup_Date"
                format="dddd, MMMM Do YYYY"
                // selected={this.state.pickup_Date}
                onChange={this.handleDateChange_pickup}
              />
              <TimePicker
                name="pickup_Time"
                // value={this.state.pickup_Time}
                showTime={{ format: "HH:mm" }}
                defaultValue={moment(new Date(), "HH:mm")}
                format=" HH:mm"
                onChange={this.handleTimeChange_pickup}
              />
            </Input.Group>
            <Input.Group className="InputElement" compact>
              <Select
                value={this.state.return_locationName}
                style={{ width: "50%" }}
                defaultValue="Select your return location..." // set at state
                onChange={this.handleLocationChange_return}
              >
                {this.state.List.map((item) => (
                  <Option key={item.locationId} value={item.locationId}>
                    {item.locationName}
                  </Option>
                ))}
              </Select>
              <DatePicker
                style={{ width: "30%" }}
                defaultValue={moment(new Date(), "dddd, MMMM Do YYYY")}
                selected={this.state.return_Date}
                name="return_Date"
                format="dddd, MMMM Do YYYY"
                // selected={this.state.return_Date}
                onChange={this.handleDateChange_return}
              />
              <TimePicker
                name="return_Time"
                // value={this.state.return_Time}
                showTime={{ format: "HH:mm" }}
                defaultValue={moment(new Date(), "HH:mm")}
                format=" HH:mm"
                onChange={this.handleTimeChange_return}
              />
            </Input.Group>

            <button className="button1" onClick={this.handleSubmit}>
              SELECT A CAR
            </button>
          </div>
        </Form>
      </div>
    );
  }
}
export default withRouter(ReserveCarFunc);
