'use strict';

import 'intl';
import React from 'react';

import {
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';

import './login.less';

const NormalLoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input accessbilityId="username" prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input accessbilityId="password" prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">Forgot password</a>
        <Button accessbilityId="login" type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount () {
  }

  render () {
    return <NormalLoginForm />;
  }
}
