import React, { Component, useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import LoginForm from "./Login";
import "./login.css";
export const browserHistory = createBrowserHistory();
const { Header, Content, Footer } = Layout;

export default function Navbar() {
  let history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
    history.push({
      pathname: "/register",
      // data: reserveCarData,
    });
    setVisible(false);
  };

  return (
    <div>
      {/* <Header> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
        <Menu.Item key="1">
          <Link to="/home">HOME</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/reservation">RESERVATION</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/carmodel">CARS</Link>
        </Menu.Item>
        <Menu.Item key="4" disabled>
          <Link to="/service">SERVICES</Link>
        </Menu.Item>
        <Menu.Item key="5" disabled>
          <Link to="/location">LOCATIONS</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/user/login">LOGIN</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/user/register">REGISTER</Link>
        </Menu.Item>
      </Menu>
      {/* </Header> */}
    </div>
  );
}
