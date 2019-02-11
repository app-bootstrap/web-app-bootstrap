'use strict';

import 'intl';
import React from 'react';
import ReactDom from 'react-dom';

import fetch from './common/fetch';

import {
  Form,
  Icon,
  Row,
  Col,
  Input,
  Button,
  Checkbox,
  Layout,
  Select,
} from 'antd';

const FormItem = Form.Item;

import './new-page.less';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Option = Select.Option;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount () {

  }

  render () {
    return (
      <Layout>
        <Header className="header"></Header>
        <Content style={{padding: 30}}>
          <Row>
            <Col span={9}></Col>
            <Col span={6}>
              <WrappedNormalLoginForm />
            </Col>
            <Col span={9}></Col>
          </Row>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}

App.defaultProps = {
  context: window.context,
};

ReactDom.render(<App />, document.querySelector('#app'));

