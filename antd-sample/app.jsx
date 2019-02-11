'use strict';

import 'intl';
import React from 'react';
import ReactDom from 'react-dom';

import 'antd/dist/antd.css';

import fetch from './common/fetch';

import {
  Layout,
  Select,
  Table,
  Button,
  notification,
  Spin,
} from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Age',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}];

function onChange (pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

import './app.less';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Option = Select.Option;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      dataList: [],
    };
  }

  componentWillMount () {
    return;
    fetch('/api/getListData', 'GET', null)
      .then(res => {
        if (res.success) {
          this.setState({
            loading: false,
            dataList: res.data,
          });
        } else {
          this.setState({
            loading: false,
          });
          this.doNotification(null, 'server error', res.errorMessage);
        }
      });
  }

  doNotification (e, title = 'error', content = 'error') {
    notification.open({
      message: title,
      description: content,
    });
  }

  render () {
    return (
      <Layout>
        <Header className="header"></Header>
        <Content style={{padding: 30}}>
          <Select className="test-list" defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="fourth">fourth</Option>
          </Select>
          <Button onClick={this.doNotification.bind(this)}>A Button</Button>
          <Spin
            tip="Loading..."
            spinning={this.state.loading}
          >
            <Table columns={columns} dataSource={this.state.dataList} onChange={onChange} />
          </Spin>
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
