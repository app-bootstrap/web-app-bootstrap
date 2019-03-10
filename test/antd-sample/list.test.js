'use strict';

import {
  webpackHelper
} from 'macaca-wd';
import assert from 'assert';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/antd-sample/list.test.js', () => {
  before(() => {
    return driver
      .initWindow({
        width: 800,
        height: 600,
        deviceScaleFactor: 2
      });
  });

  beforeEach(() => {
    return driver
      .switchAllScenes({
        hub: 'antd-sample',
        scene: 'default',
      });
  });

  afterEach(function () {
    return driver
      .coverage()
      .saveScreenshots(this);
  });

  after(() => {
    return driver
      .openReporter(false)
      .quit();
  });

  describe('list render', () => {
    it('render should be ok when success', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'api/antd-sample/getListData',
          scene: 'success',
        })
        .getUrl(`${BASE_URL}/antd-sample`)
        .elementByCss('table > tbody > tr:nth-child(1)')
        .text()
        .then(text => {
          assert.equal(text, 'John Brown 32 New York No. 1 Lake Park');
        });
    });

    it('sorter should be ok when success', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'api/antd-sample/getListData',
          scene: 'success',
        })
        .getUrl(`${BASE_URL}/antd-sample`)
        .elementByCss('#app > .ant-layout i.anticon.anticon-caret-down.ant-table-column-sorter-down.off')
        .click()
        .elementByCss('table > tbody > tr:nth-child(1)')
        .text()
        .then(text => {
          assert.equal(text, 'Joe Black 22 Sidney No. 1 Lake Park');
        });
    });

    it('render should be ok when failed', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'api/antd-sample/getListData',
          scene: 'failed',
        })
        .getUrl(`${BASE_URL}/antd-sample`)
        .sleep(1000);
    });

    it('render should be ok when emyty', () => {
      return driver
        .switchScene({
          hub: 'antd-sample',
          pathname: 'api/antd-sample/getListData',
          scene: 'empty',
        })
        .getUrl(`${BASE_URL}/antd-sample`);
    });
  });
});

