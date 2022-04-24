'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/vuex-ts.test.js', () => {
  describe('page func testing', () => {
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
        .getUrl(`${BASE_URL}/vuex-ts`);
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

    it('setValue vs formInput', () => {
      return driver
        .elementByCss('#new-todo')
        .formInput(`input by formInput ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        })
        .sleep(3000)
        .elementByCss('#new-todo')
        .clear()
        .sendKeys(`input by sendKeys ${Date.now()}`)
        .elementByCss('#new-todo')
        .domEvent('keyup', {
          key: 'Enter',
          keyCode: 13,
        });
    });
  });
});

