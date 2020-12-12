import React, { Component } from "react";
import axios from "axios";
import { List, Card, Collapse } from "antd";
import Navbar from "./navbar";
import "antd/dist/antd.css";
import {
  UserOutlined,
  ShoppingFilled,
  ExportOutlined,
  SettingFilled,
  ToolFilled,
  SoundFilled,
} from "@ant-design/icons";
import "./carModel.css";
const { Meta } = Card;
const { Panel } = Collapse;

export default class carModels extends Component {
  state = {
    ListCar: [],
  };

  async componentDidMount() {
    //get items from mysql>>
    const httpResponse = await axios.get("http://localhost:8000/car");
    console.log("car model List  :", httpResponse.data);
    this.setState({
      ListCar: httpResponse.data,
    });
  }

  showMore = async () => {};

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="style.css"
        />

        <Navbar />
        <div className="carmodelform">
          <List
            size="large"
            grid={{ gutter: 16, column: 4 }}
            dataSource={this.state.ListCar}
            renderItem={(item) => (
              <div className="containerCar">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <div className="icon">
                        <img
                          width={300}
                          alt="carSamplePic"
                          // src="https://www.tqm.co.th/gallery/3976.jpg"
                          src={item.carImgSrc}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <h3>
                        <Meta description={item.carName} />
                      </h3>
                      <div id="main">
                        <p>
                          <ExportOutlined />
                          <div>{item.carInfoDoor} </div>
                        </p>

                        <p>
                          <UserOutlined />
                          {/* Seat: {item.carInfoSeat} */}
                          <div>{item.carInfoSeat}</div>
                        </p>
                        <p>
                          <ShoppingFilled />
                          {/* Bag: {item.carInfoBags} */}
                          <div>{item.carInfoBags}</div>
                        </p>
                        <p>
                          <SettingFilled />
                          {/* Gear: {item.carInfoGear} */}
                          <div>{item.carInfoGear}</div>
                        </p>
                        <p>
                          <ToolFilled />
                          {/* AC: {item.carInfoAC} */}
                          <div>{item.carInfoAC}</div>
                        </p>
                        <p>
                          <SoundFilled />
                          {/* Radio: {item.carInfoRadio} */}
                          <div>{item.carInfoRadio}</div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
