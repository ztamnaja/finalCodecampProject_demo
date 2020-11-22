// ***** copy code from codecamp *****

import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Row, Col, Divider, notification } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "../../config/axios";
import LocalStorageService from "../../services/localStorage";
import Navbar from "./navbar";
import "./login.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
const layout = {
  // for reponsive web
  labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
  wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};
function Login(props) {
  // console.log(LocalStorageService.setToken());

  const onLogout = () => {
    LocalStorageService.removeToken();
    props.setRole("guest");
  };

  const onFinish = (values) => {
    try {
      // console.log("props:", props);
      console.log("values", values);
      const body = {
        userName: values.userName,
        password: values.password,
      };
      axios.post("/user/login", body).then((result) => {
        // console.log("result from sql:", result)
        LocalStorageService.setToken(result.data.token);
        props.setRole("user");
        props.history.push("/reservation");
      });
      // .catch(err =>
      // notification.err({
      //   message: `Login failed`
      // })
      // );
    } catch (error) {
      notification.error({ message: `Login failed` });
    }
    console.log("props", props);
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"
      
      ></meta>
      <Navbar />
      <Row justify="center">
        <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
          {/* <div className="layout-login"> */}
          <div className="layout">
            <div className="login-form">
              <Row justify="center">
                <Title level={2} className="Title">
                  Login
                </Title>
              </Row>
              <Divider />
              <Form
                name="login"
                onFinish={onFinish}
                style={{ width: "100%" }}
                // scrollToFirstError
              >
                <Form.Item
                  label={<span>Username&nbsp;</span>}
                  name="userName"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={<span>Password&nbsp;</span>}
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Button
                  className="Button"
                  type="danger"
                  // onClick={this.onLogout.bind(this)} // not work in export function
                  onClick={onLogout}
                >
                  Logout
                </Button>
                <Button className="Button" type="primary" htmlType="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(Login);

// login form for popup **** not available****

// import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
// import "antd/dist/antd.css";
// import { Modal, Button, Form, Input, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import "./login.css";

// // const CollectionCreateForm = ({ visible, onFinish  , onCancel, form }) => {
// function LoginForm({ visible, onCancel, onFinish }) {
//   const form = Form.useForm();
//   // const LoginForm = Form.useForm({ name: "modal_form" })(LoginFormComponent);
//   return (
//     <Modal
//       className="layout"
//       visible={visible}
//       // title="Create a new collection"
//       okText="Register"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       // onCancel={() => {
//       //   form
//       //     .validateFields()
//       //     .then((values) => {
//       //       form.resetFields();
//       //       onFinish  (values);
//       //     })
//       //     .catch((info) => {
//       //       console.log("Validate Failed:", info);
//       //     });
//       // }}
//       // onFinish ={onFinish }
//       onFinish={() => {
//         form
//           .validateFields()
//           .then((values) => {
//             form.resetFields();
//             onFinish(values);
//           })
//           .catch((info) => {
//             console.log("Validate Failed:", info);
//           });
//       }}
//     >
//       <Form
//         className="login-form"
//         initialValues={{ remember: true }}
//         // onFinish={this.onFinish}
//       >
//         <Form.Item
//           name="username"
//           rules={[{ required: true, message: "Please input your Username!" }]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Username"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "Please input your Password!" }]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form-button"
//           >
//             Log in
//           </Button>
//         </Form.Item>
//         Or{" "}
//         <span>
//           <Link to="/register">Create a new account!</Link>
//         </span>
//       </Form>
//     </Modal>
//   );
// }

// export default LoginForm;
