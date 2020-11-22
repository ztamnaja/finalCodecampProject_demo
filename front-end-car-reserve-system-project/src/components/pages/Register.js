import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import "./register.css";
import Navbar from "./navbar";
import { Form, Input, Tooltip, Button, Divider, notification } from "antd";
import Title from "antd/lib/typography/Title";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "../../config/axios";
import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegistrationForm(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      console.log("Received values of form: ", values);
      const body = {
        userName: values.userName,
        password: values.password,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };
      axios.post("/user/register", body).then((res) => {
        console.log("response", res);
        notification.success({
          message: `${values.userName} registed complete.`,
        });
        props.history.push("/user/login");
      });
      // .catch((err) => {
      //   notification.error({
      //     message: `Register failed `,
      //   });
      // });
    } catch (err) {
      notification.error({
        message: `Register failed `,
      });
    }
  }; // end onFinish

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +66{" "}
    </Form.Item>
  );

  return (
    <div>
      <Navbar />
      <div className="layout">
        <div className="register-form">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Title level={2} className="Title">
              Register
            </Title>
            <Divider className="Divider" />
            <Form.Item
              name="userName"
              label={
                <span>
                  Username&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  // required: true, // maybe not need
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

// class Register extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className="layout">
//           <div className="register-form">
//             <RegistrationForm />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default withRouter(RegistrationForm);
