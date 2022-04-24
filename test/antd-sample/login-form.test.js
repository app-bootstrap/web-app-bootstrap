'use strict';

import {
  webpackHelper
} from 'macaca-wd';
import assert from 'assert';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/antd-sample/login-form.test.js', () => {
  before(() => {
    return driver
      .initWindow({
        platformName: 'playwright',
        browserName: 'chromium',
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

  describe('login form render', () => {
    it('render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample#login`)
        .elementByCss('[accessbilityId="login"]')
        .text()
        .then(text => assert.equal(text, 'Log in'));
    });
  });

  describe('login form submit', () => {
    it('validator logic should be correct', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample#login`)
        .elementByCss('[accessbilityId="login"]')
        .click()
        .sleep(1000)
        .elementByCss('#app > form > div:nth-child(1) .ant-form-explain')
        .text()
        .then(text => assert.equal(text, 'Please input your username!'));
    });

    it('input should be correct', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample#login`)
        .elementByCss('[accessbilityId="username"]')
        .formInput('username')
        .elementByCss('[accessbilityId="login"]')
        .click()
        .elementByCssOrNull('#app > form > div:nth-child(1) .ant-form-explain')
        .then(res => assert.deepEqual(res, null));
    });

    it('submit should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/antd-sample#login`)
        .elementByCss('[accessbilityId="username"]')
        .formInput('username')
        .elementByCss('[accessbilityId="password"]')
        .formInput('password')
        .elementByCss('[accessbilityId="login"]')
        .click()
        .elementByCssOrNull('#app > form > div:nth-child(1) .ant-form-explain')
        .then(res => assert.deepEqual(res, null));
    });
  });
});

