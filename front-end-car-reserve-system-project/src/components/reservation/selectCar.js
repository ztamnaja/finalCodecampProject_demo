import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import Navbar from "../navbar";
import Navbar from "../pages/navbar";
import {
  List,
  Button,
  Statistic,
  Descriptions,
  Steps,
} from "antd";
import "antd/dist/antd.css";
import {
  UserOutlined,
  ShoppingFilled,
  ExportOutlined,
} from "@ant-design/icons";
import "./selectCar.css";

// import { createBrowserHistory } from "history"; // using withRouter and this.props.history.push
// export const browserHistory = createBrowserHistory();
const { Step } = Steps;
class SelectCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      loading: true,
      carId: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // get list item from cars db.
  async componentDidMount() {
    console.log("Cars List");
    const pickup_locationName = localStorage.getItem("pickup_locationName");
    const pickup_Date = localStorage.getItem("pickup_Date");
    const pickup_Time = localStorage.getItem("pickup_Time");
    const return_locationName = localStorage.getItem("return_locationName");
    const return_Date = localStorage.getItem("return_Date");
    const return_Time = localStorage.getItem("return_Time");

    //get items from mysql>>
    const httpResponse = await axios.get("http://localhost:8000/car");
    console.log("List httpResponse :", httpResponse.data);
    this.setState({
      List: httpResponse.data,
      pickup_locationName: pickup_locationName,
      return_locationName: return_locationName,
      pickup_Date: pickup_Date,
      pickup_Time: pickup_Time,
      return_Date: return_Date,
      return_Time: return_Time,
    });
    console.log("List after state:", typeof httpResponse.data);
  }

  handleSubmit = (event) => {
    // event.preventDefault(); // not reload when onclick submit.
    console.log("click SELECT A CAR", event.currentTarget.value);
    this.setState({ isLoading: true });

    // send data and go to next page.
    localStorage.setItem("carId", event.currentTarget.value);
    this.props.history.push("/reservation/selectcar/reserveinfo");

   if (event.currentTarget.value != undefined) {
    }
  };

  render() {
    return (
      <div>
        <Navbar />
      <div className="selectCarForm">
        <Steps size="small" progressDot current={1}>
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

        <div>
          <Descriptions size="small" column={2}>
            <div>
              <Descriptions.Item>
                Pick-up Location: {this.state.pickup_locationName}
                <br />
                {this.state.pickup_Date}, {this.state.pickup_Time}
                <br />
              </Descriptions.Item>
            </div>
            <div className="divisionLine">
              <Descriptions.Item>
                Return Location: {this.state.return_locationName}
                <br />
                {this.state.return_Date}, {this.state.return_Time}
                <br />
              </Descriptions.Item>
            </div>
          </Descriptions>
        </div>
        <List
          className="demo-loadmore-list"
          size="large"
          itemLayout="horizontal"
          dataSource={this.state.List}
          header={<div></div>}
          renderItem={(item) => (
            <List.Item key={item.carId}>
              {/* item.carImg */}
              <img
                width={200}
                alt="carSamplePic"
                src="https://www.autoduqaan.com/images/no-image-big.jpg"
              />
              {/* <List.Item.Meta
                itemLayout="horizontal"
                className="eachElement"
                title={item.carName}
                description={
                  <div>
                    <p>Door: {item.carInfoDoor} </p>
                    <p>Seat: {item.carInfoSeat} </p>
                    <p>Bag: {item.carInfoBags} </p>
                    <p>Gear: {item.carInfoGear} </p>
                    <p>AC: {item.carInfoAC} </p>
                    <p>Radio: {item.carInfoRadio} </p>
                  </div>
                }
              /> */}
              <Statistic title={item.carBrandName} value={item.carName} />
              <div>
                <p>
                  <ExportOutlined />
                  Door: {item.carInfoDoor}{" "}
                </p>

                <p>
                  <UserOutlined />
                  Seat: {item.carInfoSeat}
                </p>
                <p>
                  <ShoppingFilled />
                  Bag: {item.carInfoBags}
                </p>
              </div>

              <Statistic title="Price (THB)" prefix="฿" value={item.carPrice} />
              <Button
                value={item.carId}
                style={{ marginTop: 28 }}
                onClick={this.handleSubmit.bind(this)}
              >
                SELECT
              </Button>
            </List.Item>
          )}
        />
      </div>
      </div>
    );
  }
}

export default withRouter(SelectCar);
