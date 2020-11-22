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
        <Navbar />
        <div className="carmodelform">
          <List
            size="large"
            grid={{ gutter: 16, column: 4 }}
            dataSource={this.state.ListCar}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      width={200}
                      alt="carSamplePic"
                      src="https://www.autoduqaan.com/images/no-image-big.jpg"
                    />
                  }
                  actions={[]}
                >
                  <Meta title={item.carName} description={item.carBrandName} />
                  <Collapse
                    ghost
                    isShowmore={this.state.isShowMore}
                    onChange={this.showMore}
                  >
                    <Panel showArrow={false} header="Show More..." key="1">
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
                      <p>
                        <SettingFilled />
                        Gear: {item.carInfoGear}
                      </p>
                      <p>
                        <ToolFilled />
                        AC: {item.carInfoAC}
                      </p>
                      <p>
                        <SoundFilled />
                        Radio: {item.carInfoRadio}
                      </p>
                    </Panel>
                  </Collapse>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
