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
