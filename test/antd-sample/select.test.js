'use strict';

import {
  webpackHelper
} from 'macaca-wd';
import assert from 'assert';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/antd-sample/select.test.js', () => {
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

  describe('select render', () => {
    it('render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample`);
    });

    it('select should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample`)
        .elementByCss('#app div.test-list.ant-select.ant-select-enabled')
        .click()
        .elementByCss('.ant-select-dropdown ul > li:nth-child(4)')
        .click()
        .elementByCss('#app .ant-layout-content > button')
        .text()
        .then(text => {
          assert.equal(text, 'fourth');
        });
    });
  });
});

