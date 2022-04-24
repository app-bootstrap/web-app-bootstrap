'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/app-bootstrap.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          platformName: 'playwright',
          browserName: 'chromium',
          width: 375,
          height: 667,
          deviceScaleFactor: 2
        });
    });

    beforeEach(() => {
      return driver
        .getUrl(`${BASE_URL}/app-bootstrap`);
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

    it('render success', () => {
      return driver
        .sleep(3000)
        .elementByCss('#app > div > div:nth-child(1) > div > a')
        .click()
        .sleep(3000);
    });
  });
});

