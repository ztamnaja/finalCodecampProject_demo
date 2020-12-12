import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
import headerImg from "../img/header3.jpg";
import "./home.css";
import { Select, Carousel, Layout, Menu } from "antd";
import ReserveCarFunc from "../reservation/reserveCarFunc";
import Location from "./Location";
import Navbar from "./navbar";
import Footer from "./Footer";

const { Header, Content } = Layout;
const { Option } = Select;

export default class Home extends Component {
  state = {
    ListCar: [],
  };

  // async componentDidMount() {
  //   console.log("Location items List");
  //   const httpResponse = await axios.get("http://localhost:8000/Car");
  //   console.log("List httpResponse :", httpResponse.data);
  //   this.setState({ ListCar: httpResponse.data });
  // }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
        ></link>
        <link
          href="http://fonts.googleapis.com/css?family=Cookie"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link rel="stylesheet" href="style.css"></link>
        <Layout className="layout">
          {/* <Navbar style={{width: '125%'}}/> */}
          <div
            className="hero-image"
            style={{ backgroundImage: `url('${headerImg}')` }}
          >
            <Header>
              <Navbar />
            </Header>
            <div className="headerText">
              <h1>Find The Best Car</h1>
              <p>CAR RESERVATION PRODUCTS AND SERVICES</p>
            </div>
            <div className="headerForm">
              <ReserveCarFunc />
            </div>
          </div>
          {/* <Content style={{ padding: "0 0px" }}> */}
          <Content>
            <div className="context">
              <h2>Our Car Models</h2>
              {/* {this.state.ListCar.map((car) => {
              <li>car</li>;
            })} */}
              <Carousel autoplay>
                <div>
                  <div>
                    <img
                      width={250}
                      alt="economicCar"
                      src="https://www.tqm.co.th/gallery/3976.jpg"
                    />
                    <h3>Economic car</h3>
                  </div>
                </div>
                <div>
                  <img
                    width={250}
                    alt="compactCar"
                    src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/13130/2020-Chevrolet-Bolt%20EV-front_13130_032_2400x1800_GAZ.png"
                  />
                  <h3>Compact car</h3>
                </div>
                <div>
                  <img
                    width={250}
                    alt="intermediateCar"
                    src="https://img.khaorot.com/2019/11/01/5Cq7JfHF/02white-9c8a.png"
                  />
                  <h3>Intermediate car</h3>
                </div>
                <div>
                  <img
                    width={250}
                    alt="SUV"
                    src="https://www.allcarleasing.co.uk/photos/ff4ef5f82587893f9c8a5a448dd5aa6dV.jpg"
                  />
                  <h3>SUV car</h3>
                </div>
                <div>
                  <img
                    width={250}
                    alt="Minivan"
                    src="https://cars.usnews.com/static/images/atlas/rankings/VanRankings.jpg"
                  />
                  <h3>Minivan</h3>
                </div>
              </Carousel>
              <div className="context_center">
                <div className="container">
                  <div className="items">
                    <div className="icon-wrapper">
                      <i className="fa fa-shield"></i>
                    </div>
                    <div className="project-name">
                      <p>HIGH-QUALITY SERVICES</p>
                    </div>
                  </div>
                  <div className="items">
                    <div className="icon-wrapper">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="project-name">
                      <p>VARIABLE OF LOCATIONS</p>
                    </div>
                  </div>
                  <div className="items">
                    <div className="icon-wrapper">
                      <i className="fa fa-cog"></i>
                    </div>
                    <div className="project-name">
                      <p>PROFESSIONAL SYSTEM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div style={{ margin: "100px" }}>
                <h2>Our Locations(not available)</h2>
                <div>
                  <Location />
                </div>
              </div> */}
            </div>
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}
